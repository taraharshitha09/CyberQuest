package com.cyberquest.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "player_progress")
public class PlayerProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(name = "current_world", nullable = false)
    private int currentWorld = 1;

    @Column(name = "current_level", nullable = false)
    private int currentLevel = 1;

    @Column(name = "points", nullable = false)
    private int points = 0;

    @Column(name = "coins", nullable = false)
    private int coins = 0;

    @Column(name = "lives", nullable = false)
    private int lives = 5;

    public PlayerProgress() {
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getCurrentWorld() {
        return currentWorld;
    }

    public void setCurrentWorld(int currentWorld) {
        this.currentWorld = currentWorld;
    }

    public int getCurrentLevel() {
        return currentLevel;
    }

    public void setCurrentLevel(int currentLevel) {
        this.currentLevel = currentLevel;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getCoins() {
        return coins;
    }

    public void setCoins(int coins) {
        this.coins = coins;
    }

    public int getLives() {
        return lives;
    }

    public void setLives(int lives) {
        this.lives = lives;
    }
}