<%@ taglib uri="http://struts.apache.org/tags-html" prefix="html" %>

<html>
<head>
<title>Login Page</title>
</head>

<body>

<h2>Login Form</h2>

<html:form action="/login">

Name:
<html:text property="name"/>
<html:errors property="name"/>
<br><br>

Mobile:
<html:text property="mobile"/>
<html:errors property="mobile"/>
<br><br>

Email:
<html:text property="email"/>
<html:errors property="email"/>
<br><br>

<html:submit value="Login"/>

</html:form>

</body>
</html>