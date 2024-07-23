package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.MemberVO;

public interface MemberMapper {
	// 로그인 체크
	MemberVO selectMember(@Param("id") String id, @Param("pw") String pw); // xml에서 사용
	
	List<MemberVO> selectList(@Param("order") String order);
	
}
