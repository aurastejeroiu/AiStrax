from app.models.plan import Plan
from app.services.ai_service import AIService
from app.services.parser_service import ParserService
from app.services.db_service import save_plan


class LearningPlanner:

    @staticmethod
    def generate_plan(
            describe_the_goal,
            deadline,
            learning_materials_links
    ):

        materials = "\n".join(learning_materials_links)

        prompt = f"""
        Create a detailed learning plan.

        Learning goal:
        {describe_the_goal}

        Deadline:
        {deadline}

        Learning materials:
        {materials}

        Generate:
        - study phases
        - learning milestones
        - progressive difficulty
        - practical exercises
        - organized schedule
        
        IMPORTANT:
        - The total sum of all task durations must NOT exceed the provided deadline
        - The learning roadmap must fit completely within the deadline
        - Task durations must be realistic
        """

        ai_result = AIService.generate_tasks(prompt)

        tasks = ParserService.parse_tasks(ai_result)

        plan = Plan("learning", tasks)

        save_plan(plan, describe_the_goal)

        return plan