package com.ssafy.today.domain.diary.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
@Data
@Builder
public class DiaryContentCreated {
    @JsonProperty("data.diary.memberId")
    private Long memberId;

    @JsonProperty("data.diary.diaryId")
    private Long diaryId;

    @JsonProperty("data.diary.createdAt")
    private LocalDateTime createdAt;

    @JsonProperty("data.imageUrl")
    private List<String> imageUrl;

    @JsonProperty("data.emotion.angry")
    private double angry;

    @JsonProperty("data.emotion.disgust")
    private double disgust;

    @JsonProperty("data.emotion.fear")
    private double fear;

    @JsonProperty("data.emotion.happiness")
    private double happiness;

    @JsonProperty("data.emotion.sadness")
    private double sadness;

    @JsonProperty("data.emotion.surprise")
    private double surprise;

    @JsonProperty("data.mbti")
    private String mbti;

}
