package com.cyberquest.controller;

import com.cyberquest.entity.PlayerProgress;
import com.cyberquest.repository.PlayerProgressRepository;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin(origins = "*")
public class ProgressController {

    private final PlayerProgressRepository playerProgressRepository;
    private final EntityManager entityManager;

    public ProgressController(
            PlayerProgressRepository playerProgressRepository,
            EntityManager entityManager) {

        this.playerProgressRepository = playerProgressRepository;
        this.entityManager = entityManager;
    }

    @PostMapping("/complete")
    @Transactional
    public ResponseEntity<?> completeLevel(
            @RequestBody Map<String, Object> data) {

        try {

            Long userId =
                    Long.valueOf(data.get("userId").toString());

            int worldNumber =
                    Integer.parseInt(data.get("worldNumber").toString());

            int levelNumber =
                    Integer.parseInt(data.get("levelNumber").toString());

            int xp =
                    Integer.parseInt(data.get("xp").toString());

            int coins =
                    Integer.parseInt(data.get("coins").toString());


            // Check whether this level is already completed

            Number existing =
                    (Number) entityManager.createNativeQuery(
                            "SELECT COUNT(*) FROM completed_levels " +
                            "WHERE user_id = :userId " +
                            "AND world_number = :worldNumber " +
                            "AND level_number = :levelNumber"
                    )
                    .setParameter("userId", userId)
                    .setParameter("worldNumber", worldNumber)
                    .setParameter("levelNumber", levelNumber)
                    .getSingleResult();


            // If already completed, don't give reward again

            if (existing.longValue() > 0) {

                return ResponseEntity.ok(
                        Map.of(
                                "message", "Level already completed.",
                                "alreadyCompleted", true
                        )
                );
            }


            // Get player's progress

            PlayerProgress progress =
                    playerProgressRepository
                            .findByUserId(userId)
                            .orElseThrow(
                                    () -> new RuntimeException(
                                            "Player progress not found."
                                    )
                            );


            // Add XP

            progress.setPoints(
                    progress.getPoints() + xp
            );


            // Add coins

            progress.setCoins(
                    progress.getCoins() + coins
            );


            // Unlock next level

            if (levelNumber < 10) {

                progress.setCurrentWorld(worldNumber);

                progress.setCurrentLevel(
                        levelNumber + 1
                );

            } else {

                if (worldNumber < 10) {

                    progress.setCurrentWorld(
                            worldNumber + 1
                    );

                    progress.setCurrentLevel(1);

                } else {

                    // All 100 levels completed

                    progress.setCurrentWorld(10);

                    progress.setCurrentLevel(10);
                }
            }


            // Save progress

            playerProgressRepository.save(progress);


            // Save completed level

            entityManager.createNativeQuery(
                    "INSERT INTO completed_levels " +
                    "(user_id, world_number, level_number) " +
                    "VALUES (:userId, :worldNumber, :levelNumber)"
            )
            .setParameter("userId", userId)
            .setParameter("worldNumber", worldNumber)
            .setParameter("levelNumber", levelNumber)
            .executeUpdate();


            Map<String, Object> response =
                    new HashMap<>();

            response.put(
                    "message",
                    "Level completed successfully!"
            );

            response.put(
                    "userId",
                    userId
            );

            response.put(
                    "worldNumber",
                    worldNumber
            );

            response.put(
                    "levelNumber",
                    levelNumber
            );

            response.put(
                    "points",
                    progress.getPoints()
            );

            response.put(
                    "coins",
                    progress.getCoins()
            );

            response.put(
                    "currentWorld",
                    progress.getCurrentWorld()
            );

            response.put(
                    "currentLevel",
                    progress.getCurrentLevel()
            );


            return ResponseEntity.ok(response);

        } catch (Exception e) {

            return ResponseEntity
                    .badRequest()
                    .body(
                            "Error completing level: "
                                    + e.getMessage()
                    );
        }
    }
}