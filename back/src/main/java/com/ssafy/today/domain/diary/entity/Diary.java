package com.ssafy.today.domain.diary.entity;

import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class Diary extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "diary_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Enumerated(EnumType.STRING)
    private Feel feel;

    @ColumnDefault("false")
    private Boolean important;

    @Column(name = "img_url",length = 500)
    private String imgUrl;

    @Column(length = 1000)
    private String content;

    private Long angry;

    private Long disgust;

    private Long fear;

    private Long happiness;

    private Long sadness;

    private Long surprise;

    @Enumerated(EnumType.STRING)
    private MBTI mbti;


    @Builder
    public Diary(Long id, Member member, Feel feel, Boolean important, String imgUrl, String content, Long angry, Long disgust, Long fear, Long happiness, Long sadness, Long surprise, MBTI mbti) {
        this.member = member;
        this.feel = feel;
        this.important = important;
        this.imgUrl = imgUrl;
        this.content = content;
        this.angry = angry;
        this.disgust = disgust;
        this.fear = fear;
        this.happiness = happiness;
        this.sadness = sadness;
        this.surprise = surprise;
        this.mbti = mbti;
    }

    public void updateContent(String content){
        this.content = content;
    }

    public void updateImportant(boolean important){
        this.important = important;
    }

    public void updateImg(String imgUrl){
        this.imgUrl = imgUrl;
    }
}
