INSERT INTO department
(id, name)
VALUES
(1, 'HR')
(2, 'Grafic Design')
(3,'Marketing')
(4,'Web Design')
(5,'General Manager');

INSERT INTO role
(id, title, salary, department_id)
(1, 'CEO', 20000, 5)
(2, 'Manager', 18000, 5)
(3, 'Front End Dev', 13000, 4)
(4, 'Back End Dev', 15000, 4)
(5,'Content Creator', 10000, 3)
(6, 'Assitent', 6000, 3)
(7,'Art Director', 8000, 2)
(8, 'Editor', 6000, 2)
(9, 'Recruiter', 10000, 1)
(10, 'Database Analyst', 10000, 1);

INSERT INTO employee
(id, first_name, last_name, role_id, manager_id)
(1, 'Amanda', 'Alves', 10)
(2, 'Jessica', 'Moraes', 9)
(3, 'Dani', 'Poeta', 8)
(4, 'Julia', 'T', 7)
(5, 'Renata', 'R', 6)
(6, 'Rebeca', 'G', 5)
(7, 'Ana', 'P', 4)
(8, 'Vivian', 'W', 3)
(9, 'Chris', 'Y', 2)
(10, 'Antonella', 'Raggi', 1, 1);
