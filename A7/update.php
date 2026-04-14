<?php
include 'db.php';

$id=$_GET['id'];

$result=$conn->query("SELECT * FROM students WHERE id=$id");
$row=$result->fetch_assoc();

if(isset($_POST['update']))
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $course=$_POST['course'];
    
    // Email validation
    if($email == null || strpos($email,'@') === false || strpos($email,'.') === false || strrpos($email,'.') < strpos($email,'@'))
    {
        echo "Invalid Email!";
    }
    else
    {
        $conn->query("UPDATE students SET
        name='$name',
        email='$email',
        course='$course'
        WHERE id=$id");
        
        header("Location:index.php");
    }
}
?>

<h2>Update Student</h2>

<form method="post">

Name:
<input type="text" name="name" value="<?php echo $row['name']; ?>"><br><br>

Email:
<input type="text" name="email" value="<?php echo $row['email']; ?>"><br><br>

Course:
<input type="text" name="course" value="<?php echo $row['course']; ?>"><br><br>

<input type="submit" name="update" value="Update">

</form>