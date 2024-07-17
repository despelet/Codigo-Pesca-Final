create schema if not exists productos;
USE productos ;
drop table indumentaria;
drop table accesorios;

create table if not exists indumentaria(
id int(7) primary key auto_increment,
tipo varchar(50),
nombre varchar(50) not null,
descripcion varchar(50),
precio int(10),
imagen varchar(100));

create table if not exists accesorios(
id int(7) primary key auto_increment,
tipo varchar(50),
nombre varchar(50) not null,
descripcion varchar(50),
precio int(10),
imagen varchar(100));

-- INDUMENTARIA 
describe indumentaria; 
select * from indumentaria;

insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Buzo", "Polar Payo", "Color: Negro", 35000, "/images/indumentaria/Buzo-Polar-Payo-10.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Buzo", "Polar Payo", "Color: Verde", 35000, "/images/indumentaria/Buzo-Polar-Payo-13.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Buzo", "Polar Payo", "Color: Azul", 35000, "/images/indumentaria/Buzo-Polar-Payo-Petroleo-5.png");

insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Campera", "Rompevientos Payo", "Color: Blanca", 50000, "/images/indumentaria/Campera-Payo-Rompeviento-Impermeable-3-scaled.jpg");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Campera", "Rompevientos Payo", "Color: Verde Lima", 50000, "/images/indumentaria/Campera-Payo-Rompeviento-Impermeable-5-scaled.jpg");

insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Combo", "Combo 1 Payo", "Remera + cuello. Diseño: Dorado", 45000, "/images/indumentaria/Combo-Remera-Cuello-Payo.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Combo", "Combo 2 Payo", "Remera + cuello. Diseño: Tararira", 45000, "/images/indumentaria/Combo-Remera-Cuello-Payo.png");

insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Color: Negro con azul", 38000, "/images/indumentaria/Remera-Payo-Capucha-Breaking-Limits-Full-Collor-Proteccion-UV-40-1.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Color: Blanco con celeste", 38000, "/images/indumentaria/Remera-Payo-Capucha-Breaking-Limits-Full-Collor-Proteccion-UV-40-1.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Estampa: Camuflado", 38000, "/images/indumentaria/Remera-Payo-con-Capucha-Proteccion-UV-Modelo-1-1-600x600.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Estampa: Grises", 38000, "/images/indumentaria/Remera-Payo-con-Capucha-Proteccion-UV-Modelo-13-600x600.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Estampa: Colores tierra", 38000, "/images/indumentaria/Remera-Payo-con-Capucha-Proteccion-UV-Modelo-Evolution-1-1-600x600.png");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Color: Lima", 38000, "/images/indumentaria/Remera-Payo-Especies-Lima-Proteccion-UV-copia-6-600x600.jpeg");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Color: Azul", 38000, "/images/indumentaria/Remera-PAYO-Proteccion-UV-Breaking-Capucha-1.jpeg");
insert into indumentaria (tipo, nombre, descripcion, precio, imagen) values ("Remera", "Remera Payo", "Color: Gris", 38000, "/images/indumentaria/Remera-PAYO-Proteccion-UV-Breaking-Capucha-Gris-Perla-3.jpeg");

-- ACCESORIOS
describe accesorios;
select * from accesorios;

insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Caña", "Muse", "Bait Cast", 135000, "/images/cañas/Cana-13-Fishing-Muse-Bait-Cast-4.png");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Caña", "Brisa", "Marine Sports", 120000, "/images/cañas/Cana-Marine-Sports-Brisa-Bait-1-tramo-2-tramos-3.png");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Caña", "Rapala", "TS2 Bait", 125000, "/images/cañas/Cana-Rapala-TS2-Bait-1-tramo-2-tramos-4 (1).png");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Caña", "Telescópica", "Spinit Tournament", 128000, "/images/cañas/Cana-Telescopica-Spinit-Tournament-3.jpg");

insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Reel", "Daiwa Sweepfire", "Frontal, 1500C", 150000, "/images/cañas/Reel-Frontal-Daiwa-Sweepfire-E-1500C.jpg");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Reel", "Spinning Spinit", "Frontal, Lbr 602", 150000, "/images/cañas/Reel-Frontal-Spinning-Spinit-Lbr-602.jpg");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Reel", "Marine Rotativo", "Brisa Lite 8000", 160000, "/images/cañas/Reel-Marine-Rotativo-Brisa-Lite-8000-3.jpg");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Reel", "Marine Rotativo", "Titan 300", 160000, "/images/cañas/Reel-Marine-Rotativo-Titan-300-1.jpg");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Reel", "Gamma Rotativo", "G 5501 CS 4", 180000, "/images/cañas/Reel-Rotativo-Gamma-G-5501-CS-4.png");
insert into accesorios (tipo, nombre, descripcion, precio, imagen) values ("Reel", "Marine Rotativo", "Black Widow 2022", 125000, "/images/cañas/Reel-Rotativo-Marine-Black-Widow-2022.jpg");
select * from accesorios;











