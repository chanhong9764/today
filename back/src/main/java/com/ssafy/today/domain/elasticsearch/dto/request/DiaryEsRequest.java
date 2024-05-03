package com.ssafy.today.domain.elasticsearch.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class DiaryEsRequest {
    @NotNull
    private String content;
    @NotNull
    private Long memberId;
    @NotNull
    private Long diaryId;
    @NotNull
    private String imgUrl;
    @NotNull
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
