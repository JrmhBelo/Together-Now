INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Sara', 'Ribeiro', 'sararibeiro@gmail.com', '12345678', '987967865', '2003-01-28', 18, 0);

INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Bernardo', 'Ribeiro', 'bernardoribeiro@gmail.com', '121212', '987967976', '2003
			1980-02-02', 41, 0);
	
INSERT INTO public.gestorevento(
	ges_nomep, ges_nomeu, ges_email, ges_pass, ges_telemovel, ges_nascimento, ges_idade, ges_organizacao)
	VALUES ( 'Tomás', 'Joaquim', 'tomasjoaquim@gmail.com', '987654321', '975579931', '2000-09-22', 21, 'Oceano Azul Foundation');

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_estado, eve_categ, ges_id)
	VALUES ('Limpeza da Praia de Carcavelos', 'Evento solidário', 'Oceano Azul Foundation', '2021-12-12', '2021-12-13', 14:00, 17:00, 'Wifi Cascais, Avenida Marginal, Junqueiro, Carcavelos e Parede, Cascais, Lisboa, 2775-629, Portugal', 38.67975, -9.33635, 'Exterior', 1);

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_estado, eve_categ, ges_id)
	VALUES ('Limpeza da Praia da Rainha', 'Evento solidário', 'Oceano Azul Foundation', '2021-12-19', '2021-12-19', 14:00, 17:00, 'Praia da Rainha - 10, Estrada Florestal da Fonte da Telha, Terras da Costa, Almada, Charneca de Caparica, Setúbal, 2825-494, Portugal', 30,38.61676, -9.21711, 'Exterior', 1);
	
INSERT INTO public.regista(
	reg_data, reg_prof, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES (2021-11-04, 'Hospedeira de Bordo', 'Doutoramento', 'Cascais', 'Ser solidária, ajudar a comunidade', 'Viúvo', 'Empregado', 1, 1);

INSERT INTO public.regista(
	reg_data, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES (2021-11-02, 'Ensino Secundário', 'Costa de Caparica', 'Ajudar a comunidade que tanto gosto', 'Solteiro', 'Desempregado', 2, 2);