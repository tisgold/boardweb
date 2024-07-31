<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<h3>googleChart.jsp</h3>
<script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      let dataAry = [];
      dataAry.push(['작성자', '작성건수']);
      
      fetch('countByMember.do') // 매개변수 1: URL, 2: 요청방식, 3: 전달될 파라미터
      	.then(function(result) { // resp 객체의 결과를 매개 변수로 받음
      		return result.json(); // 문자열 -> 객체로
      	})
      	.then(function(result) { // 위 then의 결과를 매개 변수로 받음
      		console.log(result);
      		result.forEach(member => {
      			dataAry.push([member.member_name, member.member_cnt]);
      		})
	        google.charts.setOnLoadCallback(drawChart);
      	})

      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataAry);

        var options = {
          title: '작성자별 작성건수',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
</script>
<div id="piechart" style="width: 900px; height: 500px;"></div>