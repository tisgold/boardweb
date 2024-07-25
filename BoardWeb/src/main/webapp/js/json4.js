/**
 * json4.js 
 */
document.querySelector('#show').remove();
document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

// Asynchronous Javascript And Xml (AJAX)
let xhtp = new XMLHttpRequest();
xhtp.open('get', 'studentJson.do'); // 서버상의 특정페이지 요청, 어떤 파일이든 가능
xhtp.send(); // 실제 요청
let students; 
xhtp.onload = function(e) {
	// console.log(xhtp.response); // or responseText
	let json = xhtp.response;
	students = JSON.parse(json);
	// console.log(employees);
	initList();
}

function initList() {
	let target = document.getElementById('stdList');
	target.innerHTML = '';
	students.forEach(std => {
		target.appendChild(makeRow(std));
	});
}

// 학생정보 => row 생성
function makeRow(emp = {}) {
	let fields = ['stdNo', 'stdName', 'stdPhone'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sno', emp.stdNo);
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);
	})
	
	//삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRowFnc);
	btn.setAttribute('class', 'btn btn-danger');
	btn.innerHTML = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	
	return tr;
}

function deleteRowFnc(e) {
	console.log(e.target.parentElement.parentElement.firstChild.innerText);
	let tr = e.target.parentElement.parentElement;
	let sno = e.target.parentElement.parentElement.firstChild.innerText;
	sno = e.target.parentElement.parentElement.dataset.sno; // getAttribute("data-sno");
	const delHtp = new XMLHttpRequest();
	delHtp.open('get', 'removeStudent.do?sno=' + sno);
	delHtp.send(); // 실제 실행
	delHtp.onload = function() {
		let result = JSON.parse(delHtp.responseText); // {"retCode": "Success"}
		if(result.retCode == 'Success') {
			alert("삭제 성공!");
			// console.log(e.target.parentElement.parentElement); // 안됨
			tr.remove();
		}
		else if(result.retCode == 'Fail') {
			alert("삭제 실패");
		}
	}
}

// 등록이벤트
document.querySelector("#addBtn").addEventListener('click', addRowFnc);

function addRowFnc(e) {
	let sno = document.querySelector("#sno").value;
	let sname = document.querySelector("#sname").value;
	let phone = document.querySelector("#phone").value;
	
	let addHtp = new XMLHttpRequest();
	addHtp.open('get', 'addStudent.do?sno='+sno+'&sname='+sname+'&phone='+phone);
	addHtp.send();
	addHtp.onload = function(e) {
		console.log(addHtp.response);
		let result = JSON.parse(addHtp.response);
		if(result.retCode == 'Success') {
			let tr = makeRow(result.retVal);
			document.getElementById('stdList').appendChild(tr);
		}
	}
} // end of addRowFnc
