/**
 * array1.js 
 */

// 등록 버튼에 클릭이벤트 추가
document.querySelector("#addBtn").addEventListener('click', function(e) {
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
})

document.querySelector("#modBtn").addEventListener('click', function(e) {
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
})


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
	
	function detailCallback(e) {
		// let tr = document.querySelector("#list tr:nth-of-type(1)");
		// document.querySelector("#fname").value = tr.children[0].innerHTML;
		// tr = e.target.parentElement
		document.querySelector("#fname").value = tr.children[0].innerHTML;
		document.querySelector("#faddress").value = tr.children[1].innerHTML;
		document.querySelector("#height").value = tr.children[2].innerHTML;
	} // end of detailCallback
	
	// tr만드는 부분
	let tr = document.createElement('tr');
	tr.addEventListener('click', detailCallback)
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
		e.target.parentElement.parentElement.remove();
	})
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	
	// 체크박스 => <td><input type="checkbox"></td> 의 상위요소 tr에 붙이기
	td = document.createElement('td');
	let inp = document.createElement('input');
	inp.setAttribute('type', 'checkbox');
	td.appendChild(inp);
	tr.appendChild(td);
	
	return tr;
} // end of makeTr

