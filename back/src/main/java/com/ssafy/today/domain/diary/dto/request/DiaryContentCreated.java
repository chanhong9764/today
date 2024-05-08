package com.ssafy.today.domain.diary.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.today.domain.diary.entity.Diary;
import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.domain.tempimg.entity.TempImg;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@Builder
public class DiaryContentCreated {

    private Long memberId;

    private Long diaryId;

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

    public TempImg toTempImgEntity(Diary diary, Member member) {
        return TempImg.builder()
                .diary(diary)
                .member(member)
                .img1(imageUrl.size() > 0 ? imageUrl.get(0) : null)
                .img2(imageUrl.size() > 1 ? imageUrl.get(1) : null)
                .img3(imageUrl.size() > 2 ? imageUrl.get(2) : null)
                .img4(imageUrl.size() > 3 ? imageUrl.get(3) : null)
                .build();
    }

}
