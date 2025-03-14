# Backend Setup

Create and activate virtual env:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install requirements:

```bash
pip install -r requirements.txt
```

Add environment variables:

```bash
cp .env.example .env
# Update the values in .env
```

Run the application (FE):

```bash
fastapi dev main.py
```
