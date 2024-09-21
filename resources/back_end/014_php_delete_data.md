# Delete Data
This is the last part of CRUD. Interested? Alright, now you have the view from index.php, the thing that you have to do is to make a file named delete.php. <br/>   

The code is pretty simple, you can copy the following code:
```php
<?php
$conn = mysqli_connect('localhost', 'root', '', 'test');


if (!$conn) {
    header('location: index.php?message='.mysqli_connect_error());
}
$id = $_GET['id'];
mysqli_query($conn, "DELETE FROM students WHERE id='$id'");
 
header("location:index.php?message=delete");
```

And now open` localhost/{your_folder}` in your browser and try to delete the data. Notice the data that you want to delete is disappear. 
<br/>
So you've done it.
And that's it for a simple CRUD application. Congratulation guys. <br/>
So what's next? Just stay tuned for the information from the mentor. For now, just give it a shot about the materials provided in this section.
