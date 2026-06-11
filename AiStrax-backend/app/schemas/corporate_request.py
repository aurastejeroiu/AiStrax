from pydantic import BaseModel
from typing import List


class TeamMember(BaseModel):
    name: str
    role: str
    availability: str


class CorporatePlanRequest(BaseModel):
    describe_the_goal: str
    deadline: str
    team_members: List[TeamMember]
    format: str = "json"