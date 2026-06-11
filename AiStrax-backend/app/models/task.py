class Task:

    def __init__(
            self,
            name: str,
            duration: int,
            priority: int,
            assigned_to: str = None
    ):

        self.name = name
        self.duration = duration
        self.priority = priority
        self.assigned_to = assigned_to

    def to_dict(self):

        return {
            "name": self.name,
            "duration": self.duration,
            "priority": self.priority,
            "assigned_to": self.assigned_to
        }