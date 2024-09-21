# Update data
How does it feel? Do you still have the enthusiasm? Because now you're gonna edit the data that is existed.<br/>
First, you have to make a file named `update.php`, you can copy the following code:

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
    $id = $_POST['id'];
    $name = $_POST['name'];
    $student_id = $_POST['student_id'];
    $enrollment_year = $_POST['enrollment_year'];


    // Update query
    $sql = "UPDATE students SET student_id='$student_id',  name='$name', enrollment_year='$enrollment_year' WHERE id='$id'";


    if (mysqli_query($conn, $sql)) {
        header("Location: index.php?message=update");
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
}


// Get student ID from URL parameter (if present)
$id = isset($_GET['id']) ? $_GET['id'] : '';


// Fetch the current data for the student
$student = [];
if ($id) {
    $result = mysqli_query($conn, "SELECT * FROM students WHERE id='$id'");
    $student = mysqli_fetch_assoc($result);
}


// Close the database connection
mysqli_close($conn);
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Data</title>
</head>
<body>
    <h1>CRUD PHP and MySQL</h1>
    <h2>Edit data</h2>
    <a href="index.php">Show all data</a><br/>
    <h3>Edit data</h3>
    <form action="update.php" method="post">        
        <table>
            <tr>
                <td>Name</td>
                <td>
                    <input type="hidden" name="id" value="<?php echo $student['id'] ?>">
                    <input type="text" name="name" value="<?php echo $student['name'] ?>" >
                </td>                  
            </tr>  
            <tr>
                <td>Student ID</td>
                <td><input type="text" name="student_id" value="<?php echo $student['student_id'] ?>" readonly></td>                    
            </tr>  
            <tr>
                <td>Enrollment</td>
                <td><input type="text" name="enrollment_year" value="<?php echo $student['enrollment_year'] ?>"></td>                  
            </tr>  
            <tr>
                <td></td>
                <td><input type="submit" name="submit" value="submit"></td>                
            </tr>              
        </table>
    </form>
</body>
</html>
```

Just give it a shot and you'll found that the data has been edited.<br/>    
Keep it going, guys!
