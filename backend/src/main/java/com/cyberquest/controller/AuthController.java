package com.cyberquest.controller;

import com.cyberquest.entity.PlayerProgress;
import com.cyberquest.entity.User;
import com.cyberquest.repository.PlayerProgressRepository;
import com.cyberquest.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository userRepository;
    private final PlayerProgressRepository playerProgressRepository;

    public AuthController(
            UserRepository userRepository,
            PlayerProgressRepository playerProgressRepository) {

        this.userRepository = userRepository;
        this.playerProgressRepository = playerProgressRepository;
    }


    // =====================================================
    // REGISTER
    // =====================================================

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        // Check email
        if (userRepository.existsByEmail(user.getEmail())) {

            return ResponseEntity
                    .badRequest()
                    .body("An account with this email already exists.");
        }


        // Check username
        if (userRepository.existsByUsername(user.getUsername())) {

            return ResponseEntity
                    .badRequest()
                    .body("This username is already taken.");
        }


        // Save user
        User savedUser = userRepository.save(user);


        // Create initial player progress
        PlayerProgress progress = new PlayerProgress();

        progress.setUser(savedUser);
        progress.setCurrentWorld(1);
        progress.setCurrentLevel(1);
        progress.setPoints(0);
        progress.setCoins(0);
        progress.setLives(3);

        playerProgressRepository.save(progress);


        // Response
        Map<String, Object> response = new HashMap<>();

        response.put("message", "Registration successful!");
        response.put("userId", savedUser.getId());
        response.put("username", savedUser.getUsername());
        response.put("email", savedUser.getEmail());

        return ResponseEntity.ok(response);
    }


    // =====================================================
    // LOGIN
    // =====================================================

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody Map<String, String> loginData) {

        String identifier =
                loginData.get("identifier");

        String password =
                loginData.get("password");


        if (identifier == null || password == null) {

            return ResponseEntity
                    .badRequest()
                    .body("Email/username and password are required.");
        }


        // Try email first
        Optional<User> userOptional =
                userRepository.findByEmail(identifier);


        // If email not found, try username
        if (userOptional.isEmpty()) {

            userOptional =
                    userRepository.findByUsername(identifier);
        }


        // User not found
        if (userOptional.isEmpty()) {

            return ResponseEntity
                    .badRequest()
                    .body("Invalid email/username or password.");
        }


        User user = userOptional.get();


        // Check password
        if (!user.getPassword().equals(password)) {

            return ResponseEntity
                    .badRequest()
                    .body("Invalid email/username or password.");
        }


        // Successful login
        Map<String, Object> response = new HashMap<>();

        response.put("message", "Login successful!");
        response.put("userId", user.getId());
        response.put("username", user.getUsername());
        response.put("email", user.getEmail());


        return ResponseEntity.ok(response);
    }
}