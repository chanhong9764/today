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
  DIARY_OWNERSHIP_MISMATCH(HttpStatus.FORBIDDEN, "일기의 소유권이 일치하지 않습니다."),


  // 키워드
  KEYWORD_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 키워드를 찾을 수 없습니다."),

  INVALID_INPUT_VALUE(HttpStatus.BAD_REQUEST, "입력 조건을 확인하세요"),

  //기록
  RECORD_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 기록을 찾을 수 없습니다."),

  //임시 이미지
  TEMPIMAGE_ALREADY_EXISTS(HttpStatus.CONFLICT, "해당 임시 데이터가 이미 존재합니다."),
  TEMPIMAGE_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 임시 데이터를 찾을 수 없습니다."),
  // 알림
  NOTICE_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 알림을 찾을 수 없습니다.");



  private final HttpStatus httpStatus;
  private final String message;
}
