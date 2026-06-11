from app.models.task import Task


class ParserService:

    @staticmethod
    def parse_tasks(data):

        tasks = []

        if "tasks" in data:
            data = data["tasks"]

        for item in data:

            task = Task(
                name=item.get("name"),
                duration=item.get("duration", 1),
                priority=item.get("priority", 1),
                assigned_to=item.get("assigned_to")
            )

            tasks.append(task)

        return tasks