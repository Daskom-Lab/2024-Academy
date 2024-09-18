# Store Data
After you can show the data, you can create a program to store the data. But how?<br/>  
First, you should create files named `create.php` to show the view of the program, and to store the data that you want to be stored. 
You can copy this following code for `create.php`:
```php
<?php
// Database connection
$conn = mysqli_connect("localhost", "root", "", "test");


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


// Check if form is submitted
if (isset($_POST['submit'])) {
    // Get form data
    $student_id = $_POST['student_id'];
    $name = $_POST['name'];
    $enrollment_year = $_POST['enrollment_year'];


    // Insert query
    $sql = "INSERT INTO students (student_id, name, enrollment_year) VALUES ('$student_id', '$name', '$enrollment_year')";


    if (mysqli_query($conn, $sql)) {
        header("location:index.php?message=input");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}


// Close the database connection
mysqli_close($conn);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input the data to Database</title>
</head>
<body>
    <h1>CRUD PHP and MySQL</h1>
    <h2>Input the data to Database</h2>
   
    <br/>
 
    <a href="index.php">Show all data</a>
 
    <br/>
    <h3>Input new data</h3>
    <form action="create.php" method="post">        
        <table>
            <tr>
                <td>Name</td>
                <td><input type="text" name="name"></td>                    
            </tr>  
            <tr>
                <td>Student ID</td>
                <td><input type="text" name="student_id"></td>                  
            </tr>  
            <tr>
                <td>Enrollment</td>
                <td><input type="text" name="enrollment_year"></td>                
            </tr>  
            <tr>
                <td></td>
                <td><input type="submit" name="submit" value="Add Student"></td>                    
            </tr>              
        </table>
    </form>
</body>
</html>
```
Alright, you've made a program that can store the data. What's next? We'll see. Let's go to the next section.

