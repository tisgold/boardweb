package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.StudentService;
import com.yedam.service.StudentServiceImpl;

public class RemoveStudent implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String sno = req.getParameter("sno"); // removeStudent.do?sno=S2024-001
		StudentService svc = new StudentServiceImpl();
		if(svc.removeStudent(sno)) {
			// 성공적으로 삭제가 되면...{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
			
		}
		else {
			// 성공적으로 삭제가 되면...{"retCode": "Fail"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}

	}

}
