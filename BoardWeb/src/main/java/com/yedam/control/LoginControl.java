package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// id, pw 파라미터 => 게시글 목록 or 로그인 화면으로 이동
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");

		MemberService svc = new MemberServiceImpl();
		MemberVO mem = svc.loginCheck(id, pw);

		if(mem == null) {
			// 메세지를 "아이디와 비번을 확인하세요!"
			req.setAttribute("msg", "아이디와 비번을 확인하세요!");
			req.getRequestDispatcher("board/loginForm.tiles").forward(req, resp);
			return;
		}
		// 세션객체(attribute 활용해서 저장)
		HttpSession session = req.getSession();
		session.setAttribute("logid", id); // logid에 id값을 담음
		session.setMaxInactiveInterval(30 * 60); // 30분
		if(mem.getResponsibility().equals("User")) {
			resp.sendRedirect("boardList.do");
		}
		else if(mem.getResponsibility().equals("Admin")) {
			resp.sendRedirect("memberList.do");
		}
		else {
			System.out.println("권한을 지정하세요!");
		}
	}

}
