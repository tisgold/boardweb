package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;

public class LogoutControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 세션객체의 정보를 삭제하거나 setAttribute("logid", id) 삭제
		HttpSession session = req.getSession();
		session.invalidate(); // 세션객체의 정보 삭제
		resp.sendRedirect("loginForm.do");
	}

}
