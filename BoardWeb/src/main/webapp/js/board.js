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
		// console.log(this.responseText);
		let result = JSON.parse(this.responseText);
		// console.log(result);
		if(result.retCode == 'Success') {
			replyList.appendChild(makeRow(result.retVal));
			
			// 댓글 추가시 리스트 다시 로드 : 5개씩
			page = 1;
			showPage();
		}
	});
} // end of addReplyFnc

showPage();

// 댓글 목록 출력 
function showPage() {
	svc.replyList({bno, page}, function() {
		// 기존목록을 삭제
		replyList.querySelectorAll('li').forEach((li, idx) => {
			if(idx != 0) {
				li.remove();
			}
		});
		
		let result = JSON.parse(this.responseText);
		result.forEach(reply => { // result의 값(1번째 매개변수)
			replyList.appendChild(makeRow(reply));
		});
	// 실제 데이터 출력
	svc.pagingCount(bno, createPageList);
	});
}

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
			// document.querySelector('li[data-rno="'+ rno + '"]').remove();
			
			// 삭제시 리스트 다시 로드
			showPage();						
		}
		else {
			alert("삭제 실패!");
		}
	});
}

// 페이지 a태그 생성
function createPageList(event) {
	console.log(this.responseText);
	let result = JSON.parse(this.responseText);
	let totalCnt = result.totalCount;
	
	let startPage, endPage; // 현재 페이지를 기준으로 계산한 첫 페이지번호 ~ 마지막 페이지번호
	let next, prev; // 이전, 이후 체크하는 변수
	let realEnd = Math.ceil(totalCnt / 5);
	
	endPage = Math.ceil(page / 10) * 10;
	startPage = endPage - 9;
	endPage = endPage > realEnd ? realEnd : endPage;
	
	prev = startPage > 1;
	next = endPage < realEnd ? true : false;
	
	// 기존 html 지우기
	document.querySelector('ul.pagination').innerHTML = '';
	
	// 이전 10페이지 여부
	let li = document.createElement('li');
	li.className = 'page-item';
	// 이전 페이지의 존재 여부
	if(prev) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', startPage-1);
		aTag.className = 'page-link';
		aTag.href = '#';
		aTag.innerHTML = 'Previous';
		li.appendChild(aTag);
	}
	else {
		li.classList.add('disabled');
		let span = document.createElement('span');
		span.className = 'page-link';
		span.innerHTML = 'Previous';
		li.appendChild(span);
	}
	document.querySelector('ul.pagination').appendChild(li);
	
	// 10개 출력
	// <li class="page-item"><a class="page-link" href="#">1</a></li>
	for (let p = startPage; p <= endPage; p++) {
		let li = document.createElement('li');
		li.className = 'page-item'; // li.setAttribute() 와 같은 의미
		if(page == p) {
			li.classList.add('active'); // 'page-item active' 
			let span = document.createElement('span');
			span.className = 'page-link';
			span.innerHTML = p;
			li.appendChild(span);
		}
		else {
			let aTag = document.createElement('a');
			aTag.setAttribute('data-page', p);
			aTag.className = 'page-link';
			aTag.href = '#';
			aTag.innerHTML = p;
			li.appendChild(aTag);		
		}
		
		document.querySelector('ul.pagination').appendChild(li);
	} // end of for
	
	// 이후 10페이지 여부
	li = document.createElement('li');
	li.className = 'page-item';
	// 이전 페이지의 존재 여부
	if(next) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', endPage+1);
		aTag.className = 'page-link';
		aTag.href = '#';
		aTag.innerHTML = 'Next';
		li.appendChild(aTag);
	}
	else {
		li.classList.add('disabled'); // li태그의 스타일을 비활성화
		let span = document.createElement('span');
		span.className = 'page-link';
		span.innerHTML = 'Next';
		li.appendChild(span);
	}
	document.querySelector('ul.pagination').appendChild(li);
	
	// a태그의 이벤트 등록
	pageMove();
} // end of createPageList

// paging영역의 a 태그를 클릭하면 페이지 이동
function pageMove() {
	document.querySelectorAll('div.reply ul.pagination a').forEach(item => {
		item.addEventListener('click', function(e) {
			page = item.dataset.page;
			
			showPage(); // 댓글 목록 출력
		}); // end of click 이벤트
	});
} // end of pageMove
