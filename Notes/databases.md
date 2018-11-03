What are the advantages and disadvantages of NoSQL databases vs. SQL databases?

Arguments for SQL (Relational Databases):
1. Structured Data - Relational databases are really nice when you have a lot of data that’s needs to be structured in a very specific way, with different sets of data that relate to each other in some way.
2. ACID (atomicity, consistency, isolation and durability) compliance - this is a set of rules that guarantees the integrity of your data — even if the power going to your servers is inadvertently cut off!
3. Joins - This is in regards to data retrieval. When developing a complex application, often times you’ll need to retrieve multiple sets of data held in different tables. This is easily accomplished by ‘joining’ two or more tables together, and grabbing all of the information you need at once. Currently, there’s no way to do this in a Document based NoSQL database — meaning that if you need to retrieve multiple sets of data, you’ll have to make multiple queries to your database!

Arguments for NoSQL:
1. Flexible - If your data is not necessarily structured in a certain way, or if you have multiple sets of data that need to be structured in a way that a table could not easily support (ie: nested objects), NoSQL databases are a great option.
2. Fast - At the cost of ACID compliance, you gain significant speed! Not to say that SQL databases are slow, but by comparison NoSQL databases are much faster when you’re querying them.
3. Ease of Use - As you saw above, everything is represented as an object — making them very easy to reason about since we already know how objects work and are structured in programming.

In which order does SQL execute its queries?
1. FROM and JOINs
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. DISTINCT
7. ORDER BY
8. LIMIT / OFFSET

What are the different type of SQL Joins and how do they differ?
check this article for more info http://www.sql-join.com/sql-join-types/
There are four basic types of SQL joins: inner, left, right, and full.
Let’s say we have two sets of data in our relational database: table A and table B, with some sort of relation specified by primary and foreign keys. The extent of the overlap, if any, is determined by how many records in Table A match the records in Table B.
1. Inner Join - Select all records from Table A and Table B, where the join condition is met.
2. Left Join - Select all records from Table A, along with records from Table B for which the join condition is met (if at all).
3. Right Join - Select all records from Table B, along with records from Table A for which the join condition is met (if at all).
4. Full Join - Select all records from Table A and Table B, regardless of whether the join condition is met or not.

Where in a SQL query may we use a sub query (After which SQL keyword) ?
Right after the keyword FROM

            SELECT sub.*
            FROM (
                         SELECT *
                         FROM tutorial.sf_crime_incidents_2014_01
                         WHERE day_of_week = 'Friday'
                         ) sub
            WHERE sub.resolution = 'NONE'

What is the difference between horizontally and vertically scaling databases?
Horizontal scalability is the ability to increase capacity by connecting multiple hardware or software entities so that they work as a single logical unit. An important advantage of horizontal scalability is that it can provide administrators with the ability to increase capacity on the fly. Another advantage is that in theory, horizontal scalability is only limited by how many entities can be connected successfully. The distributed storage system Cassandra, for example, runs on top of hundreds of commodity nodes spread across different data centers. Because the commodity hardware is scaled out horizontally, Cassandra is fault tolerant and does not have a single point of failure (SPoF).
Vertical scalability, on the other hand, increases capacity by adding more resources, such as more memory or an additional CPU, to a machine. Scaling vertically, which is also called scaling up, usually requires downtime while new resources are being added and has limits that are defined by hardware.

 Describe the effects of using Group By and Having
 A group by is a query that takes a table and summarizes it into another table. You summarize the original table by grouping the original table into subsets (based upon the attributes that you specify in the group by). Each of these groups will yield one tuple.
The Having is simply equivalent to a WHERE clause after the group by has executed and before the select part of the query is computed.

What is SQL injection? How do you avoid it?
For more details visit https://www.w3schools.com/sql/sql_injection.asp
SQL injection is a code injection technique that might destroy your database.
SQL injection is one of the most common web hacking techniques.
SQL injection is the placement of malicious code in SQL statements, via web page input. SQL injection usually occurs when you ask a user for input, like their username/userid, and instead of a name/id, the user gives you an SQL statement that you will unknowingly run on your database.
To protect a web site from SQL injection, you can use SQL parameters.
SQL parameters are values that are added to an SQL query at execution time, in a controlled manner.
