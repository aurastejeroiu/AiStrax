from typing import List

from app.models.task import Task


class Plan:

    def __init__(
            self,
            plan_type: str,
            tasks: List[Task]
    ):

        self.plan_type = plan_type
        self.tasks = tasks

    def to_dict(self):

        return {
            "plan_type": self.plan_type,
            "tasks": [
                task.to_dict()
                for task in self.tasks
            ]
        }