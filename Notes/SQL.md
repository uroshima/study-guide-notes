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