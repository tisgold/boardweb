/**
 * index.js
 */
let json = "[{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014269519ko.jpg?l=ko\",\"prdName\":\"오쏘몰 이뮨 멀티비타민&amp;미네랄 7입 (1주분)\",\"prdCode\":\"A000000142695\",\"prdPrice\":\"38,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018908729ko.jpg?l=ko\",\"prdName\":\"[3만원 이상 구매시 보조배터리 증정]아임비타 멀티비타민 이뮨샷 12+2입 증정기획 (14일분)\",\"prdCode\":\"A000000189087\",\"prdPrice\":\"35,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019308608ko.jpeg?l=ko\",\"prdName\":\"오쏘몰 이뮨 멀티비타민&amp;미네랄 14입+2입(오쏘몰 바이탈 M/F 증정기획)\",\"prdCode\":\"A000000193086\",\"prdPrice\":\"75,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0000/A00000000294405ko.jpg?l=ko\",\"prdName\":\"고려은단 비타민C1000 120정 (4개월분)\",\"prdCode\":\"A000000002944\",\"prdPrice\":\"15,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015097708ko.jpg?l=ko\",\"prdName\":\"센트룸 멀티 구미 40정 (20일분)\",\"prdCode\":\"A000000150977\",\"prdPrice\":\"13,500\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016473602ko.jpg?l=ko\",\"prdName\":\"고려은단 비타민C1000 이지+비타민D 120정 (60일분)\",\"prdCode\":\"A000000164736\",\"prdPrice\":\"13,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016657404ko.jpg?l=ko\",\"prdName\":\"고려은단 멀티비타민 올인원 30정 (30일분)\",\"prdCode\":\"A000000166574\",\"prdPrice\":\"14,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018563401ko.jpg?l=ko\",\"prdName\":\"뉴칸 더블파워 밀크씨슬+멀티비타민 30개입 (30일분)\",\"prdCode\":\"A000000185634\",\"prdPrice\":\"128,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018103302ko.jpg?l=ko\",\"prdName\":\"프레스샷 올인원 토탈 영양 앰플 10개입 (10일분)\",\"prdCode\":\"A000000181033\",\"prdPrice\":\"29,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018921613ko.jpg?l=ko\",\"prdName\":\"[슈야&amp;토야] 닥터브라이언 복숭아맛 비타민C&amp;D 3000 100+15구미 기획 (38일분)\",\"prdCode\":\"A000000189216\",\"prdPrice\":\"15,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011214511ko.jpg?l=ko\",\"prdName\":\"네이처메이드 슈퍼B 에너지 콤플렉스 180정 (3개월분)\",\"prdCode\":\"A000000112145\",\"prdPrice\":\"33,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/B00000020671407ko.jpg?l=ko\",\"prdName\":\"GNM 올인원 이뮨 액상 종합비타민 트리플샷 7입 3박스 (21일분)\",\"prdCode\":\"B000000206714\",\"prdPrice\":\"79,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018937212ko.jpg?l=ko\",\"prdName\":\"마그랩 포 에너지 글루콘산마그네슘 25ml*10+2입 선물세트\",\"prdCode\":\"A000000189372\",\"prdPrice\":\"39,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014696305ko.jpg?l=ko\",\"prdName\":\"허벌랜드 비타민C 구미 60구미 (1개월분)\",\"prdCode\":\"A000000146963\",\"prdPrice\":\"23,700\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017691001ko.jpg?l=ko\",\"prdName\":\"엔젯오리진 에너지 비타민B-컴플렉스 구미(청포도향) 3,000mg 60구미 (30일분)\",\"prdCode\":\"A000000176910\",\"prdPrice\":\"12,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017499911ko.jpg?l=ko\",\"prdName\":\"비타바움 비타민B12플러스 브이 컴플렉스 8 (12병입) (12일분)\",\"prdCode\":\"A000000174999\",\"prdPrice\":\"49,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0016/A00000016473801ko.jpg?l=ko\",\"prdName\":\"고려은단 비타민C 골드플러스 120정 (120일분)\",\"prdCode\":\"A000000164738\",\"prdPrice\":\"29,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017469108ko.jpg?l=ko\",\"prdName\":\"아임비타 면역비타민C 1000 (60포) (30일분)\",\"prdCode\":\"A000000174691\",\"prdPrice\":\"21,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018991011ko.jpg?l=ko\",\"prdName\":\"경남 레모나 구미 60구미 (30일분) (멀티비타민+미네랄/루테인+A/비오틴+B) 3 중 택1\",\"prdCode\":\"A000000189910\",\"prdPrice\":\"18,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017500009ko.jpg?l=ko\",\"prdName\":\"비타바움 멀티비타민 플러스 브이 컴플렉스 15 (12병입) (12일분)\",\"prdCode\":\"A000000175000\",\"prdPrice\":\"49,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018725302ko.jpg?l=ko\",\"prdName\":\"고려은단 메가도스B7 활성비오틴 60정 (2개월분)\",\"prdCode\":\"A000000187253\",\"prdPrice\":\"14,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015141004ko.jpg?l=ko\",\"prdName\":\"경남 레모나산 70포 (70일분)\",\"prdCode\":\"A000000151410\",\"prdPrice\":\"19,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019143403ko.jpg?l=ko\",\"prdName\":\"프레스샷 마그코어 10개입 (10일분)\",\"prdCode\":\"A000000191434\",\"prdPrice\":\"39,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011206821ko.jpg?l=ko\",\"prdName\":\"블랙모어스 칼슘마그네슘 플러스비타민D 60정+60정 (2개월분)\",\"prdCode\":\"A000000112068\",\"prdPrice\":\"65,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017691102ko.jpg?l=ko\",\"prdName\":\"엔젯오리진 엘더베리 플레이버 비타민 C&amp;D, 아연 3,000mg 70구미 (35일분)\",\"prdCode\":\"A000000176911\",\"prdPrice\":\"13,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018991909ko.jpg?l=ko\",\"prdName\":\"경남 레모나 루테인+비타민A 구미 60구미 (30일분)\",\"prdCode\":\"A000000189919\",\"prdPrice\":\"18,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018992012ko.jpg?l=ko\",\"prdName\":\"경남 레모나 비오틴+비타민B 구미 60구미 (30일분)\",\"prdCode\":\"A000000189920\",\"prdPrice\":\"18,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0000/A00000000564714ko.jpg?l=ko\",\"prdName\":\"세노비스 여성용멀티비타민미네랄 60캡슐 (2개월분)\",\"prdCode\":\"A000000005647\",\"prdPrice\":\"45,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0011/A00000011214909ko.jpg?l=ko\",\"prdName\":\"네이처메이드 액티브 데일리 멀티 포 우먼 120정 (2개월분)\",\"prdCode\":\"A000000112149\",\"prdPrice\":\"35,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0010/A00000010516204ko.jpg?l=ko\",\"prdName\":\"센트룸 멀티 비타민 미네랄 실버 우먼 50정 (50일분)\",\"prdCode\":\"A000000105162\",\"prdPrice\":\"27,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020532701ko.jpg?l=ko\",\"prdName\":\"센트룸 멀티비타민 우먼 더블업 50정 (50일분)\",\"prdCode\":\"A000000205327\",\"prdPrice\":\"27,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018937504ko.jpg?l=ko\",\"prdName\":\"프레스샷 올인원 토탈 영양 앰플 10입/20입 중 택1\",\"prdCode\":\"A000000189375\",\"prdPrice\":\"29,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0014/A00000014490707ko.jpg?l=ko\",\"prdName\":\"얼라이브 원스데일리 포 우먼 60정 (2개월분)\",\"prdCode\":\"A000000144907\",\"prdPrice\":\"30,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0018/A00000018846002ko.jpg?l=ko\",\"prdName\":\"닥터브라이언 멀티비타민&amp;철분츄어블 90정 (90일분)\",\"prdCode\":\"A000000188460\",\"prdPrice\":\"19,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020580607ko.jpg?l=ko\",\"prdName\":\"닥터브라이언 피치레몬맛구미 멀티 비타민 100구미 (33일분) 슈아콜라보 기획\",\"prdCode\":\"A000000205806\",\"prdPrice\":\"18,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019722402ko.jpg?l=ko\",\"prdName\":\"위클리랩 흡수가 빠른 리포좀 비타민C 30포입 (30일분)\",\"prdCode\":\"A000000197224\",\"prdPrice\":\"20,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020239701ko.jpg?l=ko\",\"prdName\":\"고려은단 멀티비타민 이뮨샷 6병\",\"prdCode\":\"A000000202397\",\"prdPrice\":\"17,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0017/A00000017698005ko.jpg?l=ko\",\"prdName\":\"닥터브라이언 복숭아맛구미 비타민C&amp;D 3000 (100구미) (33일분)\",\"prdCode\":\"A000000176980\",\"prdPrice\":\"15,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019958605ko.jpg?l=ko\",\"prdName\":\"엔젯오리진 비타프레쉬 귤젤리 비타민 C&amp;D 3000 70구미+15구미 증정기획(28일분)\",\"prdCode\":\"A000000199586\",\"prdPrice\":\"12,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0013/A00000013197301ko.jpg?l=ko\",\"prdName\":\"베로카 발포 멀티비타민 15정 (15일분)\",\"prdCode\":\"A000000131973\",\"prdPrice\":\"12,400\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015140902ko.jpg?l=ko\",\"prdName\":\"경남 레모나산 30포 (1개월분)\",\"prdCode\":\"A000000151409\",\"prdPrice\":\"9,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020532501ko.jpg?l=ko\",\"prdName\":\"센트룸 멀티비타민 맨 더블업 50정 (50일분)\",\"prdCode\":\"A000000205325\",\"prdPrice\":\"27,000\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019885717ko.jpg?l=ko\",\"prdName\":\"슬로우글로우 비타민 씨트롱 구미 30구미(15일분) 외 2종\",\"prdCode\":\"A000000198857\",\"prdPrice\":\"22,500\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0019/A00000019820402ko.jpg?l=ko\",\"prdName\":\"[이보영비타민] 마이핏 V 멀티비타 액티브 워터톡 14포 (14일분)\",\"prdCode\":\"A000000198204\",\"prdPrice\":\"19,800\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020526304ko.jpg?l=ko\",\"prdName\":\"네이처메이드 비타민C 구미 (40일분)\",\"prdCode\":\"A000000205263\",\"prdPrice\":\"29,500\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020473906ko.jpg?l=ko\",\"prdName\":\"아임비타 멀티비타민미네랄 구미젤리 60구미 (30일분)\",\"prdCode\":\"A000000204739\",\"prdPrice\":\"16,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020471701ko.jpg?l=ko\",\"prdName\":\"[지효 PICK]닥터랩노쉬 비타민 구미 (비타민C/B1/B3/B6/B7) 60정 (4주분)(온)\",\"prdCode\":\"A000000204717\",\"prdPrice\":\"19,900\"},{\"imgSrc\":\"https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0020/A00000020354601ko.jpg?l=ko\",\"prdName\":\"뉴트리코어 유기농 비타민D 1000IU(2개월분)(온)\",\"prdCode\":\"A000000203546\",\"prdPrice\":\"48,000\"}]";
let url = "imageDownload.do";
let optionObj = {
	method: 'post', //전달방식
	headers: {
		'Content-Type': 'application/json' // 기본 : application/x-www-form-urlencoded
	},
	body: json
}

