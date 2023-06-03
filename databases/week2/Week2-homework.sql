USE `HYF_Lesson_2`;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
    user.email, task.title, task.description
FROM
    (task JOIN user_task ON task.id = user_task.task_id)
        JOIN
    user ON user.id = user_task.user_id
WHERE
    email LIKE '%@spotify.com%';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT 
    task.id,
    task.title AS 'Task Name',
    user.name AS 'user',
    status.name AS status
FROM
    user_task
        JOIN
    task ON user_task.task_id = task.id
        JOIN
    user ON user_task.user_id = user.id
        JOIN
    status ON task.status_id = status.id
WHERE
    status.name = 'Not started'
        AND user.name = 'Donald Duck';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created) = month_number)
SELECT
    user.name, task.title, monthname(task.created)
FROM
    (task JOIN user_task ON task.id = user_task.task_id)
        JOIN
    user ON user.id = user_task.user_id
WHERE
    name LIKE '%Maryrose Meadows%'
        AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT 
    COUNT(*), MONTHNAME(task.created) AS month
FROM
    task
GROUP BY month;
