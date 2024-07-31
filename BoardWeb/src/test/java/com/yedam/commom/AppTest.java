package com.yedam.commom;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;

public class AppTest {
	public static void main(String[] args) {
		MemberService svc = new MemberServiceImpl();
		List<Map<String, Object>> list = svc.getCountByMember();
		for(Map<String, Object> map : list) {
			System.out.println("-------------------------");
			Set<String> keyset =  map.keySet();
			for(String key : keyset) {
				System.out.println(key + ": " + map.get(key));
			}
		}

//		ReplyService svc = new ReplyServiceImpl();
//		
//		SearchDTO search = new SearchDTO();
//		search.setBno(148);
//		search.setPage(5);
//		
//		svc.replyList(search).forEach(System.out::println);
		
//		ReplyVO rvo = new ReplyVO();
//		rvo.setReplyContent("등록연습");
//		rvo.setReplyer("user03");
//		rvo.setBoardNo(148);
//		
//		svc.addReply(rvo);
		
//		if (svc.removeReply(6)) {
//			System.out.println("삭제완료!");
//		}
		
		
//		BoardService svc = new BoardServiceImpl();
//
//		SearchDTO search = new SearchDTO();
//		search.setSearchCondition("W");
//		search.setKeyword("user");
//		search.setPage(1);
//		svc.boardList(search).forEach(System.out::println);

//		svc.boardList(5).forEach(System.out::println);

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
