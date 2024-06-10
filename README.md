# express_api_19

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date   : 2023/06/10

 update : 2023/06/10  

***

express + Turso LibSQL, sample

***
### setup

* .env : password , host , dbname set

```
TURSO_AUTH_TOKEN=""
TURSO_URL="libsql://"
```
***
* table
```
CREATE TABLE test (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP(3) NULL,
  title TEXT NOT NULL,
  content TEXT,
  completed INTEGER  DEFAULT 0,
  userId    INTEGER  DEFAULT 0 
);
```
***
### Start

```
# dev-start
yarn dev

# start
yarn build

yarn start

```
***
### blog

***

