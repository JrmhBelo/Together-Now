


CREATE TABLE utilizador(
	uti_ID serial,
	uti_nomeP varchar(30) NOT NULL,
	uti_nomeU varchar(30) NOT NULL,
	uti_email varchar(50),
	uti_pass varchar(50),
	uti_telemovel varchar(9),
	uti_nascimento date,
	uti_idade int, --Deveriamos retirar a idade mas sim 
	uti_totalP int DEFAULT 0,
	uti_genero char(1),
	PRIMARY KEY (uti_ID)
);

CREATE TABLE gestorEvento(
	ges_ID serial,
	ges_nomeP varchar(30) NOT NULL,
	ges_nomeU varchar(30) NOT NULL,
	ges_email varchar(50),
	ges_pass varchar(50),
	ges_telemovel varchar(9),
	ges_nascimento date,
	ges_idade int, --Deveriamos retirar a idade mas sim 
	ges_organizacao varchar(30),
	ges_genero char(1) --CHECK (ges_genero = 'M' OR ges_genero = 'F'),
	PRIMARY KEY (ges_ID)
);

CREATE TABLE evento(
	eve_ID serial,
	eve_nome varchar(100) NOT NULL,
	eve_descricao varchar(100) NOT NULL,
	eve_beneficiario varchar(50) NOT NULL,
	eve_dataI date,
	eve_dataF date,
	eve_horaI time,
	eve_horaF time,
	eve_morada varchar(240),
	eve_maxParticipantes int NOT NULL,
	eve_lati float NOT NULL,
	eve_lon float NOT NULL,
	eve_estado varchar(20) DEFAULT 'Criado',
	eve_categ varchar(20),
	ges_ID int,
	PRIMARY KEY (eve_id),
	FOREIGN KEY (ges_ID) REFERENCES gestorEvento (ges_ID)
);

CREATE TABLE regista(
	reg_data date DEFAULT CURRENT_DATE,
	reg_pontos int DEFAULT 10,
	reg_prof varchar(30),
	reg_escol varchar(30),
	reg_morada varchar(50),
	reg_motiv varchar(200),
	reg_civil varchar(30),
	reg_empreg varchar(30),
	eve_ID int,
	uti_ID int,
	PRIMARY KEY(eve_ID,uti_ID),
	FOREIGN KEY (eve_ID) REFERENCES Evento (eve_ID),
	FOREIGN KEY (uti_ID) REFERENCES Utilizador (uti_ID)
);

CREATE TABLE participa (
	part_data date DEFAULT CURRENT_DATE,
	part_pontos int DEFAULT 50,
	eve_ID int,
	uti_ID int,
	PRIMARY KEY (eve_ID,uti_ID),
	FOREIGN KEY (eve_ID) REFERENCES Evento (eve_ID),
	FOREIGN KEY (uti_ID) REFERENCES Utilizador (uti_ID)
)


create table cria(
	cria_data date DEFAULT CURRENT_DATE,
	ges_ID int,
	eve_ID int,
	PRIMARY KEY (ges_id,eve_id),
	FOREIGN KEY (eve_id) REFERENCES Evento (eve_ID),
	FOREIGN KEY (ges_id) REFERENCES gestorevento (ges_id)
)
	
---------------------------------

ALTER TABLE gestorevento
ADD CONSTRAINT ges_genero CHECK (ges_genero = 'M' OR ges_genero = 'F');

ALTER TABLE utilizador
ADD CONSTRAINT uti_genero CHECK (uti_genero = 'M' OR uti_genero = 'F' or uti_genero = null);

alter table regista
add column reg_cidade varchar(50);

alter table regista
add column reg_concelho varchar(50);

ALTER TABLE evento
ADD CONSTRAINT eve_maxparticipantes CHECK (eve_maxparticipantes >= 2);

alet


--ALTER TABLE cria
--alter Column cria_data set DEFAULT CURRENT_DATE
--só para referencia