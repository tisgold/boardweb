/**
 * json2.js 
 */
document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

let json = `[{"id":1,"first_name":"Brandise","last_name":"Eves","email":"beves0@house.gov","gender":"Female","salary":1594},
{"id":2,"first_name":"Sharla","last_name":"Gliddon","email":"sgliddon1@jugem.jp","gender":"Female","salary":9898},
{"id":3,"first_name":"Bertram","last_name":"Tradewell","email":"btradewell2@naver.com","gender":"Male","salary":6583},
{"id":4,"first_name":"Ora","last_name":"Billitteri","email":"obillitteri3@diigo.com","gender":"Non-binary","salary":3140},
{"id":5,"first_name":"Kitti","last_name":"Blaycock","email":"kblaycock4@apple.com","gender":"Female","salary":1298},
{"id":6,"first_name":"Arturo","last_name":"Gerholz","email":"agerholz5@cargocollective.com","gender":"Male","salary":6392},
{"id":7,"first_name":"Winifield","last_name":"Dolder","email":"wdolder6@google.fr","gender":"Male","salary":6946},
{"id":8,"first_name":"Burg","last_name":"Redrup","email":"bredrup7@admin.ch","gender":"Male","salary":5499},
{"id":9,"first_name":"Bernadine","last_name":"McElroy","email":"bmcelroy8@mozilla.org","gender":"Female","salary":6183},
{"id":10,"first_name":"Janaye","last_name":"Crangle","email":"jcrangle9@reuters.com","gender":"Female","salary":8668},
{"id":11,"first_name":"Emelda","last_name":"Aldgate","email":"ealdgatea@huffingtonpost.com","gender":"Female","salary":7788},
{"id":12,"first_name":"Linnet","last_name":"Al Hirsi","email":"lalhirsib@harvard.edu","gender":"Female","salary":8548},
{"id":13,"first_name":"Heidie","last_name":"Cropton","email":"hcroptonc@jugem.jp","gender":"Female","salary":4452},
{"id":14,"first_name":"Sibylla","last_name":"Jako","email":"sjakod@usgs.gov","gender":"Female","salary":8262},
{"id":15,"first_name":"Humfried","last_name":"MacClancey","email":"hmacclanceye@google.com.au","gender":"Genderfluid","salary":2658},
{"id":16,"first_name":"Morlee","last_name":"Woodburne","email":"mwoodburnef@ifeng.com","gender":"Male","salary":3269},
{"id":17,"first_name":"Berk","last_name":"Bowshire","email":"bbowshireg@cnbc.com","gender":"Male","salary":3530},
{"id":18,"first_name":"Godard","last_name":"MacFaul","email":"gmacfaulh@upenn.edu","gender":"Male","salary":8405},
{"id":19,"first_name":"Rourke","last_name":"Gooddie","email":"rgooddiei@unblog.fr","gender":"Male","salary":7858},
{"id":20,"first_name":"Xena","last_name":"Alliban","email":"xallibanj@nature.com","gender":"Female","salary":7461}]`;

let employees = JSON.parse(json);
console.log(employees);

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

initList();

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
