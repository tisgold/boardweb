<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../includes/header.jsp"/>
<h3>수정화면(removeForm.jsp)</h3>
<!-- <% BoardVO board = (BoardVO) request.getAttribute("board"); %> -->
<form action="updateBoard.do">
  <!-- <input type="hidden" name="bno" value="<%=board.getBoardNo() %>"> -->
  <input type="hidden" name="bno" value="${board.boardNo }">
  <table class="table">
    <tr>
      <!-- <th class="col-sm-3">글번호</th><td class="col-sm-3"><%=board.getBoardNo() %></td> -->
      <th class="col-sm-3">글번호</th><td class="col-sm-3">${board.boardNo }</td>
      <!-- <th class="col-sm-3">조회수</th><td class="col-sm-3"><%=board.getViewCnt() %></td> -->
      <th class="col-sm-3">조회수</th><td class="col-sm-3">${board.viewCnt }</td>
    </tr>
    <tr>
      <th>제목</th>
      <!-- <td colspan="3"><input class="form-control" type="text" name="title" value=<%=board.getTitle() %>></td> -->
      <td colspan="3"><input class="form-control" type="text" name="title" value="${board.title }"></td>
    </tr>
    <tr>
      <th>내용</th>
      <!-- <td colspan="3"><textarea class="form-control" name="content"><%=board.getContent() %></textarea></td> -->
      <td colspan="3"><textarea class="form-control" name="content">${board.content }</textarea></td>
    </tr>
    <tr>
      <th>작성자</th>
      <!-- <td colspan="3"><%=board.getWriter() %></td> -->
      <td colspan="3">${board.writer }</td>
    </tr>
    <tr>
      <td colspan="4" align="center">
        <input class="btn btn-danger" type="submit" value="수정">
        <button class="btn btn-warning" type="button">취소</button>
      </td>
    </tr>
  </table>
</form>
<script>
    document.querySelector('form>table button.btn.btn-warning').addEventListener('click', function(e) {
    	location.href = 'board.do?bno=${board.boardNo }';
    });
</script>
<jsp:include page="../includes/footer.jsp"/>