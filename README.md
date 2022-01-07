# DOWN_GAMES

# BANCO DE DADOS DESENVOLVIDO:

create table jogos (
    jogo_id int auto_increment,
    nome varchar(255) not null,
    descricao varchar(255),
    imagem longblob not null,
  	arquivo longblob not null,
    admin enum('0', '1') not null,
  	primary key (jogo_id)
);