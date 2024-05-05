package com.ssafy.today.domain.notice.repository;

import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.domain.notice.entity.Notice;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
  List<Notice> findAllByMember(Member member);
}
