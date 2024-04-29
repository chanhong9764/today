package com.ssafy.today.domain.elasticsearch.entity;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.time.LocalDateTime;

@Document(indexName = "diary")
@Getter
public class DiaryEs {

    @Id
    private String _id;

    private String content;
    private Long memberId;
    private Long diaryId;
    private String imgUrl;
    private LocalDateTime createdAt;

    @Builder
    public DiaryEs(String content, Long memberId, Long diaryId, String imgUrl, LocalDateTime createdAt) {
        this.content = content;
        this.memberId = memberId;
        this.diaryId = diaryId;
        this.imgUrl = imgUrl;
        this.createdAt = createdAt;
    }
}


