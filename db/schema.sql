-- Replace achievements_db with Heroku database after deployment --
DROP DATABASE IF EXISTS achievements_db;

CREATE DATABASE achievements_db;

