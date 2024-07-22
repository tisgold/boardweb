package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.control.ActionControl;
import com.yedam.control.AddBoardControl;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardForm;
import com.yedam.control.BoardListControl;
import com.yedam.control.DelBoardControl;
import com.yedam.control.DeleteBoard;
import com.yedam.control.LoginControl;
import com.yedam.control.LoginForm;
import com.yedam.control.LogoutControl;
import com.yedam.control.ModBoardControl;
import com.yedam.control.StudentListControl;
import com.yedam.control.UpdateBoard;

/*
 * FrontController 역할은 사용자의 모든 요청을 처리
 * 서블릿.  a.do, sample.do
 * 객체생성 -> init -> service -> destroy
 */
public class FrontController extends HttpServlet {
	Map<String, Control> map;
	
	public FrontController() {
		map = new HashMap<>();
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/boardList.do", new BoardListControl());
		// 글 등록 구현: 등록화면(boardForm.do) + DB등록(addBoard.do) -> 글목록페이지 이동
		map.put("/boardForm.do", new BoardForm());
		map.put("/addBoard.do", new AddBoardControl());
		map.put("/board.do", new BoardControl());
		map.put("/removeBoard.do", new DelBoardControl()); // 삭제 화면
		map.put("/deleteBoard.do", new DeleteBoard()); // 실제 삭제
		map.put("/modifyBoard.do", new ModBoardControl()); // 수정 화면
		map.put("/updateBoard.do", new UpdateBoard()); // 실제 수정
		// 로그인
		map.put("/loginForm.do", new LoginForm()); // 로그인 화면
		map.put("/login.do", new LoginControl()); // 실제 로그인 기능
		map.put("/logout.do", new LogoutControl()); // 로그아웃 기능
		
		// 학생목록
		map.put("/stdList.do", new StudentListControl());
		// 태그연습
		map.put("/action.do", new ActionControl());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// boardList.do - 목록, addBoard.do - 등록
		String uri = req.getRequestURI(); // URL(http://localhost/BoardWeb/boardList.do) vs URI(/BoardWeb/boardList.do)
		String context = req.getContextPath(); // 프로젝트명
		String path = uri.substring(context.length()); // "/boardList.d"
		
		System.out.println(path);
		
		Control sub = map.get(path);
		sub.exec(req, resp);
	}
}
