<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>exe1.jsp</title>
<script type="text/javascript" src="../js/jquery-3.7.1.min.js"></script>
<script>
	$(document).ready(function(){ // $(function() { 와 같다
		// #addBtn 이벤트
		$('#addBtn').on('click', function(){
			let val = $('#userVal').val();
			let btn = $('<button />').html('삭제').on('click', function(){
				$(this).parent().hide(1000);
			});
			$('#list').append($('<li />').html(val + " ").append(btn));
		});
		
		// #gtBtn 이벤트
		$('#gtBtn').on('click', function(){
			$('#list li:gt(2)').css('background', 'pink'); // 인덱스가 0번 부터 시작
		});
		
		$('#evenBtn').on('click', function(){
			$('#list li:odd').css('color', 'red');
		});
		
		$('#contBtn').on('click', function(){
			$('#list li:contains(사과4)').css('background', 'yellow');
		});
		
		$('#notBtn').on('click', function(){
			$('#list li:not(:has(span))').css('background', 'green');
		});
	})
</script>
</head>
<body>
	입력:<input id="userVal"> <!-- val() : value -->
	<button id="addBtn">추가</button>
	<button id="gtBtn">3번째이후</button>
	<button id="evenBtn">짝수</button>
	<button id="contBtn">사과4</button>
	<button id="notBtn">not</button>
	
	<div id="show">
		<ul id="list">
			<li>사과1 <span>span</span><button>삭제</button></li>
			<li>사과2 <button>삭제</button></li>			
			<li>사과3 <button>삭제</button></li>			
			<li>사과4 <button>삭제</button></li>			
			<li>사과5 <button>삭제</button></li>			
			<li>사과6 <button>삭제</button></li>			
		</ul>
	</div>
</body>
</html>