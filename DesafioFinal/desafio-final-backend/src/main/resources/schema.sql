
-- Este script é executado automaticamente pelo Spring Boot para criar a estrutura do banco de dados. 

create sequence pedido_seq start 100 increment 1;

create table produto (
    id_produto int not null,
    categoria varchar(1000) not null,
    descricao varchar(1000) not null,
    preco decimal(8, 2) not null,
    constraint produto_pk primary key (id_produto)
);

create table pedido (
    id_pedido int not null,
    data_hora datetime not null,
    situacao varchar(100) not null,
    constraint pedido_pk primary key (id_pedido)
);

create table item_pedido (
    id_pedido int not null,
    id_produto int not null,
    quantidade int not null,
    constraint item_pedido_pk primary key (id_pedido, id_produto)
);

alter table item_pedido add constraint item_pedido_fk1 foreign key (id_pedido) references pedido(id_pedido) on delete cascade;
alter table item_pedido add constraint item_pedido_fk2 foreign key (id_produto) references produto(id_produto) on delete restrict;