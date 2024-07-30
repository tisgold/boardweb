package com.yedam.stream;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor // 필드값을 다 받는 생성자 생성
@NoArgsConstructor // 기본 생성자 생성
public class MemberVO implements Serializable {
	private int memberNo;
	private String memberName;
	private int point;
}
