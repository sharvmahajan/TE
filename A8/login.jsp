<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
<title>Login Page</title>
</head>

<body>

<h2>Login Page</h2>

<s:form action="login">

<s:textfield name="name" label="Name"/>
<s:textfield name="mobile" label="Mobile Number"/>
<s:textfield name="email" label="Email ID"/>

<s:submit value="Login"/>

</s:form>

<s:fielderror/>

</body>
</html>