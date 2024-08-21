CREATE DATABASE IF NOT EXISTS Cine;

USE Cine;

CREATE TABLE Peliculas (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(200) NOT NULL,
    Lanzamiento VARCHAR(4) NOT NULL,
    Genero VARCHAR(60) NOT NULL
);

CREATE TABLE Estudios (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(200) NOT NULL
);

CREATE TABLE Actores (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(200) NOT NULL,
    Nacimiento VARCHAR(10)
);

CREATE TABLE Producciones (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    IdEstudio INT NOT NULL,
    IdPelicula INT NOT NULL,
    FOREIGN KEY (IdEstudio) REFERENCES Estudios(Id),
    FOREIGN KEY (IdPelicula) REFERENCES Peliculas(Id)
);

CREATE TABLE Reparto (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    IdPelicula INT NOT NULL,
    IdActores INT NOT NULL,
    FOREIGN KEY (IdPelicula) REFERENCES Peliculas(Id),
    FOREIGN KEY (IdActores) REFERENCES Actores(Id)
);

CREATE TABLE Usuarios (
	Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(200) NOT NULL,
    Clave VARCHAR(10) NOT NULL
);

INSERT INTO Peliculas VALUES
(NULL, 'Forrest Gump', '1994', 'Comedia/Romance'),
(NULL, 'Sully', '2016', 'Drama'),
(NULL, 'Terminator', '1984', 'Accion/Ciencia Ficcion')
(NULL, 'El Lobo de Wall Street', '2013', 'Satira/Drama'),
(NULL, 'Titanic', '1997', 'Drama/Romance'),
(NULL, 'Atrapame si puedes', '2002', 'Crimen/Comedia'),
(NULL, 'La Terminal', '2004', 'Comedia/Romance');

INSERT INTO Estudios VALUES
(NULL, 'Paramount Pictures'),
(NULL, 'Metro-Goldwyn-Mayer'),
(NULL, 'Warner Bros.'),
(NULL, 'Orion Pictures'),
(NULL, 'DreamWorks ');

INSERT INTO Actores VALUES
(NULL, 'Tom Hanks', '09/06/1956'),
(NULL, 'Arnold Schwarzenegger', '30/6/1947'),
(NULL, 'Leonardo DiCaprio', '11/11/1974');

INSERT INTO Reparto VALUES
(NULL, 1, 1),
(NULL, 2, 1),
(NULL, 3, 2),
(NULL, 4, 3),
(NULL, 5, 3),
(NULL, 6, 1),
(NULL, 6, 3),
(NULL, 7, 1);

INSERT INTO Producciones VALUES
(NULL, 1, 1),
(NULL, 3, 2),
(NULL, 4, 3),
(NULL, 1, 4),
(NULL, 1, 5),
(NULL, 1, 6),
(NULL, 5, 7);

INSERT INTO Usuarios VALUES (NULL, 'admin', '1234');