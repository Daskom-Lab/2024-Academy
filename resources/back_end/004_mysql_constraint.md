# MySQL Constraints
Constaints are used to specify rules for data in the table. Constraints can be specified when the table is created with the `CREATE TABLE` statement, or after the table is created with the `ALTER TABLE` statement.

## Unique
The UNIQUE constraint ensures that all values in a column must be different.

If you want add unique constraint when you create a table, you can use this command:
```sql
CREATE TABLE student ( 
    id INT NOT NULL AUTO_INCREMENT, 
    student_id VARCHAR(255) NOT NULL, 
    fullname VARCHAR(255) NOT NULL, 
    enrollment_year VARCHAR(4) NOT NULL, 
    UNIQUE (student_id)
);
```
To name a `UNIQUE` constraint, and to define a UNIQUE constraint on multiple columns, use the following command:
``CONSTRAINT constraint_name UNIQUE (selected column)``

```sql
CREATE TABLE student ( 
    id INT NOT NULL AUTO_INCREMENT, 
    student_id VARCHAR(255) NOT NULL, 
    fullname VARCHAR(255) NOT NULL, 
    enrollment_year VARCHAR(4) NOT NULL, 
    CONSTRAINT UC_students UNIQUE (id, student_id)
);
```

If you want add unique constraint when the table is already created, you can use this command:
```sql
ALTER TABLE students ADD CONSTRAINT UC_students UNIQUE (id,student_id);
```

To drop a UNIQUE constraint, use the following command:
```sql
ALTER TABLE students DROP INDEX UC_students;
```

## Primary Key
Each record in a table is uniquely identified by the PRIMARY KEY constraint. Primary keys must contain UNIQUE values. They cannot contain NULL values. Primary keys are usually specified with the AUTO INCREMENT constraint.

If you want create primary key when you create a new table, you can use this command:
```sql
CREATE TABLE students (
    id int NOT NULL AUTO INCREMENT,
    student_id varchar(255) NOT NULL,
    name varchar(255), 
    enrollment_year VARCHAR(4) NOT NULL, 
    CONSTRAINT PK_students PRIMARY KEY (id)
);
``` 
If you want add primary key when the table is already created, you can use this command:
```sql
ALTER TABLE students
ADD CONSTRAINT PK_students PRIMARY KEY (id);
```
To drop a primary key, use the following command:
```sql
ALTER TABLE students
DROP PRIMARY KEY;
```

## Foreign Key
Foreign Keys are used to mark a table as connected to another table in the context of the parent and child tables. A table is said to be a child if it has a field which is a reference to a key in the parent table. This is used to maintain consistency and linkages between tables.

One of the characteristics that we can pay attention to is that if we delete one of the rows in the parent table, the related row will also be deleted, or fields embedded in the child row can be made NULL.

Look at the following to tables:

#### Students Table
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2022            |
| 2  | 1101224319 | Dhea  | 2022            |
| 3  | 1101214320 | Deliza| 2021            |

<br/>

#### Students Course Table
| id | student_id | course_code |
|----|------------|-------------|
| 1  | 1101224320 | TTIEP2      |
| 2  | 1101224319 | TTIEP2      |
| 3  | 1101214320 | TTUEP1      |

Notice that the `student_id` column in the students course table points to the `student_id` column in the students table. The `student_id` column in the students table is the PRIMARY KEY in the students table. The `student_id` column in the courses table is a FOREIGN KEY in the students course table.

If you want create foreign key when you create a new table, you can use this command:
```sql
CREATE TABLE courses (
    id int NOT NULL,
    student_id varchar(255),
    course_code varchar(255),
    class_code varchar(255),
    PRIMARY KEY (id), 
    CONSTRAINT FK_courses FOREIGN KEY (student_id, course_code) 
    REFERENCES students(student_id) 
);
```

If you want add foreign key when the table is already created, you can use this command:
```sql
ALTER TABLE students_course
ADD CONSTRAINT FK_courses FOREIGN KEY (student_id) REFERENCES students(student_id);
```

To drop a foreign key, use the following command:
```sql
ALTER TABLE students_course
DROP FOREIGN KEY FK_courses;
```

And that's all for MySQL Constraint, next we are going to talk about MySQL Query,  GLHF!!!
