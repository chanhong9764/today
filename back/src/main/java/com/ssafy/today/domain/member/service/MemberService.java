package com.ssafy.today.domain.member.service;

import com.ssafy.today.domain.member.dto.request.MemberRequestDto;
import com.ssafy.today.domain.member.entity.Member;
import com.ssafy.today.domain.member.repository.MemberRepository;
import com.ssafy.today.util.response.ErrorCode;
import com.ssafy.today.util.response.exception.GlobalException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;

    public Member getMember(Long id) {
        return memberRepository.findById(id).orElseThrow(
                () -> new GlobalException(ErrorCode.MEMBER_NOT_FOUND));
    }
    public Member createMember(MemberRequestDto memberRequestDto){
        Member member = memberRequestDto.toEntity();
        memberRepository.save(member);
        return member;
    }

//    public Member updateMember(Long id, MemberRequestDto memberRequestDto){
//        Optional<Member> member = memberRepository.findById(id);
//
//        memberRepository.(member);
//        return member;
//    }

    public boolean isMemberExists(String email) {
        return memberRepository.existsByEmail(email);
    }


}
