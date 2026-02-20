<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<body>

<h2>Employee Table [Year with Color (2020 - Red, Else - Green), Salary - Descending]</h2>

<table border="1">

<tr>
<th>ID</th>
<th>Name</th>
<th>Department</th>
<th>Designation</th>
<th>Salary</th>
<th>Email</th>
<th>Joining Year</th>
</tr>

<xsl:for-each select="employees/employee">
    <!-- SORT BY SALARY DESCENDING -->
    <xsl:sort select="salary" order="descending" data-type="number"/>
<tr>

<td><xsl:value-of select="@empId"/></td>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="department"/></td>
<td><xsl:value-of select="designation"/></td>
<td><xsl:value-of select="salary"/></td>
<td><xsl:value-of select="email"/></td>

<!-- Joining Year with conditional color -->
<td>
    <xsl:attribute name="style">
        <xsl:choose>
            <xsl:when test="substring(joiningDate,1,4)='2020'">
                background-color:red;
            </xsl:when>
            <xsl:otherwise>
                background-color:lightgreen;
            </xsl:otherwise>
        </xsl:choose>
    </xsl:attribute>

    <!-- Display only year -->
    <xsl:value-of select="substring(joiningDate,1,4)"/>

</td>

</tr>

</xsl:for-each>

</table>

</body>
</html>

</xsl:template>

</xsl:stylesheet>
