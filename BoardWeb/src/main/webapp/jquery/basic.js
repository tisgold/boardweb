/**
 * basic.js
 */
$(document).ready(function(){ // document.addEventListener('DOMContentLoaded', function(){
	//let obj = $('#show');
	//obj = document.getElementById('show');
	let obj = $('.show');
	obj.eq(0).html('Hello'); // eq(0) : 요소 중에서 인덱스가 0인 요소를 선택함(jQuery에서 제공하는 함수)
	obj[1].innerHTML = 'World'; // DOM 객체
	console.log(obj);
	
	// jquery 객체 생성
	$('#show').append($('<button />').html('삭제')); // <button>삭제</button>
	$('#show').append($('<button>삭제</button>'));
})
