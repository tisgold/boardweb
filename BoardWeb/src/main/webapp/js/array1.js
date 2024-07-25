/**
 * array1.js 
 */

// 등록 버튼에 클릭이벤트 추가
document.querySelector("#addBtn").addEventListener('click', addBtnFnc);

// addBtnFnc 이벤트 핸들러 => 이벤트 발생시 e 매개변수 넘겨줌
function addBtnFnc(e) {
	let name = document.querySelector("#fname").value;
	let address = document.querySelector("#faddress").value;
	let height = document.querySelector("#height").value;
	
	if(!name || !address || !height) {
		alert('값을 입력하세요.');
		return;
	}
	let friend = {name, address, height}
		
	// tr만드는 부분
	let tr = makeTr(friend);
	document.getElementById('list').appendChild(tr);
	
	alert('OK');
	
	document.querySelector("#fname").value = '';
	document.querySelector("#faddress").value = '';
	document.querySelector("#height").value = '';
} // end of addBtnFnc

document.querySelector("#modBtn").addEventListener('click', modBtnFnc);

// modBtnFnc 이벤트 핸들러
function modBtnFnc(e) {
	// document.querySelectorAll("#list tr") -> tr 다 가져옴
	// document.querySelectorAll("#list tr").forEach(function (tr) {
    //   console.log(tr.children[0].innerHTML); });
    
    // 화면상에 있는 tr을 대상으로 변경을 해야하니
    document.querySelectorAll("#list tr").forEach(function(tr) {
	    // tr의 첫번째 자식요소의 innerHTML : 이름, 비교 fname의 value 같을때
		// faddress, height의 value를 tr의 두번째, 세번째 자식요소의 innerHTML 에 대입
		if(tr.children[0].innerHTML == document.querySelector("#fname").value) {
			tr.children[1].innerHTML = document.querySelector("#faddress").value;
			tr.children[2].innerHTML = document.querySelector("#height").value;
		}
	})
} // end of modBtnFnc

document.querySelector("#delBtn").addEventListener('click', delBtnFnc);

// delBtnFnc 이벤트 핸들러
function delBtnFnc(e) {
	document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked')//
	.forEach(function(item) {
		// console.log(item); // input태그
		item.parentElement.parentElement.remove();
	})
}

const friends = [
	{name: "홍길동", address: "대구 100번지", height: 170},
	{name: "김민규", address: "대전 200번지", height: 175},
	{name: "이성윤", address: "인천 300번지", height: 180}
]

makeList();

// <tr><td>홍길동</td><td>대구 100번지</td><td>170</td><td><button>삭제</button></td></tr>
function makeList() {
	friends.forEach(function(friend) {
		let tr = makeTr(friend);
		document.getElementById('list').appendChild(tr);
	});
}

// friend => tr 생성
function makeTr(friend = {name: 'Hong', address: 'Seoul', height: 170}) {
	// tr만드는 부분
	let tr = document.createElement('tr');
	tr.addEventListener('click', detailCallback, false) // 3번째 매개변수 : 버블링(true)
	// tr.addEventListener('mouseover', detailCallback) -> 여러개의 이벤트 처리 가능
	
	for(let prop in friend) {
		let td = document.createElement('td');
		td.innerHTML = friend[prop];
		tr.appendChild(td);
	}
	// 삭제 버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('class', 'btn btn-danger'); // <button class="btn btn-danger">삭제</button>
	btn.addEventListener('click', function(e) {
		e.stopPropagation(); // click : button > td > tr > table... 전파 중지
		e.target.parentElement.parentElement.remove();
	}, false) // 3번째 매개변수
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	
	// 체크박스 => <td><input type="checkbox"></td> 의 상위요소 tr에 붙이기
	td = document.createElement('td');
	let inp = document.createElement('input');
	inp.setAttribute('type', 'checkbox');
	inp.addEventListener('change', changeChkFnc);
	td.appendChild(inp);
	tr.appendChild(td);
	
	return tr;
} // end of makeTr

function detailCallback(e) {
	// e.stopPropagation(); : 삭제 안됨 (true일 때)
	// let tr = document.querySelector("#list tr:nth-of-type(1)");
	// document.querySelector("#fname").value = tr.children[0].innerHTML;
	console.log(e.target.parentElement);
	let tr = e.target.parentElement; // 이벤트를 대상으로 tr영역을 찾아야함
	// this : 1) 함수영역에서 window 2) 이벤트에서 대상 3) 객체에서는 객체
	tr = this;	
	document.querySelector("#fname").value = tr.children[0].innerHTML;
	document.querySelector("#faddress").value = tr.children[1].innerHTML;
	document.querySelector("#height").value = tr.children[2].innerHTML;
} // end of detailCallback

// thead에 있는 체크박스 이벤트 등록
document.querySelector('div.container-fluid>table>thead input[type="checkbox"]')//
.addEventListener('change', changeFnc);
	
function changeFnc(e) {
	console.log(e.target.checked);
	console.log(document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked').length);
	// 찾으려는 대상 체크박스
	document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]')//
	.forEach(function(item) {
		// console.log(item);
		item.checked = e.target.checked;
	})
}


// tbody에 있는 체크박스 이벤트 등록

function changeChkFnc(e) {
	let chkboxNum = document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]').length;
	let checkedNum = document.querySelectorAll('div.container-fluid>table>tbody input[type="checkbox"]:checked').length;
	console.log(chkboxNum);
	console.log(checkedNum);
	if (chkboxNum == checkedNum) {
		document.querySelector('div.container-fluid>table>thead input[type="checkbox"]').checked = true;
	}
	else {
		document.querySelector('div.container-fluid>table>thead input[type="checkbox"]').checked = false;
	}
}
