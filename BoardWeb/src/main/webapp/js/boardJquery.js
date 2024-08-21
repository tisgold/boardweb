/**
 * boardJquery.js 
 * jquery용 Ajax 사용
 */
let page = 1;

function makeRow(elem = {}) {
	let temp = $('#replyList li:eq(0)').clone();
	temp.attr('data-rno', elem.replyNo);
	temp.css('display', 'block'); // 속성 변경
	temp.find('span:eq(0)').html(elem.replyNo);
	temp.find('span').eq(1).html(elem.replyContent);
	temp.find('span').eq(2).html(elem.replyer);
	// 버튼생성을 새로...
	let btn = $('<button>삭제</button>').on('click', deleteRow);
	temp.find('span').eq(3).html(btn);
	
	return temp;
} // end of makeRow

$('#addReply').on('click', function() {
	let content = $('#content').val();
	$.ajax({
		url: 'addReply.do',
		data: {replyer: replyer, content: content, bno: bno},
		dataType: 'json',
		success: function(result) {
			console.log(result);
			let elem = result.retVal;
			$('#replyList').prepend(makeRow(elem));			
			$('#content').val(''); // 입력 초기화
		},
		error: function(err) {
			console.error(err);
		}
	})
}); // addReply 이벤트 추가

$.ajax({
	url: 'replyList.do', // 서버url 호출
	data: {bno: bno, page: page}, // 서버에 전달할 parameter
	dataType: 'json', // 서버로 전달받은 content 타입
	success: function(result) {
		console.log(result);
		$.each(result, function(i, elem) {
			console.log("요기=>", i, elem);
			
			$('#replyList').append(makeRow(elem));		
		})
	},
	error: function(err) {
		console.error(err);
	}
}); // $.ajax

function deleteRow() {
	// 삭제 ajax
	let li = $(this).parent().parent();
	let rno = li.data('rno');
	$.ajax({
		url: 'removeReply.do',
		data: {rno: rno},
		dataType: 'json',
		success: function(result) {
			console.log(result);
			if(result.retCode == 'Success') {
				// $(this).parent().parent().fadeOut();
				li.remove();
			}
			else {
				alert('처리중 예외가 발생');
			}
		},
		error: function(err) {
			console.error(err);
		}
	});
} // end of deleteRow()
