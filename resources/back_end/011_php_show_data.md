# Show The Data from Database
All right, you've made the connection in the previous section. The question is "What can we do now?"<br/>
Remember you have some records in the database? You can display it on the web page.<br/> 

First you need to start your web server and MySQL on your XAMPP or Laragon, then create a file called index.php in the folder we created before and copy the following code:

```php
<?php
// Database connection
$conn = mysqli_connect('localhost', 'root', '', 'test');
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch data from the students table
$query = mysqli_query($conn, "SELECT * FROM students");
if (!$query) {
    die("Error fetching data: " . mysqli_error($conn));
}

// Close the database connection
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show the data from Database</title>
</head>
<body>
    <h1>CRUD PHP and MySQL</h1>
    <h2>Show the data from database</h2>
    <?php
    if(isset($_GET['message'])){
        $message = $_GET['message'];
        if($message == "input"){
            echo "The data has been recorded successfully.";
        }else if($message == "update"){
            echo "The data has been updated successfully.";
        }else if($message == "delete"){
            echo "The data has been deleted successfully.";
        }
    }
    ?>
    <br/>
    <a class="tombol" href="create.php">+ Add new data</a>
    <h3>Students Data</h3>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Student ID</th>
            <th>Enrollment Year</th>
            <th>Action</th>
        </tr>
        <?php
        $no = 1;
        while($data = mysqli_fetch_array($query)){
        ?>
            <tr>
                <td><?php echo $no++ ?></td>
                <td><?php echo $data['name'] ?></td>
                <td><?php echo $data['student_id'] ?></td>
                <td><?php echo $data['enrollment_year'] ?></td>
                <td>
                    <a class="edit" href="update.php?id=<?php echo $data['id']; ?>">Edit</a> |
                    <a class="delete" href="delete.php?id=<?php echo $data['id'];?>" onclick="return confirm('Are you sure you want to delete this record?')">Delete</a>                                        
                </td>
            </tr>
        <?php
        }
        ?>
    </table>
</body>
</html>
```
Quite simple right? You can make the website that shows the data from database. We can go to the next section.
