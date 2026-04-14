<?php
include 'db.php';

if(isset($_POST['submit']))
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    
    // Email validation
    if($email == null || strpos($email,'@') === false || strpos($email,'.') === false || strrpos($email,'.') < strpos($email,'@'))
    {
        echo "Invalid Email!";
    }
    else
    {
        $conn->query("INSERT INTO students(name,email,course)
        VALUES('$name','$email','$course')");
        
        header("Location:index.php");
    }
}
?>

<h2>Add Student</h2>

<form method="post">

Name: <input type="text" name="name"><br><br>

Email: <input type="text" name="email"><br><br>

Course: <input type="text" name="course"><br><br>

<input type="submit" name="submit" value="Add">

</form>