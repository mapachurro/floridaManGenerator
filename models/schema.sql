DROP DATABASE IF EXISTS floridaManDB;
CREATE DATABASE floridaManDB;

Use floridaManDB;

CREATE TABLE articles(
   id INTEGER NOT NULL AUTO_INCREMENT,
   headline VARCHAR (255) NOT NULL,
   photoPath VARCHAR (255),
   articleText VARCHAR (5000),
   originalURL VARCHAR (255),
   PRIMARY KEY (id)
)