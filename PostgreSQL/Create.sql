
DROP DATABASE IF EXISTS TogetherNow;

CREATE TABLE utilizador(
	uti_ID serial,
	uti_nomeP varchar(30),
	uti_nomeU varchar(30),
	uti_email varchar(50),
	uti_pass varchar(50),
	uti_telemovel varchar(9),
	uti_nascimento date,
	uti_idade int,
	uti_totalP int,
	PRIMARY KEY (uti_ID)
);

CREATE TABLE gestorEvento(
	ges_ID serial,
	ges_nomeP varchar(30),
	ges_nomeU varchar(30),
	ges_email varchar(50),
	ges_pass varchar(50),
	ges_telemovel varchar(9),
	ges_nascimento date,
	ges_idade int,
	ges_organizacao varchar(30),
	PRIMARY KEY (ges_ID)
);

CREATE TABLE evento(
	eve_ID serial,
	eve_nome varchar(100),
	eve_descricao varchar(100),
	eve_beneficiario varchar(50),
	eve_dataI date,
	eve_dataF date,
	eve_horaI time,
	eve_horaF time,
	eve_morada varchar(240),
	eve_maxParticipantes int,
	eve_lati float,
	eve_lon float,
	eve_estado varchar(20) DEFAULT 'Iniciado',
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