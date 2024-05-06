package com.ssafy.today.domain.notice.controller;
import static com.ssafy.today.util.response.SuccessResponseEntity.getResponseEntity;
import com.ssafy.today.domain.notice.dto.request.NoticeUpdateRequest;
import com.ssafy.today.domain.notice.service.NoticeService;
import com.ssafy.today.util.response.ErrorCode;
import com.ssafy.today.util.response.SuccessCode;
import com.ssafy.today.util.response.exception.GlobalException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/notices")
public class NoticeController {
  private final NoticeService noticeService;
  // 알림 리스트 랜더링
  @GetMapping
  public ResponseEntity<?> getNotices(HttpServletRequest request){
    Long memberId = (Long)request.getAttribute("memberId");
    return getResponseEntity(SuccessCode.OK, noticeService.getNotices(memberId));
  }

  // 알림 수정
  @PutMapping
  public ResponseEntity<?> updateNoticeStatus(HttpServletRequest request,
      @Valid @RequestBody NoticeUpdateRequest noticeUpdateRequest, BindingResult bindingResult){
    Long memberId = (Long)request.getAttribute("memberId");
    if (bindingResult.hasErrors()) {
      throw new GlobalException(ErrorCode.INVALID_INPUT_VALUE);
    }
    noticeService.updateNotice(noticeUpdateRequest);
    return getResponseEntity(SuccessCode.OK);
  }
}