document.querySelector('#uploadBtn').onclick = function(e) {
	fetch(url, optionObj) // promise객체. then(), catch()
    	.then(function(result) {
    		console.log(result); // Response 객체
    		return result.json(); // json문자열 형태로 반환
    	})
    	.then(function(result) {
    		console.log(result);
    	})
    	.catch(function(err) {
    		console.log(err);
    	})
}
  
// 접종센터 정보
let centerAry = [];
console.log('1', centerAry);

url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=phrridH5WV2swnFQd6SfOZeBHegv9nr384ZeTc5JMBax6r3d4E7Clgbr5cDOTU9mv1SstcXLqs1nHwEqQGaFTw%3D%3D";
  	
console.log('3', centerAry);

let arrayFunc = result => {
	console.log(result);
	centerAry = result.data; // 284건
	console.log('2', centerAry);
	
	// forEach, map, filter, reduce
	let newAry = centerAry.filter(function(center, idx, ary) { 
		// 조건이 true인 값을 새로운 배열에 담음
		return center.sido == '대구광역시';
		// filter(center => center.sido == '대구광역시');
	});
	console.log(newAry);
	
	let field = ['id', 'centerName', 'address', 'phoneNumber'];
	newAry.forEach(center => {
		let tr = document.createElement('tr');
		tr.addEventListener('click', function(e) {
			// location.href = 'map.jsp?lat=' + center.lat + '&lng=' + center.lng; 
			window.open('map.jsp?lat=' + center.lat + '&lng=' + center.lng); // 새 창(탭)에 열림
		});
		for(let prop of field) {
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		document.querySelector('tbody').append(tr);
	});
} // end of arrayFunc

document.querySelectorAll('#selectCenter option').forEach(item => {
	item.addEventListener('change', function(e) {

		// forEach, map, filter, reduce
		let newAry = centerAry.filter(function(center, idx, ary) { 
			// 조건이 true인 값을 새로운 배열에 담음
			return center.sido = item.innerHTML;
			// filter(center => center.sido == '대구광역시');
		});
		console.log(newAry);
		
		let field = ['id', 'centerName', 'address', 'phoneNumber'];
		newAry.forEach(center => {
			let tr = document.createElement('tr');
			tr.addEventListener('click', function(e) {
				// location.href = 'map.jsp?lat=' + center.lat + '&lng=' + center.lng; 
				window.open('map.jsp?lat=' + center.lat + '&lng=' + center.lng); // 새 창(탭)에 열림
			});
			for(let prop of field) {
				let td = document.createElement('td');
				td.innerHTML = center[prop];
				tr.append(td);
			}
			document.querySelector('tbody').append(tr);
		});
	
	});
	
});

fetch(url) // ajax : 비동기
	.then(result => result.json())
  	.then(arrayFunc)
  	.catch(err => console.error('에러=>', err));