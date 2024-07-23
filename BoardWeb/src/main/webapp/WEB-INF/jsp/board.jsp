<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
  <h3>게시판 상세(board.jsp)</h3>
  <form action="removeBoard.do">
  <input type="hidden" name="bno" value="${board.boardNo }">
  <input type="hidden" name="page" value="${page }">
  <table class="table">
    <tr>
      <th class="col-sm-3">글번호</th>
      <td class="col-sm-3">${board.boardNo }</td>
      <th class="col-sm-3">조회수</th>
      <td class="col-sm-3">${board.viewCnt }</td>
    </tr>
    <tr>
      <th>제목</th>
      <td colspan="3">${board.title }</td>
    </tr>
    <tr>
      <th>내용</th>
      <td colspan="3">${board.content }</td>
    </tr>
    <tr>
      <th>작성자</th>
      <td colspan="3">${board.writer }</td>
    </tr>
    <tr>
      <th>작성일시</th>
      <td colspan="3">${board.writeDate }</td>
    </tr>
    <tr>
      <th>파일</th>
      <c:choose>
        <c:when test="${empty board.image }">
          <td colspan="3"></td>
        </c:when>
        <c:otherwise>
          <td colspan="3"><img width="250px" src="images/${board.image }"></td>
        </c:otherwise>
      </c:choose>
    </tr>
    <tr>
      <td colspan="4" align="center">
        <c:choose>
          <c:when test="${logid == board.writer }">
            <input class="btn btn-danger" type="submit" value="삭제화면">
            <button class="btn btn-warning" type="button">수정화면</button>
          </c:when>
          <c:otherwise>
            <input class="btn btn-danger" disabled type="submit" value="삭제화면">
            <button class="btn btn-warning" disabled type="button">수정화면</button>
          </c:otherwise>
        </c:choose>
      </td>
    </tr>
  </table>
  </form>
  
  <script>
    document.querySelector('form>table button.btn.btn-warning').addEventListener('click', function(e) {
    	location.href = 'modifyBoard.do?bno=${board.boardNo }';
    });
  </script>  
