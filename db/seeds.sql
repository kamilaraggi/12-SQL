INSERT INTO department
(name)
VALUES
('HR'),
('Grafic Design'),
('Marketing'),
('Web Design'),
('General Manager');

INSERT INTO role
(title, salary, department_id)
VALUES
('CEO', 20000, 5),
('Manager', 18000, 5),
('Front End Dev', 13000, 4),
('Back End Dev', 15000, 4),
('Content Creator', 10000, 3),
('Assitent', 6000, 3),
('Art Director', 8000, 2),
('Editor', 6000, 2),
('Recruiter', 10000, 1),
('Database Analyst', 10000, 1);

INSERT INTO employee
(first_name, last_name, role_id, title, salary, manager_id)
VALUES
('Amanda', 'Alves', 10,'Database Analyst', 10000, NULL),
('Jessica', 'Moraes', 9,'Recruiter', 10000, NULL),
('Dani', 'Poeta', 8,'Editor', 6000, NULL),
('Julia', 'T', 7 ,'Art Director', 8000,NULL),
('Renata', 'R', 6, 'Assitent', 6000, NULL),
('Rebeca', 'G', 5, 'Content Creator', 10000, NULL),
('Ana', 'P', 4,'Back End Dev', 15000, NULL),
('Vivian', 'W', 3,'Front End Dev', 13000, NULL),
('Chris', 'Y', 2,'Manager', 18000, NULL),
('Antonella', 'Raggi', 1,'CEO', 20000, NULL);
