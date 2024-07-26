/**
 * boardService.js
 * 목록, 등록, 삭제 기능을 정의
 */
const svc = {
	replyList(param = {bno, page}, loadCallback) {
		const xhtp = new XMLHttpRequest();
 		xhtp.open('get', 'replyList.do?bno=' + param.bno + '&page=' + param.page);
 		xhtp.send();
 		xhtp.onload = loadCallback; // end of function
	}, // end of replyList
	
	// 등록
	addReply(param = {bno, replyer, content}, loadCallback) {
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'addReply.do?bno='+param.bno+'&content='+param.content+'&replyer='+param.replyer);
		xhtp.send();
		xhtp.onload = loadCallback;
	}, // end of addReply
	
	// 삭제
	removeReply(rno = 1, loadCallback) {
		const xhtp = new XMLHttpRequest();
		xhtp.open('get', 'removeReply.do?rno=' + rno);
		xhtp.send();
		xhtp.onload = loadCallback;
	} // end of removeReply
} // end of svc
