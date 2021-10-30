
drop database  if exists TogetherNow;

create database TogetherNow;



create table utilizador(
uti_ID serial,
uti_nomeP varchar(30),
uti_nomeU varchar(30),
uti_email varchar(50),
uti_telemovel varchar(9),
uti_nascimento date,
uti_idade int,
uti_totalP int,
primary key (uti_ID)
);

create table gestorEvento(
ges_ID serial,
ges_nomeP varchar(30),
ges_nomeU varchar(30),
ges_email varchar(50),
ges_telemovel varchar(9),
ges_nascimento date,
ges_idade int,
ges_organizacao varchar(30),
primary key (ges_ID)
);

create table evento(
eve_ID serial,
eve_data date,
eve_dataI time,
eve_dataF time,
eve_morada varchar(50),
eve_maxParticipantes int,
eve_lati float,
eve_long float,
eve_nome varchar(50),
eve_descricao varchar(100),
eve_beneficiario varchar(50),
eve_estado varchar(20),
eve_categ varchar(20),
ges_ID int,
primary key (eve_id),
foreign key (ges_ID) references gestorEvento (ges_ID)
);

create table regista(
reg_data date,
reg_pontos int,
reg_prof varchar(30),
reg_escol varchar(30),
reg_morada varchar(50),
reg_motiv varchar(200),
reg_civil varchar(30),
reg_empreg varchar(30),
eve_ID int,
uti_ID int,
primary key(eve_ID,uti_ID),
foreign key (eve_ID) references Evento (eve_ID),
foreign key (uti_ID) references Utilizador (uti_ID)
);

create table Participa (
part_data date,
part_pontos int,
eve_ID int,
uti_ID int,
primary key(eve_ID,uti_ID),
foreign key (eve_ID) references Evento (eve_ID),
foreign key (uti_ID) references Utilizador (uti_ID)
)