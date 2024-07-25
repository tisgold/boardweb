package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.StudentService;
import com.yedam.service.StudentServiceImpl;
import com.yedam.vo.StudentVO;

public class StudentJson implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 학생목록을 json문자열로 표현
		// [{"stdNo": "S2024-001", "stdName": "홍길동",...},{},{},...{}]
		resp.setContentType("text/json;charset=utf-8");
		String json = ""; // json 문자열 담기
		StudentService svc = new StudentServiceImpl();
		List<StudentVO> list = svc.studentList();
		
		json += "[";
		for (int i = 0; i < list.size(); i++) {
			json += "{\"stdNo\":\""+list.get(i).getStdNo()+"\"";
			json += ",\"stdName\":\""+list.get(i).getStdName()+"\"";
			json += ",\"stdPhone\":\""+list.get(i).getStdPhone()+"\"}";
			if(i != list.size()-1) {
				json += ",";
			}
		}
		json += "]";
		
		resp.getWriter().print(json);
	}

}
