from app.models.plan import Plan
from app.services.ai_service import AIService
from app.services.parser_service import ParserService
from app.services.db_service import save_plan


class PublicPlanner:

    @staticmethod
    def generate_plan(
            describe_the_goal,
            event_deadline,
            departments
    ):

        departments_text = ", ".join(departments)

        prompt = f"""
        Create a detailed public event planning strategy.

        Event goal:
        {describe_the_goal}

        Event deadline:
        {event_deadline}

        Departments:
        {departments_text}

        Generate:
        - department responsibilities
        - preparation phases
        - event timeline
        - coordination tasks
        - realistic scheduling
        
        IMPORTANT:
        - The total sum of all task durations must NOT exceed the event deadline
        - All preparation activities must fit within the deadline
        - Task durations must be realistic across departments
        """

        ai_result = AIService.generate_tasks(prompt)

        tasks = ParserService.parse_tasks(ai_result)

        for i, task in enumerate(tasks):
            task.assigned_to = (
                departments[i % len(departments)]
            )

        plan = Plan("public", tasks)

        save_plan(plan, describe_the_goal)

        return plan