package com.ssafy.today.domain.analysis.repository;

import com.ssafy.today.domain.analysis.entity.Analysis;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface AnalysisRepository extends JpaRepository<Analysis, Long> {
    boolean existsByMemberIdAndCreatedAtBetween(Long memberId, LocalDateTime startDate, LocalDateTime endDate);
    Analysis findFirstByMemberIdAndCreatedAtBetween(Long memberId, LocalDateTime startDate, LocalDateTime endDate);

}
