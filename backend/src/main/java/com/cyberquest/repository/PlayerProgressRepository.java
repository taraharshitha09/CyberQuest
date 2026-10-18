package com.cyberquest.repository;

import com.cyberquest.entity.PlayerProgress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlayerProgressRepository extends JpaRepository<PlayerProgress, Long> {

    Optional<PlayerProgress> findByUserId(Long userId);
}