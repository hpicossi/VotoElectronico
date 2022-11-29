USE `Voto_Electronico` ;


-- Insertar estados de votacion
INSERT INTO estado_Votacion (descripcion_estado)
SELECT * FROM (SELECT 'ABIERTA') AS tmp
WHERE NOT EXISTS (
    SELECT descripcion_estado FROM estado_Votacion WHERE descripcion_estado = 'ABIERTA'
) LIMIT 1;

INSERT INTO estado_Votacion (descripcion_estado)
SELECT * FROM (SELECT 'CERRADA') AS cerr
WHERE NOT EXISTS (
    SELECT descripcion_estado FROM estado_Votacion WHERE descripcion_estado = 'CERRADA'
) LIMIT 1;


-- a. Registrar un nuevo usuario a la base de datos.

INSERT INTO Usuario (Nombre , Apellido , Telefono , DNI)
SELECT * FROM (SELECT 'Hilario', 'Menendez', '02232435435', '35098765') AS tmp
WHERE NOT EXISTS (
    SELECT DNI FROM Usuario WHERE DNI = '35098765'
) LIMIT 1;


INSERT IGNORE INTO Usuario
(Nombre, Apellido, Telefono, DNI)
VALUES
('Rosario','Gabbarini','3453453453', '45989765');

INSERT IGNORE INTO Usuario
(Nombre, Apellido, Telefono, DNI)
VALUES
('Florencia','Corvalan','4565765768', '65343332');

INSERT IGNORE INTO Usuario
(Nombre, Apellido, Telefono, DNI)
VALUES
('Marcos','Gomez','6456456456', '35678987'),
('Juan','Ortega','45645456', '23456789');

-- c. Insertar un registro en nuestra entidad principal.


INSERT INTO `voto_electronico`.`votacion` (`idVotacion`, `descripcion_Votacion`, `fecha_inicio`, `fecha_cierre`, `para_Todos`, `estado_Votacion_idestado_Votacion`) 
VALUES ('2', '¿ Que fruta es tu preferida ?', '2021-11-02', '2021-11-04', '2', '2');


-- d . Actualizar un dato en nuestra entidad principal para un registro específico.

UPDATE `voto_electronico`.`votacion` 
SET `descripcion_Votacion` = 'updateEcho' 
WHERE (`idVotacion` = '2');

UPDATE `voto_electronico`.`usuario`
SET
`Telefono` ='3517707973'
WHERE `idusuario` = 2;


-- e . Actualizar un dato en nuestra entidad principal para un grupo de registros.

UPDATE `voto_electronico`.`votacion`
SET
`fecha_inicio` = '2021-11-03'
WHERE idVotacion BETWEEN 10 AND 12 ;


-- Insertar datos en Login (Chequear si los id de usuario son correctos porque en mi caso arranco en id 2)
INSERT IGNORE INTO Login
(userName, password, idusuario)
VALUES
('Marquinho','werwerwer',4),
('R0Gabb','gbdfgbdf',2),
('Juancho','fghdfgdfg',5),
('Flor','nbcvbnv',3),
('HilaMen','nhgchnc',1)
;

-- f. Eliminar un registro específico de la base de datos.

DELETE FROM `voto_electronico`.`login`
WHERE idLogin = 2;

-- b. Consultar si existe el usuario “Juan” en la base de datos y si la contraseña “123456” es correcta.

SELECT * FROM Login
WHERE userName = 'Juan' AND password = '123456';


-- Insertar datos en Pais / Provincia / Ciudad

INSERT IGNORE INTO Pais
(NombrePais)
VALUES
('ARGENTINA'),
('BRASIL'),
('COLOMBIA');

INSERT IGNORE INTO Pais
(NombrePais)
VALUES
('JAPON'),
('ISRAEL'),
('ALEMANIA');

INSERT IGNORE INTO provincia
(NombreProvincia, idPais)
VALUES
('CORDOBA', 1),
('BUENOS AIRES', 1),
('NEUQUEN', 1),
('MENDOZA', 1),
('SAN LUIS', 1),
('CHUBUT', 1);

INSERT IGNORE INTO Ciudad
(NombreCiudad, idProvincia)
VALUES
('CORDOBA CAPITAL', 1),
('CARLOS PAZ', 1),
('MALAGUEÑO', 1),
('PILAR', 1),
('YOCSINA', 1);

-- Consultas con Select 
SELECT * FROM Voto_Electronico.Pais;
SELECT * FROM Voto_Electronico.Usuario WHERE idusuario = 3;
SELECT Nombre FROM Voto_Electronico.Usuario WHERE DNI = '23456789';


-- Se corrige claves foraneas (NO ejecutar cuidado, es solo a modo de muestra)
alter table Ubicacion drop foreign key fk_Ubicacion_ciudad;
alter table Ubicacion drop foreign key fk_Ubicacion_pais;
alter table Ubicacion drop foreign key fk_Ubicacion_provincia;
alter table Provincia drop foreign key fk_pais_provincia;
ALTER TABLE Resultado
    ADD COLUMN idVotacion INT NOT NULL,
    ADD CONSTRAINT `fk_resultado_votacion` FOREIGN KEY (idVotacion)
        REFERENCES Votacion(idVotacion);

ALTER TABLE Provincia
    ADD CONSTRAINT `fk_pais_provincia` FOREIGN KEY (idPais)
        REFERENCES Pais(idPais);

ALTER TABLE Ciudad
    ADD CONSTRAINT `fk_ciudad_provincia` FOREIGN KEY (idProvincia)
        REFERENCES Provincia(idProvincia);
        
        
ALTER TABLE Ubicacion
	ADD CONSTRAINT `fk_Ubicacion_ciudad` FOREIGN KEY (idCiudad)
        REFERENCES Ciudad(idCiudad);
        
        
ALTER TABLE Ubicacion
	ADD CONSTRAINT `fk_Ubicacion_provincia` FOREIGN KEY (idProvincia)
        REFERENCES Provincia(idProvincia);
        
        
ALTER TABLE Ubicacion
	ADD CONSTRAINT `fk_Ubicacion_pais` FOREIGN KEY (idPais)
        REFERENCES Pais(idPais);