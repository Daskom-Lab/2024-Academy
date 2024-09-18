# MySQL Operators
MySQL operators are kind of similar with boolean operators in C. There are AND, OR, and NOT.

## AND
The AND operator displays a record if all the conditions separated by AND are TRUE.<br/>
For example, you want the students that registered in enrollment year with name Dhiya to be shown, you can execute the following syntax:
```sql
SELECT * FROM students WHERE name = 'Dhiya' AND enrollment_year = '2023';
```

The output will be like this:

| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2023            |

<br/>

## OR
The OR operator displays a record if any of the conditions separated by OR is TRUE.<br/>
For example, you want students that registered in enrollment_year or 2022 to be shown, you can execute the following syntax:
```sql
SELECT * FROM students WHERE class = '2022' OR class = '2020';
```


The output will be like this:
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 4  | 1102211234 | Aliza | 2022            |
| 2  | 1101224319 | Dhea  | 2022            |

<br/>   

## NOT
The NOT operator displays a record if the condition(s) is NOT TRUE.<br/>    
For example, you do not want the students that registered in enrollment_year 0f 2022  to be shown, you can execute the following syntax:
```sql
SELECT * FROM students WHERE NOT enrollment_year = '2022';
```

The output will be like this:
| id | student_id | name  | enrollment_year |
|----|------------|-------|-----------------|
| 1  | 1101224320 | Dhiya | 2023            |



