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
    user.name, task.title, task.status_id
FROM
    (task JOIN user_task ON task.id = user_task.task_id)
        JOIN
    user ON user.id = user_task.user_id
WHERE
    name LIKE '%Donald Duck%'
        AND task.status_id =
        (SELECT id FROM status WHERE status.name = 'Not Started');

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created) = month_number)
SELECT
    user.name, task.title, monthname(task.created)
FROM
    (task JOIN user_task ON task.id = user_task.task_id)
        JOIN
    user ON user.id = user_task.user_id
WHERE
    name LIKE '%Maryrose Meadows'
        AND MONTH(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT 
    COUNT(*), MONTHNAME(task.created) AS month
FROM
    task
GROUP BY month;
