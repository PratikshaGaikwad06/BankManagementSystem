<%@page import="entities.UserDetails"%>
<%@page import="service.OpenAccountServiceImpl"%>
<%@page import="service.OpenAccountService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>WELCOME TO BMS</h1>
	<%
		OpenAccountServiceImpl openAccService = new OpenAccountServiceImpl();
	
	//int firstName=Integer.parseInt(request.getParameter("fname")); //read from HTML
	String firstName = request.getParameter("fname");
	String lastName = request.getParameter("lname");
	
	System.out.println(firstName);
	System.out.println(lastName);
	
	UserDetails userDetails = new UserDetails();
	userDetails.setFirstName(firstName);
	userDetails.setLastName(lastName);
	
	System.out.println(userDetails.getFirstName());
	System.out.println(userDetails.getLastName());
	
	openAccService.saveUserDetails(userDetails);
	
	
		
	%>
			<h2> New Bank Account Created </h2>
			<a href="index.html"> Go Back Home</a>
	
</body>
</html>