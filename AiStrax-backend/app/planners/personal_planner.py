from app.models.plan import Plan
from app.services.ai_service import AIService
from app.services.parser_service import ParserService
from app.services.db_service import save_plan


class PersonalPlanner:

    @staticmethod
    def generate_plan(
            describe_the_goal,
            deadline,
            implication_level
    ):

        prompt = f"""
        Create a detailed personal development plan.

        Goal:
        {describe_the_goal}

        Deadline:
        {deadline}

        User implication level:
        {implication_level}

        Implication intensity:

        1:
        Very Low
        
        2:
        Low
        
        3:
        Moderate
        
        4:
        Balanced
        
        5:
        High
        
        6:
        Very High
        
        7:
        Intensive

        Requirements:

        - respect the implication level
        - generate realistic actionable tasks
        - generate balanced workload
        - distribute workload according to implication level
        - create logical progression
        - create milestones
        - lower implication levels should generate lighter workloads
        - - higher implication levels should generate more intensive plans
        - implication level influences workload intensity, task complexity and task frequency
        
        IMPORTANT:
        - The total sum of all task durations must NOT exceed the provided deadline
        - Generate task durations that fit entirely within the deadline
        - The plan must be realistically achievable before the deadline
        - Use the implication level when deciding task durations and workload
    """

        ai_result = AIService.generate_tasks(
            prompt
        )

        tasks = ParserService.parse_tasks(
            ai_result
        )

        plan = Plan(
            "personal",
            tasks
        )

        save_plan(
            plan,
            describe_the_goal
        )

        return plan