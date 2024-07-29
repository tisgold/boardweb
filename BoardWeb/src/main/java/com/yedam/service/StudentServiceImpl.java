package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.mapper.StudentMapper;
import com.yedam.vo.StudentVO;

public class StudentServiceImpl implements StudentService {
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);

	@Override
	public List<StudentVO> studentList() {
		return mapper.studentList();
	}

	@Override
	public boolean removeStudent(String sno) {
		return mapper.deleteStudent(sno) == 1;
	}

	@Override
	public boolean addStudent(StudentVO svo) {
		return mapper.insertStudent(svo) == 1;
	}

}
