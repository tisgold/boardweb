/**
 * json3.js 
 */
document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

// Asynchronous Javascript And Xml (AJAX)
let xhtp = new XMLHttpRequest();
xhtp.open('get', 'data/MOCK_DATA.json'); // 서버상의 특정페이지 요청, 어떤 파일이든 가능
xhtp.send(); // 실제 요청
let employees; 
xhtp.onload = function(e) {
	// console.log(xhtp.response); // or responseText
	let json = xhtp.response;
	employees = JSON.parse(json);
	// console.log(employees);
	initList();
}

document.querySelector('#searchGender').addEventListener('change', function(e) {
	initList();
})

function initList() {
	let target = document.getElementById('empList');
	target.innerHTML = '';
	let selValue = document.querySelector('#searchGender').value;
	employees.forEach(emp => {
		if (selValue == 'All' || emp.gender == selValue) {
			target.appendChild(makeRow(emp));
		}
	});
}

// 사원정보 => row 생성
function makeRow(emp = {}) {
	let fields = ['id', 'first_name', 'last_name', 'salary'];
	let tr = document.createElement('tr');
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);
	})
	return tr;
}
