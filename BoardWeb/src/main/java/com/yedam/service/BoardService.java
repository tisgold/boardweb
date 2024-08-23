package com.yedam.service;

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.BoardVO;
import com.yedam.vo.ScheduleVO;

/*
 * MVC 패턴의 디자인에 따라서 Model 영역(service, dao:mapper)
 * 책: 4강 MVC기반 웹프로젝트 참고
 * 숙제: 536페이지 MVC 자세히 읽고 오세요
 */
public interface BoardService {
	List<BoardVO> boardList(SearchDTO search);
//	int totalCount(); // 페이징 계산용 건수
	int totalCount(SearchDTO search);
	boolean addBoard(BoardVO board);
	boolean modifyBoard(BoardVO board);
	boolean removeBoard(int boardNo);
	BoardVO getBoard(int boardNo);
	
	// 스케쥴 데이터 불러오기
	List<ScheduleVO> scheduleList();
//	Map<String, Object> scheduleList();
	// 스케쥴 입력
	boolean addSchedule(ScheduleVO svo);
	// 스케쥴 중복 점검
	boolean checkSchedule(ScheduleVO svo);
	// 스케쥴 삭제
	boolean removeSchedule(ScheduleVO svo);
}
