package com.yedam.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.MemberVO;

public interface MemberService {
	MemberVO loginCheck(String id, String pw);
	List<MemberVO> memberList(String orderBy, String res);
	
	// 차트(작성자별 건수)
	List<Map<String, Object>> getCountByMember();
	
	// 회원탈퇴
	String signOutProc(Map<String, String> map);
	
}
