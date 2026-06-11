from app.services.decision_service import apply_rules


def build_prompt(goal: str):
    tags = apply_rules(goal)

    rules_text = ""
    for tag in tags:
        rules_text += f"- {tag}\n"

    prompt = f"""
Create a personalized daily plan.

Goal: {goal}

Rules:
{rules_text}

Output format:
- Title
- Steps
- Tips
"""

    return prompt