from fastapi import FastAPI
from supabase import create_client, Client

from .config import Settings


settings = Settings()

app = FastAPI()

url: str = settings.supabase_url
key: str = settings.supabase_key
supabase: Client = create_client(url, key)


@app.get("/")
async def root():
    response = (
        supabase.table("testtable")
        .select("*")
        .execute()
    )
    return {"app_name": settings.app_name, "message": response}
