package com.ssafy.today.domain.diary.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.domain.tempimg.entity.TempImg;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class DiaryContentCreated2 {
    private Diary diary;
    private List<String> imageUrl;
    private Emotion emotion;
    private String mbti;
    @Data
    @Builder
    static public class Diary {
        private Long memberId;
        private Long diaryId;
        private LocalDateTime createdAt;
    }

    @Data
    @Builder
    static public class Emotion {
        private Double angry;
        private Double disgust;
        private Double fear;
        private Double happiness;
        private Double sadness;
        private Double surprise;
    }
}
