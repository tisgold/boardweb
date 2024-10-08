package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.MemberVO;
import com.yedam.vo.StudentVO;

public interface StudentMapper {
	List<StudentVO> studentList();
	StudentVO selectOne(String sno);
	int insertStudent(StudentVO svo);
	int deleteStudent(String stdNo); // 학번에 해당하는 학생 삭제

	// 로그인 체크
	MemberVO selectMember(@Param("id") String id, @Param("pw") String pw); // xml에서 사용
}
