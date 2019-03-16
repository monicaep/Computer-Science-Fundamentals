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

**Query #1**

    /*Create a list of all volunteers. If the volunteer is fostering a dog, include each dog as well.*/

    SELECT v.first_name, v.last_name, d.name
    FROM volunteers AS v
    LEFT OUTER JOIN dogs AS d
    ON v.foster_dog_id = d.id;

| first_name | last_name  | name      |
| ---------- | ---------- | --------- |
| Rubeus     | Hagrid     | Munchkin  |
| Marjorie   | Dursley    | Marmaduke |
| Sirius     | Black      |           |
| Remus      | Lupin      |           |
| Albus      | Dumbledore |           |

---
**Query #2**

    /*The cat's name, adopter's name, and adopted date for each cat adopted within the past month to be displayed as part of the "Happy Tail" social media promotion which posts recent successful adoptions.*/

    SELECT c.name, a.first_name, a.last_name, ca.date
    FROM cat_adoptions AS ca
    JOIN cats AS c ON ca.cat_id = c.id
    JOIN adopters AS a ON ca.adopter_id = a.id
    WHERE ca.date > CURRENT_DATE - 30;

| name     | first_name | last_name | date                     |
| -------- | ---------- | --------- | ------------------------ |
| Mushi    | Arabella   | Figg      | 2019-02-24T00:00:00.000Z |
| Victoire | Argus      | Filch     | 2019-03-01T00:00:00.000Z |

---
**Query #3**

    /*Create a list of adopters who have not yet chosen a dog to adopt.*/

    SELECT a.first_name, a.last_name
    FROM dog_adoptions AS da
    JOIN adopters AS a ON da.adopter_id <> a.id;

| first_name | last_name |
| ---------- | --------- |
| Hermione   | Granger   |
| Arabella   | Figg      |

---
**Query #4**

    /*Lists of all cats and all dogs who have not been adopted.*/


    SELECT c.name
    FROM cat_adoptions AS ca
    RIGHT OUTER JOIN cats AS c
    ON ca.cat_id = c.id WHERE ca.cat_id IS NULL;

| name     |
| -------- |
| Seashell |
| Nala     |

---
**Query #5**

    SELECT d.name
    FROM dog_adoptions AS da
    RIGHT OUTER JOIN dogs as d
    ON da.dog_id = d.id WHERE da.dog_id IS NULL;

| name      |
| --------- |
| Boujee    |
| Munchkin  |
| Marley    |
| Lassie    |
| Marmaduke |

---
**Query #6**

    /*The name of the person who adopted Rosco.*/

    SELECT a.first_name, a.last_name
    FROM dog_adoptions AS da
    JOIN adopters AS a
    ON da.adopter_id = a.id
    JOIN dogs AS d
    ON da.dog_id = d.id;

| first_name | last_name |
| ---------- | --------- |
| Argus      | Filch     |

---

[View on DB Fiddle](https://www.db-fiddle.com/f/tpodLv3A43VL4gHqohqx2o/0)

9. Using this Library schema and data, write queries applying the following scenarios and include the results:

**Query #1**

    /*To determine if the library should buy more copies of a given book, please provide the names and position, in order, of all of the patrons with a hold (request for a book with all copies checked out) on "Advanced Potion-Making".*/

    SELECT p.name, h.rank
    FROM holds AS h
    JOIN patrons AS p
    ON h.patron_id = p.id
    JOIN books AS b
    ON h.isbn = b.isbn WHERE b.title = 'Advanced Potion-Making'
    ORDER BY h.rank;

| name           | rank |
| -------------- | ---- |
| Terry Boot     | 1    |
| Cedric Diggory | 2    |

---
**Query #2**

    /*List all of the library patrons. If they have one or more books checked out, list the books with the patrons.*/

    SELECT p.name, b.title
    FROM transactions AS t
    RIGHT OUTER JOIN patrons AS p ON t.patron_id = p.id
    JOIN books AS b ON t.isbn = b.isbn
    WHERE t.checked_in_date IS NULL;

| name           | title                                   |
| -------------- | --------------------------------------- |
| Terry Boot     | Advanced Potion-Making                  |
| Cedric Diggory | Fantastic Beasts and Where to Find Them |

---

[View on DB Fiddle](https://www.db-fiddle.com/f/j4EGoWzHWDBVtiYzB9ygC4/0)
