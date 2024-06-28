create schema if not exists productos;
USE productos ;
drop table indumentaria;
drop table accesorios;

create table indumentaria(
id int(7) primary key auto_increment,
tipo varchar(10),
nombre varchar(50) not null,
descripcion varchar(50),
imagen varchar(100));

create table accesorios(
id int(7) primary key auto_increment,
tipo varchar(10),
nombre varchar(50) not null,
descripcion varchar(50),
imagen varchar(100));

-- INDUMENTARIA 
describe indumentaria; 
select * from indumentaria;

insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Buzo", "Polar Payo", "Color: Negro", "/images/indumentaria/Buzo-Polar-Payo-10.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Buzo", "Polar Payo", "Color: Verde", "/images/indumentaria/Buzo-Polar-Payo-13.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Buzo", "Polar Payo", "Color: Azul", "/images/indumentaria/Buzo-Polar-Payo-Petroleo-5.png");

insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Campera", "Rompevientos Payo", "Color: Blanca", "/images/indumentaria/Campera-Payo-Rompeviento-Impermeable-3-scaled.jpg");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Campera", "Rompevientos Payo", "Color: Verde Lima", "/images/indumentaria/Campera-Payo-Rompeviento-Impermeable-5-scaled.jpg");

insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Combo", "Combo 1 Payo", "Remera + cuello. Diseño: Dorado", "/images/indumentaria/Combo-Remera-Cuello-Payo.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Combo", "Combo 2 Payo", "Remera + cuello. Diseño: Tararira", "/images/indumentaria/Combo-Remera-Cuello-Payo.png");

insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Color: Negro con azul", "/images/indumentaria/Remera-Payo-Capucha-Breaking-Limits-Full-Collor-Proteccion-UV-40-1.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Color: Blanco con celeste", "/images/indumentaria/Remera-Payo-Capucha-Breaking-Limits-Full-Collor-Proteccion-UV-40-1.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Estampa: Camuflado", "/images/indumentaria/Remera-Payo-con-Capucha-Proteccion-UV-Modelo-1-1-600x600.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Estampa: Grises", "/images/indumentaria/Remera-Payo-con-Capucha-Proteccion-UV-Modelo-13-600x600.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Estampa: Colores tierra", "/images/indumentaria/Remera-Payo-con-Capucha-Proteccion-UV-Modelo-Evolution-1-1-600x600.png");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Color: Lima", "/images/indumentaria/Remera-Payo-Especies-Lima-Proteccion-UV-copia-6-600x600.jpeg");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Color: Azul", "/images/indumentaria/Remera-PAYO-Proteccion-UV-Breaking-Capucha-1.jpeg");
insert into indumentaria (tipo, nombre, descripcion, imagen) values ("Remera", "Remera Payo", "Color: Gris", "/images/indumentaria/Remera-PAYO-Proteccion-UV-Breaking-Capucha-Gris-Perla-3.jpeg");

-- ACCESORIOS
describe accesorios;
select * from accesorios;

insert into accesorios (tipo, nombre, descripcion, imagen) values ("Caña", "Muse", "Bait Cast", "/images/cañas/Cana-13-Fishing-Muse-Bait-Cast-4.png");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Caña", "Brisa", "Marine Sports", "/images/cañas/Cana-Marine-Sports-Brisa-Bait-1-tramo-2-tramos-3.png");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Caña", "Rapala", "TS2 Bait", "/images/cañas/Cana-Rapala-TS2-Bait-1-tramo-2-tramos-4 (1).png");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Caña", "Telescópica", "Spinit Tournament", "/images/cañas/Cana-Telescopica-Spinit-Tournament-3.jpg");

insert into accesorios (tipo, nombre, descripcion, imagen) values ("Reel", "Daiwa Sweepfire", "Frontal, 1500C", "/images/cañas/Reel-Frontal-Daiwa-Sweepfire-E-1500C.jpg");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Reel", "Spinning Spinit", "Frontal, Lbr 602", "/images/cañas/Reel-Frontal-Spinning-Spinit-Lbr-602.jpg");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Reel", "Marine Rotativo", "Brisa Lite 8000", "/images/cañas/Reel-Marine-Rotativo-Brisa-Lite-8000-3.jpg");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Reel", "Marine Rotativo", "Titan 300", "/images/cañas/Reel-Marine-Rotativo-Titan-300-1.jpg");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Reel", "Gamma Rotativo", "G 5501 CS 4", "/images/cañas/Reel-Rotativo-Gamma-G-5501-CS-4.png");
insert into accesorios (tipo, nombre, descripcion, imagen) values ("Reel", "Marine Rotativo", "Black Widow 2022", "/images/cañas/Reel-Rotativo-Marine-Black-Widow-2022.jpg");












