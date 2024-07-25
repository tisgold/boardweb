package com.yedam.service;

import java.util.List;

import com.yedam.vo.StudentVO;

public interface StudentService {
	// 학생목록조회
	List<StudentVO> studentList();
	// 학생 삭제
	boolean removeStudent(String sno);
	// 학생 등록
	boolean addStudent(StudentVO svo);
}
