from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Khazana API"
    supabase_url: str = ""
    supabase_key: str = ""

    model_config = SettingsConfigDict(env_file=".env")
