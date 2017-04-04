
CREATE TABLE users (
id INT AUTO_INCREMENT,
username VARCHAR(255),
password VARCHAR(255),
name VARCHAR(255),
email VARCHAR(255),
photo VARCHAR(255),
photo_dir VARCHAR(255),
role CHAR(1) DEFAULT '1',
status CHAR(1) DEFAULT '0',
created DATETIME,
modified DATETIME,
primary key(id)
);

