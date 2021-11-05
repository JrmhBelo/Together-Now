
INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Jose', 'Candido', 'candido88@gmail.com', '85888', '932132474', '1999-02-20', 22, 0);
	
INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)	
	VALUES ('Carlos', 'Esteves', 'estevesCT@gmail.com', '874', '921506077', '1973-05-17', 44, 0);
	
INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)	
	VALUES ('Tiago', 'Jardim', 'jardim@gmail.com', '8411', '925900554', '1964-09-10', 57, 0);
	
INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)	
	VALUES ('Vanda', 'Soares', 'soares@gmail.com', '788', '926094563', '1958-11-01', 70, 0);

INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Sara', 'Ribeiro', 'sararib@gmail.com', '12345678', '987967865', '2003-01-28', 18, 0);

INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Bernardo', 'Ribeiro', 'bernardorib@gmail.com', '121212', '987967976', '1980-02-02', 41, 0);

INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Carolina', 'Antunes', 'carolantunes@gmail.com', '364573', '910345672', '2001-03-09', 20, 0);

INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Rodrigo', 'Calixto', 'calix123456789@gmail.com', '200034', '960453777', '1970-10-12', 51, 0);		
--------------
INSERT INTO public.gestorevento(
	ges_nomep, ges_nomeu, ges_email, ges_pass, ges_telemovel, ges_nascimento, ges_idade, ges_organizacao)
	VALUES ( 'Ceu', 'Batista', 'ceusmeus@gmail.com', '982224321', '924465430', '1980-07-17', 42, 'Blue Clapper');

INSERT INTO public.gestorevento(
	ges_nomep, ges_nomeu, ges_email, ges_pass, ges_telemovel, ges_nascimento, ges_idade, ges_organizacao)
	VALUES ( 'Susana', 'Lopes', 'Lopes_SS@gmail.com', '871285', '924465430', '1999-10-13', 23, 'Verdes Unidos');

INSERT INTO public.gestorevento(
	ges_nomep, ges_nomeu, ges_email, ges_pass, ges_telemovel, ges_nascimento, ges_idade, ges_organizacao)
	VALUES ( 'Tomás', 'Joaquim', 'tomasjoa@gmail.com', '987654321', '975579931', '2000-09-22', 21, 'Oceano Azul Foundation');

INSERT INTO public.gestorevento(
	ges_nomep, ges_nomeu, ges_email, ges_pass, ges_telemovel, ges_nascimento, ges_idade, ges_organizacao)
	VALUES ( 'Pedro', 'Porro', 'pporro24@gmail.com', '244224434', '913564773', '1995-05-14', 26, 'Alabasta Foundation');

--------------
INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_categ)
	VALUES ('Recolha de alimentos', 'Evento solidário', 'Verdes Unidos', '2022-1-12', '2022-1-12', '09:00', '20:30', 'Pingo Doce Cascais-Villa, Shopping Center, Av. Dom Pedro I 1 2, 2750-042 Cascais', 6, 38.702683988493014, -9.419278139919834, 'Interior'); 

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_categ)
	VALUES ('Recolha de bens alimentares', 'Evento solidário', 'Blue Clapper', '2022-1-4', '2022-1-4', '10:00', '20:30', 'Pingo Doce São João do Estoril, R. Egas Moniz 173, 2765-478 Estoril', 6, 38.70059010524026, -9.38040829850534, 'Interior'); 

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_categ)
	VALUES ('Recolha de alimentos', 'Evento solidário', 'Oceano Azul Foundation', '2022-1-5', '2022-1-5', '10:20', '19:30', 'Pingo Doce Parede - Avenida da República, Av. da República 75, 2775-275 Parede', 6, 38.69027331444375, -9.355123308925933, 'Interior'); 

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_categ)
	VALUES ('Recolha de alimentos', 'Evento solidário', 'Blue Clapper', '2022-1-6', '2022-1-6', '10:00', '20:30', 'Pingo Doce Estoril Amoreira, R. Dom Bosco Vale da Amoreira, 2765-294 Estoril', 6, 38.717033001901875, -9.405335785692868, 'Interior'); 

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_categ)
	VALUES ('Limpeza da Praia de Carcavelos', 'Evento solidário', 'Oceano Azul Foundation', '2021-12-12', '2021-12-13', '14:00', '17:00', 'Wifi Cascais, Avenida Marginal, Junqueiro, Carcavelos e Parede, Cascais, Lisboa, 2775-629, Portugal', 20, 38.67975, -9.33635, 'Exterior');

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_categ)
	VALUES ('Limpeza da Praia da Rainha', 'Evento solidário', 'Oceano Azul Foundation', '2021-12-19', '2021-12-19', '14:00', '17:00', 'Praia da Rainha - 10, Estrada Florestal da Fonte da Telha, Terras da Costa, Almada, Charneca de Caparica, Setúbal, 2825-494, Portugal', 30, 38.61676, -9.21711, 'Exterior');

--------------
INSERT INTO public.regista(
	reg_data, reg_prof, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES ('2021-12-11', null, null, 'Cascais', 'Gosto de ajudar a comunidade por não?', null, 'Empregado', 1, 1);

INSERT INTO public.regista(
	reg_data, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES ('2021-12-02', 'Ensino Secundário', 'Cascais', 'Gosto de ajudar a comunidade por não?', null, 'Desempregado', 2, 2);
	
INSERT INTO public.regista(
	reg_data, reg_prof, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES ('2021-11-04', 'Hospedeira de Bordo', 'Doutoramento', 'Cascais', 'Ser solidária, ajudar a comunidade', 'Viúvo', 'Empregado', 3, 3);

INSERT INTO public.regista(
	reg_data, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES ('2021-11-02', 'Ensino Secundário', 'Costa de Caparica', 'Ajudar a comunidade que tanto gosto', 'Solteiro', 'Desempregado', 3, 2);

INSERT INTO public.regista(
	reg_data, reg_prof, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES ('2021-11-29', 'Médica', 'Mestrado', 'Lisboa', 'Enriquecimento Curricular', 'Solteira', 'Empregado', 3, 1);

INSERT INTO public.regista(
	reg_data, reg_prof, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES ('2022-01-22', 'Engenheiro Cívil', 'Licenciatura', 'Castelo Branco', 'Experienciar algo diferente', 'Casado', 'Empregado', 4, 4);
----




