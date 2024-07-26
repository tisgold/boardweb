package com.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReplyVO {
	/*
	 * reply_no number,
  reply_content varchar2(300) not null,
  replyer varchar2(10) not null,
  reply_date date default sysdate,
  board_no number not null
	 */
	private int replyNo;
	private String replyContent;
	private String replyer;
	private Date replyDate;
	private int boardNo;
	
}
