//// -- LEVEL 1
//// -- Tables and References

// Creating tables
Table users as U {
  id int [pk, increment] // auto-increment
  user_name varchar 
  email varchar
  password varchar
  area_code int
}

Table sports as S {
  id int [pk, increment]
  game_name varchar
}
Table game as G {
  id int [pk, increment]
  date int
  time int
  sport_id int [ref: > S.id]
  skill_level varchar
  equipments_needed varchar
  location varchar //address
  gamers_needed int
  user_id int [ref: > U.id] 
}

Table post as P {
  id int [pk, increment]
  user_id varchar [ref: > U.id] 
  game_id varchar [ref: > G.id] 
  message varchar
  times_created int 
}



