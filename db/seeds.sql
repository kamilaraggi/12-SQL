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
(first_name, last_name, role_id, manager_id)
VALUES
('Amanda', 'Alves', 10, NULL),
('Jessica', 'Moraes', 9, NULL),
('Dani', 'Poeta', 8, NULL),
('Julia', 'T', 7 ,NULL),
('Renata', 'R', 6, NULL),
('Rebeca', 'G', 5, NULL),
('Ana', 'P', 4, NULL),
('Vivian', 'W', 3, NULL),
('Chris', 'Y', 2, NULL),
('Antonella', 'Raggi', 1, NULL);
