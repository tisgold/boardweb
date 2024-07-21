<%@page import="com.yedam.common.PageDTO"%>
<%@page import="com.yedam.vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@page import="org.apache.ibatis.reflection.SystemMetaObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../includes/header.jsp" %>
  <h3>게시글목록(boardList.jsp)</h3>
  <!-- 검색기능 -->
  <div>
    <form action="boardList.do">
      <div class="row">
        <div class="col-sm-4"> <!-- select 목록 -->
          <select name="searchCondition" class="form-control">
            <option value="">선택하세요</option>
            <option value="T">제목</option>
            <option value="W">작성자</option>
            <option value="TW">제목 & 작성자</option>
          </select>
        </div>
        <div class="col-sm-6">
          <input type="text" name="keyword" class="form-control">
        </div>
        <div class="col-sm-2">
          <input type="submit" value="조회" class="btn btn-primary">
        </div>
      </div>
    </form>
  </div>
  <!-- 검색기능 끝-->
  <table class="table">
	<thead>
	  <tr>
	    <th>글번호</th>
	    <th>제 목</th>
	    <th>작성자</th>
	    <th>작성일시</th>
	  </tr>
	</thead>  
  <%
    String name = (String) request.getAttribute("myName");
    List<BoardVO> list = (List<BoardVO>) request.getAttribute("boardList");
    PageDTO paging = (PageDTO) request.getAttribute("paging");
    String sc = (String) request.getAttribute("searchCondition");
    String kw = (String) request.getAttribute("keyword");
  %>
    <tbody>
      <%for (BoardVO board : list) { %>
      <tr>
        <td><%=board.getBoardNo() %></td>
        <td><a href="board.do?bno=<%=board.getBoardNo() %>"><%=board.getTitle() %></a></td>
        <td><%=board.getWriter() %></td>
        <td><%=board.getWriteDate() %></td>
      </tr>
      <%} %>
    </tbody>
  </table>
  <p><%=paging %></p>
  <!-- 페이지부분 -->
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <!-- prev 페이지 -->
    <% if (paging.isPrev()) { %>
    <li class="page-item">
      <a class="page-link" href="boardList.do?searchCondition=<%=sc %>&keyword=<%=kw %>&page=<%=paging.getStartPage()-1 %>" tabindex="-1" aria-disabled="true">이전</a>
    </li>
    <% } %>
    <!-- 페이지갯수만큼 링크생성 -->
    <% for(int p = paging.getStartPage(); p <= paging.getEndPage(); p++) { %>
      <% if (paging.getPage() == p) { %>
        <li class="page-item active" aria-current="page">
        <a class="page-link" href="boardList.do?searchCondition=<%=sc %>&keyword=<%=kw %>&page=<%=p %>"><%=p %></a></li>
      <% } else { %>
        <li class="page-item"><a class="page-link" href="boardList.do?searchCondition=<%=sc %>&keyword=<%=kw %>&page=<%=p %>"><%=p %></a></li>
      <% } %>
    <% } %>
    <!-- next 페이지 -->
    <% if (paging.isNext()) { %>
    <li class="page-item">
      <a class="page-link" href="boardList.do?searchCondition=<%=sc %>&keyword=<%=kw %>&page=<%=paging.getEndPage()+1 %>">다음</a>
    </li>
    <% } %>
  </ul>
</nav>
<%@ include file="../includes/footer.jsp" %>