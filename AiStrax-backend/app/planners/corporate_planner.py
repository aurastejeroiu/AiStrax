from app.models.plan import Plan
from app.services.ai_service import AIService
from app.services.parser_service import ParserService
from app.services.db_service import save_plan


class CorporatePlanner:

    @staticmethod
    def generate_plan(
            describe_the_goal,
            deadline,
            team_members
    ):

        team_description = ""

        for member in team_members:
            team_description += (
                f"Name: {member.name}, "
                f"Role: {member.role}, "
                f"Availability: {member.availability}\n"
            )

        prompt = f"""
        Create a detailed corporate planning strategy.

        Project goal:
        {describe_the_goal}

        Deadline:
        {deadline}

        Team members:
        {team_description}

        Generate:
        - project phases
        - distributed responsibilities
        - realistic workload
        - task dependencies
        - deadlines
        
        IMPORTANT:
        - The total sum of all task durations must NOT exceed the provided deadline
- The project must be completable before the deadline
- Distribute work realistically across team members
        """

        ai_result = AIService.generate_tasks(prompt)

        tasks = ParserService.parse_tasks(ai_result)

        for i, task in enumerate(tasks):
            task.assigned_to = (
                team_members[i % len(team_members)].name
            )

        plan = Plan("corporate", tasks)

        save_plan(plan, describe_the_goal)

        return plan