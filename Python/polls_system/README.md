## Polls system
The idea of the project is for learning purposes. Used resources - [Django Tutorial](https://docs.djangoproject.com/en/1.7/intro/tutorial01/)

### End points
- /polls - get all the available polls
- /polls/<pk> - get single poll with option to vote on questions choices
- /polls/<pk>/results - get single poll with choices votes count information
- /admin - admin panel

### For running the project
- python manage.py makemigrations
- python manage.py migrate (you can use the created .db file and see the results in sqlite client)
- python manage.py runserver 8080 (the server now listens on: http://localhost:8080
- If you want to use the admin panel execute - python manage.py createsuperuser
