package com.ssafy.today.domain.diary.repository;

import com.ssafy.today.domain.diary.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
