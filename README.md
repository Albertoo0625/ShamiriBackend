###### Use MSSQL as the relational database:
Enable user sa and set up a SQL Authorization password,create a database and name it Shamiri, create a database with the sql query below:

```bash
# creating table
create table Users(
user_id int primary key identity(1,1) not null,
user_username varchar(255) not null,
user_roles varchar(255),
user_password varchar(255) not null,
user_email varchar(255) not null,
user_refreshToken varchar(255),
user_createdAt datetime ,
user_updatedAt datetime
);

```
### Setting up connection to the database from the server


On the backend code open config/mssmConfig.js

and update the areas with tags with the correct username and password,database name is already set

```bash

const db = new sequelize.Sequelize("Shamiri","<username> || "sa" >","<password>", {
    host: "localhost",
    dialect:"mssql",
    logging:console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })

  ```

  ### Start Server

  #### On Dev 

  on dev environment:
```bash
  npm run dev

  ```

  you should see 
  ```bash
  [nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
server listening on port 4000
```


#### on Prod
   on prod environment:
```bash
  npm start

  ```
   you should see on prod
  ```bash
> shamiribackend@1.0.0 start
> node server.js

Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
server listening on port 4000
```


### Congratulations Your server is now up and running