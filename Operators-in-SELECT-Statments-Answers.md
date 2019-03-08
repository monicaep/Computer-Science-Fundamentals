1. Write out a generic SELECT statement.
```
SELECT <column name>
FROM <table name>
<optional WHERE condition>;
```

2. Create a fun way to remember the order of operations in a SELECT statement, such as a mnemonic.
SELECT, FROM, WHERE --> SFW --> San Fransisco Warriors

3. Given this dogs table, write queries to select the following pieces of data:
Intake teams typically guess the breed of shelter dogs, so the breed column may have multiple words (for example, "Labrador Collie mix").

- Display the name, gender, and age of all dogs that are part Labrador.
```
SELECT name, gender, age
FROM dogs
WHERE breed LIKE '%labrador%';
```
- Display the ids of all dogs that are under 1 year old.
```
SELECT id
FROM dogs
WHERE age<1;
```
- Display the name and age of all dogs that are female and over 35lbs.
```
SELECT name, age
FROM dogs
WHERE gender='F' AND weight>35;
```
- Display all of the information about all dogs that are not Shepherd mixes.
```
SELECT *
FROM dogs
WHERE breed NOT LIKE '%shepherd%';
```
- Display the id, age, weight, and breed of all dogs that are either over 60lbs or Great Danes.
```
SELECT id, age, weight, breed
FROM dogs
WHERE weight>60 OR breed='great dane';
```
4. Given this cats table, what records are returned from these queries?

- `SELECT name, adoption_date FROM cats;`
|name      | adoption_date|
| -------- | ------------ |
| Mushi    | 2016-03-22   |
|Seashell  | null         |
| Azul     | 2016-04-17   |
| Victoire | 2016-09-01   |
| Nala     | null         |

- `SELECT name, age FROM cats;`
|name      | age |
| -------- | --- |
| Mushi    | 1   |
|Seashell  | 7   |
| Azul     | 3   |
| Victoire | 7   |
| Nala     | 1   |

5. From the cats table, write queries to select the following pieces of data.
- Display all the information about all of the available cats.
```
SELECT *
FROM cats;
```
- Display the name and sex of all cats who are 7 years old.
```
SELECT name, sex
FROM cats
WHERE age=7;
```
- Find all of the names of the cats, so you don’t choose duplicate names for new cats.
```
SELECT name
FROM cats;
```
6. List each comparison operator and explain when you would use it. Include a real world example for each
`<` - less than. When you want to find all the cats who are less than one year old `age<1`
`>` - greater than. When you want to find all the cats who are more than 10 years old `age>10`
'<=' - less than or equal to. When you want to find all the prices that are $20 or less `price<=20`
'>=' - greater than or equal to. When you want to find all the prices that are more than or equal to $30 'price>=30'
`=` - equal. When you want to find all the dogs named Spot at the pound `name='Spot'`
`!=` or `<>` - not equal. When you want to find all the cars that are not red `color<>'red'`
`LIKE` - used for partial matching of strings. When you want to find all the available Harry Potter books at the library `title LIKE 'Harry Potter%' AND available='true'`

7. From the cats table, what data is returned from these queries?
- `SELECT name FROM cats WHERE gender = ‘F’;`
| name     |
| -------- |
| Seashell |
| Nala     |

- `SELECT name FROM cats WHERE age <> 3;`
| name     |
| -------- |
| Mushi    |
| Seashell |
| Victoire |
| Nala     |

- `SELECT ID FROM cats WHERE name != ‘Mushi’ AND gender = ‘M’;`
| id |
| -- |
| 3  |
| 4  |
