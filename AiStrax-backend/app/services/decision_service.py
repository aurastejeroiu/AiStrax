def apply_rules(goal: str):
    tags = []

    goal_lower = goal.lower()

    if "lose weight" in goal_lower or "fitness" in goal_lower:
        tags.append("physical")

    if "beginner" in goal_lower:
        tags.append("easy")

    if "quick" in goal_lower or "short" in goal_lower:
        tags.append("short")

    return tags