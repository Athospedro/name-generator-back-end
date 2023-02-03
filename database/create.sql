CREATE SCHEMA namegator;

CREATE TABLE namegator.item (
  id serial,
  type text NOT NULL,
  description text NOT NULL
);

  insert into namegator.item (type, description)
  values ('prefix',  'Air');
  insert into namegator.item (type, description)
  values ('prefix',  'Bottim');
  insert into namegator.item (type, description)
  values ('prefix',  'Google');
  insert into namegator.item (type, description)
  values ('suffix',  'Gear' );
  insert into namegator.item (type, description)
  values ('suffix',  'Glice');  