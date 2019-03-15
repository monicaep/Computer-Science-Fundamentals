1. How do you find related data held in two separate data tables?
You can find related data held in two separate tables by using a `JOIN` statement.

2. Explain, in your own words, the difference between an `INNER JOIN`, `LEFT OUTER JOIN`, and `RIGHT OUTER JOIN`. Give a real-world example for each.
`INNER JOIN` - the resulting table will have the rows where there is a column value for both Table A and Table B
`LEFT OUTER JOIN` - the resulting table will have rows for all the rows in Table A. If there is no corresponding value in Table B, the value will be `NULL`.
`RIGHT OUTER JOIN` - basically the opposite of a `LEFT OUTER JOIN`. The resulting table will have a row for each row in Table B and if there is no corresponding value from Table A, the value will be 'NULL'.

3. Define primary key and foreign key. Give a real-world example for each.
A primary key is a unique identifier for each row in a table. Ex: A social security number in a government database of people in the US.
A foreign key is a non-unique identifier in one table that corresponds to the primary key in another. Ex: There is a table of clients at a gym. The table includes a client id (the table's primary key), name, email and phone number. There is another table of sales at the gym that includes a transaction number (primary key), client id (foreign key), item name, and price.

4. Define aliasing.
Aliasing is a technique that involves using an abbreviation to identify a table. For example the table `inventory` can simply be referred to as `i` when you include `inventory AS i` in your query.

5. Change this query so that you are using aliasing:
```
SELECT professor.name, compensation.salary, compensation.vacation_days
FROM professor
JOIN compensation
ON professor.id = compensation.professor_id;
```

```
SELECT p.name, c.salary, c.vacation_days
FROM professor AS p
JOIN compensation as c
ON p.id = c.professor_id;
```

6. Why would you use a `NATURAL JOIN`? Give a real-world example.
`NATURAL JOIN` is a shorthand for using `USING`. Instead of having to write out all the column names of the tables you want to join, you can just use `NATURAL JOIN` and it will automatically pull all the shared columns.
Ex: A store has a table called `departments` with a column for department id and department name. There is another table called `products` with a column for product id, product name, and department id. You can use `NATURAL JOIN` to get a table that includes the department id, product id, product name and department name.

7. Using this Employee schema and data, write queries to find the following information:
- List all employees and all shifts.
```
SELECT e.name, s.start_time, s.end_time
FROM scheduled_shifts as ss
JOIN employees as e ON ss.employee_id = e.id
JOIN shifts as s ON ss.shift_id = s.id;
```

8. Using this Adoption schema and data, please write queries to retrieve the following information and include the results:
