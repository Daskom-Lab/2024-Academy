# Database Connection
PHP, as a server-side scripting language, needs to connect to a database to perform CRUD (Create, Read, Update, Delete) operations. Before you can proceed with these operations, you must establish a database connection. Ensure you have at least one database set up (if you followed the hands-on steps in the previous section, you should have one ready). If you do, let's move forward.<br/>

First, create a new folder in the `htdocs` directory (if you're using XAMPP) or the `www` directory (if you're using Laragon). You can name this folder anything you like.

Next, create a file named `connection.php` in this folder and enter the following code:
```sql
$conn = mysqli_connect("localhost", "root", "", "test");
```
#### Explanation:
- `mysqli` is a driver in PHP that enables database connections.
- The `mysqli_connect()` function is used to connect to the database.
- `localhost` is the hostname; in a production environment, you might use an IP address.
- `root` is the MySQL username, which is automatically set when you install MySQL.
- The password field is left empty with `""` since there is no default password for MySQL's root user.
- `test` is the name of the database you wish to connect to.

Save the code, and that's it! You've successfully created a database connection.
### What’s Next?
With the database connection established, you're ready to move on to creating a simple CRUD application. See you in the next section!<br/>
Good luck and have fun!
