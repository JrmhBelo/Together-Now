INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Carolina', 'Antunes', 'carolantunes@gmail.com', '364573', '910345672', '2001-03-09', 20, 0);

INSERT INTO public.utilizador(
	uti_nomep, uti_nomeu, uti_email, uti_pass, uti_telemovel, uti_nascimento, uti_idade, uti_totalp)
	VALUES ('Rodrigo', 'Calixto', 'calix123456789@gmail.com', '200034', '960453777', '1970-10-12', 51, 0);

INSERT INTO public.gestorevento(
	ges_nomep, ges_nomeu, ges_email, ges_pass, ges_telemovel, ges_nascimento, ges_idade, ges_organizacao)
	VALUES ( 'Pedro', 'Porro', 'pporro24@gmail.com', '244224434', '913564773', '1995-05-14', 26, 'Alabasta Foundation');

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_estado, eve_categ, ges_id)
	VALUES ('Recolha de lixo à beira da estrada N2', 'Evento solidário', 'Alabasta Foundation', '2021-12-27', '2021-12-27', 14:00, 21:00, 'N2 40 3460, Vila de Rei, Portugal', 39.678956, -8.142297, 'Exterior', 3);

INSERT INTO public.evento(
	eve_nome, eve_descricao, eve_beneficiario, eve_datai, eve_dataf, eve_horai, eve_horaf, eve_morada, eve_maxparticipantes, eve_lati, eve_lon, eve_estado, eve_categ, ges_id)
	VALUES ('Baby babysitting solidário em noite de São Valentim', 'Evento solidário', 'Alabasta Foundation', '2022-02-14', '2021-12-15', 20:00, 00:30, 'Av. Manuel da Maia 36, 1049-001 Lisboa, Portugal', 38.736923, -9.136625, 'Interior', 3);
	
INSERT INTO public.regista(
	reg_data, reg_prof, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES (2021-11-29, 'Médica', 'Mestrado', 'Lisboa', 'Enriquecimento Curricular', 'Solteira', 'Empregado', 3, 3);

INSERT INTO public.regista(
	reg_data, reg_prof, reg_escol, reg_morada, reg_motiv, reg_civil, reg_empreg, eve_id, uti_id)
	VALUES (2022-01-22, 'Engenheiro Cívil', 'Licenciatura', 'Castelo Branco', 'Experienciar algo diferente', 'Casado', 'Empregado', 4, 4);