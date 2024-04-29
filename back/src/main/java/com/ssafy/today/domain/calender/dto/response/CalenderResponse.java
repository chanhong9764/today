package com.ssafy.today.domain.calender.dto.response;


import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.diary.entity.Feel;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CalenderResponse {
    private Long id;
    private Long memberId;
    private Boolean important;
    private String imgUrl;
    private String content;
    private LocalDateTime createdAt;

    public static CalenderResponse fromEntity(Diary diary){
        CalenderResponse calenderResponse = CalenderResponse.builder()
                .id(diary.getId())
                .memberId(diary.getMember().getId())
                .important(diary.getImportant())
                .imgUrl(diary.getImgUrl())
                .content(diary.getContent())
                .createdAt(diary.getCreatedAt())
                .build();

        return calenderResponse;
    }
}

