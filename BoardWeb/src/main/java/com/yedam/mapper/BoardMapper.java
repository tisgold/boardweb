package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.BoardVO;
import com.yedam.vo.ScheduleVO;

/*
 * 글목록, 등록, 수정, 삭제, 단건조회
 * 기능정의 -> 기능구현(BoardMapper.xml)
 */
public interface BoardMapper {
	List<BoardVO> selectList();
	List<BoardVO> selectListPaging(SearchDTO search); // 페이지정보 -> 10건씩 출력
	// 페이징 계산하기 위한 전체건수
	int selectTotalCount(SearchDTO search);
	int insertBoard(BoardVO board);
	int updateBoard(BoardVO board);
	int deleteBoard(int boardNo);
	BoardVO selectBoard(int boardNo);
	
	// 스케쥴 리스트
	List<ScheduleVO> selectSchedule();
	// 스케쥴 입력
	int insertSchedule(ScheduleVO svo);
	// 스케쥴 중복 점검
	int selSchedule(ScheduleVO svo);
	// 스케쥴 삭제
	int deleteSchedule(ScheduleVO svo);
}
