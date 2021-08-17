//// -- LEVEL 1
//// -- Tables and References

// Creating tables
Table users as U {
  id int [pk, increment] // auto-increment
  username varchar 
  email varchar
  password varchar
  area_code int
}

Table sport as S {
  id int [pk, increment]
  game_name varchar
}

Table game as G {
  id int [pk, increment]
  date DATE
  sport_id int [ref: > S.id]
  skill_level varchar
  equipments_needed varchar
  location varchar //address
  gamers_needed int
  user_id int [ref: > U.id] 
}

Table game as P {
  id int [pk, increment]
  user_id varchar [ref: > U.id] 
  game_id varchar [ref: > G.id]
  title varchar
  game_content varchar
  time_created DATE
}