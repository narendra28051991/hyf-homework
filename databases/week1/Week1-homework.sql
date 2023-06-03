/* Find out how many tasks are in the task table */
select
  COUNT(id)
from
  task;

/* Find out how many tasks in the task table do not have a valid due date */
select
  COUNT(id)
from
  task
where
  IsNull(due_date);

/* Find all the tasks that are marked as done */
select
  *
from
  task
where
  status_id = 3;

/* Find all the tasks that are not marked as done */
select
  *
from
  task
where
  status_id != 3;

/* Get all the tasks, sorted with the most recently created first */
select
  *
from
  task
ORDER BY
  created DESC;

/* Get the single most recently created task */
select
  *
from
  task
ORDER BY
  created DESC
LIMIT 1;

/* Get the title and due date of all tasks where the title or description contains database */
select
  *
from
  task
where
  title like '%database%'
  OR
  description LIKE '%database%';

/* Get the title and status (as text) of all tasks */
select
  title,
  case
    WHEN status_id = 1 THEN 'Not started'
    WHEN status_id = 2 THEN 'In progress'
    WHEN status_id = 3 THEN 'Done'
    ELSE ''
  END AS status
from
  task;

/* Get the name of each status, along with a count of how many tasks have that status */
select
  name,
  COUNT(status_id) as NumberOfTasks
from
  status
  INNER JOIN task ON status.id = task.status_id
GROUP BY
  status_id;

/* Get the names of all statuses, sorted by the status with most tasks first */
select
  name,
  COUNT(status_id) as NumberOfTasks
from
  status
  INNER JOIN task ON status.id = task.status_id
GROUP BY
  status_id
ORDER BY
  COUNT(status_id) DESC;
  