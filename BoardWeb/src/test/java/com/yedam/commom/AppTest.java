package com.yedam.commom;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class AppTest {
	public static void main(String[] args) {
		BoardService svc = new BoardServiceImpl();
		svc.boardList().forEach(System.out::println);
		
		/* mapper 가져오기
		SqlSession sqlSession = DataSource.getInstance().openSession(true);
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
		
//		BoardVO brd = new BoardVO();
//		brd.setTitle("메퍼테스트");
//		brd.setContent("조건이 제대로 되는지");
//		brd.setWriter("newbie");
//		brd.setBoardNo(5);
		
//		if(mapper.insertBoard(brd) == 1) {
//			System.out.println("OK");
//		}
		
//		if(mapper.updateBoard(brd) == 1) {
//			System.out.println("OK");
//		}
		
//		mapper.deleteBoard(5);
		
//		mapper.selectList().forEach(board -> System.out.println(board.toString()));

		BoardVO bvo = mapper.selectBoard(6);
		System.out.println(bvo.getTitle());
		*/
		System.out.println("-= End =-");
	}
}
