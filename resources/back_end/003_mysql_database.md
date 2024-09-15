 # MySQL Database

## Create Database & Tables
Before you start to doing CRUD, you must create a database first by this command:
```sql
                CREATE DATABASE <database name>; 
                                 ↓
                  CREATE DATABASE student_data; 
```

Also we are going to add a table in the new database, using this command:
```sql
CREATE Table <table name> (fields); 
```
Thus, 
```sql
CREATE TABLE student ( 
    id INT NOT NULL AUTO_INCREMENT, 
    student_id VARCHAR(255) NOT NULL, 
    fullname VARCHAR(255) NOT NULL, 
    enrollment_year VARCHAR(4) NOT NULL
);
```

## Deleting Database
If change your mind about the database you have made, you can just drop it literally.
```sql
DROP DATABASE <database name>; 
```
Thus,
```sql
drop DATABASE student_data; 
```

## Alter table
the ALTER command is used to modify the structure of an existing database object, such as a table. 

`Whoops i did a typo, when creating the student table, can you spot it?`
<details>
  <summary>Click to see answer</summary>

    If you guess the plurality of the table name, you're right!.

</details>



### Rename Table:
```sql
ALTER TABLE old_table_name RENAME new_table_name; 
```
Thus,
```sql
ALTER TABLE student RENAME students;
```

### Add Column:
```sql	
ALTER TABLE table_name ADD column_name datatype;
```

### Drop Column:
```sql	
ALTER TABLE table_name DROP column_name;
```

### Modify Column:
```sql
ALTER TABLE table_name MODIFY COLUMN column_name datatype;
```

`
Speaking of plural table names, the practice of using plural names for database tables is not a strict requirement, but rather a convention followed by many developers for various reasons, such as consistency and readability, conventional standards, intuitive queries.
`
<br/>
Stay focused, keep pushing forward, and don't hesitate to seek out the resources and support you need. 

GLHF!!
