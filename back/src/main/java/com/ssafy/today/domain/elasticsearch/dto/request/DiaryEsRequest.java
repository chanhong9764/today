package com.ssafy.today.domain.elasticsearch.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class DiaryEsRequest {
    private String content;
    private Long memberId;
    private Long diaryId;
    private String imgUrl;
    private LocalDateTime createdAt;

    @Builder
    public DiaryEsRequest(String content, Long memberId, Long diaryId, String imgUrl, LocalDateTime createdAt) {
        this.content = content;
        this.memberId = memberId;
        this.diaryId = diaryId;
        this.imgUrl = imgUrl;
        this.createdAt = createdAt;
    }
}
