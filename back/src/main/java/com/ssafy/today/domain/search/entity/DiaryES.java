package com.ssafy.today.domain.search.entity;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.time.LocalDateTime;

@Document(indexName = "diary")
@Getter
public class DiaryES {

    @Id
    private String _id;

    private String content;
    private Long memberId;
    private Long diaryId;
    private String imgUrl;
    private LocalDateTime createdAt;
}
