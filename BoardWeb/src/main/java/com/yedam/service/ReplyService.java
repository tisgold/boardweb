package com.yedam.service;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.ReplyVO;

public interface ReplyService {
	List<ReplyVO> replyList(SearchDTO search); // 댓글 목록
	boolean addReply(ReplyVO rvo); // 댓글 등록
	boolean removeReply(int replyNo); // 댓글 삭제
	
	int replyTotalCnt(int boardNo); // 댓글 개수
}
