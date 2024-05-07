package com.ssafy.today.global.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class SchedulerConfiguration {
  @Scheduled(cron = "* * 19 * * * *") // 매일 매시 05분에 실행
  public void findYetUser() {
    log.info("배치가 실행됩니다.");
  }
}
