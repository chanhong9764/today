package com.ssafy.today.domain.diary.repository;

import com.ssafy.today.domain.diary.entity.Diary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

    Page<Diary> findAllByMemberId(Long memberId, Pageable pageable);

}
