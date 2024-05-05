package com.ssafy.today.util.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
  // 회원
  KEY_NOT_FOUND(HttpStatus.UNAUTHORIZED, "키가 존재하지 않습니다."),
  MEMBER_NOT_FOUND(HttpStatus.UNAUTHORIZED, "해당 유저를 찾을 수 없습니다."),

  // 일기
  DIARY_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 일기를 찾을 수 없습니다."),


  // 키워드
  KEYWORD_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 키워드를 찾을 수 없습니다."),

  INVALID_INPUT_VALUE(HttpStatus.BAD_REQUEST, "입력 조건을 확인하세요"),

  //기록
  RECORD_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 기록을 찾을 수 없습니다."),

  // 알림
  NOTICE_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 알림을 찾을 수 없습니다.");

  private final HttpStatus httpStatus;
  private final String message;
}
