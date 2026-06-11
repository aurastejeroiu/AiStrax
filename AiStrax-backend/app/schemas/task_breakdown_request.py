from pydantic import BaseModel


class TaskBreakdownRequest(BaseModel):
    task_name: str
    duration: int