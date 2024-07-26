/**
 * board.js
 */
console.log("board.js" + bno);
let page = 1; // 아랫쪽에서 댓글의 페이지를 지정하는 변수

// 댓글등록 버튼에 클릭 이벤트 등록
document.querySelector('#addReply').addEventListener('click', addReplyFnc);

function addReplyFnc(){
	let content = document.querySelector('#content').value;
	if(!replyer || !content) {
		alert("입력항목을 확인하세요!");
		return;
	}
	let param = {bno, replyer, content};
	
	svc.addReply(param, function() {
		// 등록완료 => 화면에 등록된 글 추가
		console.log(this.responseText);
		let result = JSON.parse(this.responseText);
		console.log(result);
		if(result.retCode == 'Success') {
			replyList.appendChild(makeRow(result.retVal));
		}
	});
} 
 
svc.replyList({bno, page}, function() {
	let result = JSON.parse(this.responseText);
	result.forEach(reply => { // result의 값(1번째 매개변수)
		replyList.appendChild(makeRow(reply));
	});
});

// reply => row 생성
function makeRow(reply = {}) {
	let cloned = document.querySelector('div.reply>div.content li').cloneNode(true); // true: 하위요소까지
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.style.display = 'block'; // <li style="display: 'block""></li>
	cloned.querySelector('span:nth-of-type(1)').innerText = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerText = reply.replyContent;
	cloned.querySelector('span:nth-of-type(3)').innerText = reply.replyer;
	cloned.querySelector('button').addEventListener('click', deleteReplyFnc);
	return cloned;
}

// 댓글삭제 이벤트핸들러
function deleteReplyFnc(e) {
	let rno = e.target.parentElement.parentElement.dataset.rno; // 댓글번호
	// dataset (컬렉션객체)
	svc.removeReply(rno, function(e) {
		let result = JSON.parse(this.responseText);
		if(result.retCode == 'Success') {
			alert("삭제 성공!");
			document.querySelector('li[data-rno="'+ rno + '"]').remove();
		}
		else {
			alert("삭제 실패!");
		}
	});
}

// paging영역의 a 태그를 클릭하면 페이지 이동
document.querySelectorAll('div.reply ul.pagination a').forEach(item => {
	item.addEventListener('click', function(e) {
		page = item.innerHTML;
		svc.replyList({bno, page}, function() {
			// 기존목록을 삭제
			replyList.querySelectorAll('li').forEach((li, idx) => {
				if(idx != 0) {
					li.remove();
				}
			});
			let result = JSON.parse(this.responseText);
			result.forEach(reply => {
				replyList.appendChild(makeRow(reply));
			});
		});
	});
});
