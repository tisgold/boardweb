package com.yedam.common;

import lombok.Data;

@Data
public class PageDTO {
	private int page; // 현재 페이지
	private int startPage, endPage; // << 11 12 13 14 ...20 >>
	private boolean prev, next;

	public PageDTO(int page, int totalCnt) {
		// 페이지당 10건 보여주는 예제

		this.page = page;
		this.endPage = (int) (Math.ceil(page / 10.0) * 10); // << 10개 >>
		this.startPage = this.endPage - 9;

		int realEnd = (int) Math.ceil(totalCnt / 10.0); // 실제건수 계산한 마지막 페이지
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;

		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}
}
