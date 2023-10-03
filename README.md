# Todo-Backend
Deployed here: https://todo-backend-bay.vercel.app/api/tasks
You can test it via postman

CI/CD with github via vercel

## Get Repository
- git clone https://github.com/onitech/Todo-Frontend.git

## Setup
- npm i
- node src/app.js

## Git commands used
- git pull origin main
- git commit -m
- git push -u origin main

## Demo/Screenshots from Postman
### Environments:
Prod - https://todo-backend-bay.vercel.app/api/tasks
<img width="1000" alt="Screenshot 2023-10-03 at 10 54 04 AM" src="https://github.com/onitech/Todo-Backend/assets/56508599/4ba1702f-e7ec-43e6-9cc5-190e4b1a2ab7">



### Post/Create Task:

cURL - 
``curl --location 'https://todo-backend-bay.vercel.app/api/tasks' \
--header 'Content-Type: application/json' \
--data '{
    "title": "sample add"
}'``

<img width="1000" alt="Screenshot 2023-10-03 at 10 53 18 AM" src="https://github.com/onitech/Todo-Backend/assets/56508599/d9334e99-4acc-4a20-96c6-1ced40241c0a">



### Get/Read Tasks:

cURL - 
`curl --location 'https://todo-backend-bay.vercel.app/api/tasks'`

<img width="1000" alt="Screenshot 2023-10-03 at 10 53 13 AM" src="https://github.com/onitech/Todo-Backend/assets/56508599/f262aedd-7b30-49ba-950b-e0ea20d40f60">



### Put/Update Task:

cURL - 
``curl --location --request PUT 'https://todo-backend-bay.vercel.app/api/tasks/651af0c7680c0076b6b485df' \
--header 'Content-Type: application/json' \
--data '{
    "completed": "true"
}'``

<img width="1000" alt="Screenshot 2023-10-03 at 10 53 52 AM" src="https://github.com/onitech/Todo-Backend/assets/56508599/75008121-53ef-4584-ac0d-0c6fb114597c">



### Delete Task:

cURL - 
`curl --location --request DELETE 'https://todo-backend-bay.vercel.app/api/tasks/651b7afa41881703e288a69b'`

<img width="1000" alt="Screenshot 2023-10-03 at 10 53 57 AM" src="https://github.com/onitech/Todo-Backend/assets/56508599/a08d195b-ee44-4847-a6d3-e68699f108c1">

