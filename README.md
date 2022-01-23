# SimpleCRM-P

## Setup Backend

Setup Email sender data into settings.py:
```python
EMAIL_HOST = ''
EMAIL_PORT = ''
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
```

Create and enter into virtual environment:
```bash
virtualenv env
source env/bin/activate
```

Enter project:
```bash
cd backend/
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Make migrations:
```bash
python3 manage.py migrate
```

Run server:
```bash
python3 manage.py runserver
```

## Setup Frontend

Enter project:
```bash
cd frontend/
```

Install dependencies:
```bash
npm install
```

Run app:
```bash
npm start
```


