package com.ssafy.today.global;

import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.diary.entity.Feel;
import com.ssafy.today.domain.member.entity.Member;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

import static com.ssafy.today.domain.diary.entity.Feel.SAD;
import static com.ssafy.today.domain.diary.entity.Feel.SURPRISE;

@Component
@RequiredArgsConstructor
public class initDB {

  private final InitService initService;

  @PostConstruct
  public void init() {
//       initService.dbInit1();
  }

  @Component
  @Transactional
  @RequiredArgsConstructor
  static class InitService {

    private final EntityManager em;

    public void dbInit1() {
      String lolem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

      Member member1 = Member.builder()
              .email("tjdgus4560@naver.com")
              .nickname("한성현")
              .build();
      em.persist(member1);

      Diary diary1 = Diary.builder()
              .member(member1)
              .content(lolem)
              .imgUrl("https://mimgnews.pstatic.net/image/origin/001/2024/04/25/14651374.jpg?type=nf220_150")
              .feel(SAD)
              .important(true)
              .build();

      Diary diary2 = Diary.builder()
              .member(member1)
              .content(lolem)
              .imgUrl("https://mimgnews.pstatic.net/image/origin/001/2024/04/25/14651374.jpg?type=nf220_150")
              .feel(SURPRISE)
              .build();

      em.persist(diary1);
      em.persist(diary2);

    }

    // 테스트 init

  }
}
