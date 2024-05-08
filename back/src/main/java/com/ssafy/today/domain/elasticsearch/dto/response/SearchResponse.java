package com.ssafy.today.domain.elasticsearch.dto.response;

import com.ssafy.today.domain.elasticsearch.entity.DiaryEs;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class SearchResponse {
    private Long diaryId;
    private String imgUrl;
    private LocalDateTime createdAt;
    private String content;

    @Builder
    public SearchResponse(Long diaryId, String imgUrl, LocalDateTime createdAt, String content) {
        this.diaryId = diaryId;
        this.imgUrl = imgUrl;
        this.createdAt = createdAt;
        this.content = content;
    }

    public static SearchResponse fromEntity(DiaryEs diaryEs) {
        return SearchResponse.builder()
                .content(diaryEs.getContent())
                .diaryId(diaryEs.getDiaryId())
                .createdAt(diaryEs.getCreatedAt())
                .imgUrl(diaryEs.getImgUrl())
                .build();
    }
}
