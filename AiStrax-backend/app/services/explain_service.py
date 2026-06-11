from app.services.ai_service import AIService


def explain_plan(goal):

    prompt = f"""
    Explain why this planning strategy is suitable.

    Goal:
    {goal}

    Requirements:
    - explain the reasoning clearly
    - explain task organization
    - explain timeline logic
    - keep explanation concise
    """

    response = AIService.generate_tasks(
        prompt
    )

    return response