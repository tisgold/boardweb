package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	// datatable 연습
	List<ReplyVO> selectList(int boardNo); // 댓글 조회
	List<ReplyVO> selectListPaging(SearchDTO search); // 원본글번호, 페이지정보
	int insertReply(ReplyVO rvo); // 댓글 등록
	int deleteReply(int replyNo); // 댓글 삭제
	// 댓글페이징
	int totalReplyCnt(int boardNo); // 글번호 댓글 개수

}
