# MySQL Queries
MySQL Queries is SQL commands to insert, read, update, or delete the data to/from the table. There are some queries that are frequently used.

## SELECT
SELECT statement used to show the data that selected in the statement. The table with certain columns will be shown as you execute the statement.
<br />
For example, assume the students table has some data:

| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2022            |
| 2  | 1101224319 | Dhea  | 2022            |
| 3  | 1101214320 | Deliza| 2021            |

<br />
You want name and student_id columns in the students table to be shown, you can execute the following syntax:

```sql
SELECT student_id, name FROM students;
```

The output will be like this:

| student_id  | name   |
|-------------|--------|
| 1101224320  | Dhiya  |
| 1101224319  | Dhea   |
| 1101214320  | Deliza |

<br>
If you want all the columns to be shown, you can execute the following syntax:

```sql
SELECT * FROM students;
```


## WHERE
The WHERE clause is used to filter the records. It will show the records that fulfill a specified conditions.<br/>

For example, you want the student that registered in 04 class to be shown, you can execute the following syntax:
```sql
SELECT * FROM students WHERE enrollment_year = '2022';
```

The output will be like this:
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2022            |
| 2  | 1101224319 | Dhea  | 2022            |

<br>

You can use the other operators besides = in external resources. Just have a look and you'll find them. Good luck, guys.

## UPDATE
The UPDATE statement is used to modify the existing records in a table.<br>
For example, you want Hansen to be moved to class 05, you can execute the following syntax:
```sql
UPDATE students SET enrollment_year = '2023' WHERE name = 'Dhiya';
```

The students table now will look like this:
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2023            |
| 2  | 1101224319 | Dhea  | 2022            |
| 3  | 1101214320 | Deliza| 2021            |

<br>    

`Be careful when updating records. If you don't use the WHERE clause, ALL records will be updated!`

## DELETE
The DELETE statement is used to delete existing records in a table.<br>
For example, you want Hansen to be deleted from the table, you can execute the following syntax:
```sql
DELETE FROM students WHERE name = 'Deliza';
```

The students table now will look like this:
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2023            |
| 2  | 1101224319 | Dhea  | 2022            |

<br/>

If you want all the records to be deleted without interfere the table structure, you can use the following syntax:
```sql
DELETE FROM students;
```

##  INSERT INTO
The INSERT INTO statement is used to insert new records in a table.<br/>
For example, you want insert new row with the name is `Aliza, the student_id is 1102211234, and the enrollment_year is 2022,` you can execute the following syntax:
```sql
INSERT INTO students (name, student_id, enrollment_year) VALUES ('Aliza', '1102211234', '2022')
```

The output will be like this:
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2023            |
| 2  | 1101224319 | Dhea  | 2022            |
| 4  | 1102211234 | Aliza | 2022            |

<br/> 
```
Note that the id automatically increases to 4 without you set it manually. That's because you added the AUTO INCREMENT constraint in the previous section. 
```

## ORDER BY
The ORDER BY keyword is used to sort the table in ascending or descending order.<br/>
For example, you want the table sorted by the class column, you can execute the following syntax:
```sql
SELECT * FROM students ORDER BY name;
```

The output will be like this:
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 4  | 1102211234 | Aliza | 2022            |
| 2  | 1101224319 | Dhea  | 2022            |
| 1  | 1101224320 | Dhiya | 2023            |

<br/>

If you want the table sorted descending by the class column, you can execute the following syntax:
```sql
SELECT * FROM students ORDER BY name DESC;
```

And that's all for MySQL Queries, next we are going to talk about MySQL Operators, GLHF!!!
