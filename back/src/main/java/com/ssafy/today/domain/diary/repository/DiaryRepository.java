package com.ssafy.today.domain.diary.repository;

import com.ssafy.today.domain.diary.entity.Diary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

    Page<Diary> findAllByMemberId(Long memberId, Pageable pageable);

    // 하루동안의 다이어리 불러오기
    List<Diary> findAllByMemberIdAndCreatedAtBetween(Long memberId, LocalDateTime startOfDay, LocalDateTime endOfDay);

    Diary findFirstByMemberIdAndCreatedAtBetweenAndImportant(Long member_id, LocalDateTime createdAt, LocalDateTime createdAt2, Boolean important);

}
