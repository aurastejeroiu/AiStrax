RECOMMENDED_PLANS = [
    {
        "id": 1,
        "category": "learning",
        "title": "Learn Python in 3 Months",
        "description": "Structured beginner to intermediate Python roadmap.",
        "difficulty": "medium",
        "estimated_duration": "3 months",
        "rating": 4.8,
        "ratings_count": 10,
        "tasks": [
            {
                "title": "Learn Python basics",
                "assigned_to": None
            },
            {
                "title": "Practice exercises",
                "assigned_to": None
            },
            {
                "title": "Build a small project",
                "assigned_to": None
            },
            {
                "title": "Learn APIs and JSON",
                "assigned_to": None
            }
        ]
    },

    {
        "id": 2,
        "category": "corporate",
        "title": "Product Launch Strategy",
        "description": "Corporate launch planning workflow.",
        "difficulty": "hard",
        "estimated_duration": "2 months",
        "rating": 4.6,
        "ratings_count": 8,
        "tasks": [
            {
                "title": "Define launch objectives",
                "assigned_to": "Project Manager"
            },
            {
                "title": "Prepare marketing campaign",
                "assigned_to": "Marketing"
            },
            {
                "title": "Create launch materials",
                "assigned_to": "Design"
            },
            {
                "title": "Organize launch event",
                "assigned_to": "Operations"
            }
        ]
    },

    {
        "id": 3,
        "category": "public",
        "title": "Student Event Organization",
        "description": "Public event planning for universities.",
        "difficulty": "medium",
        "estimated_duration": "1 month",
        "rating": 4.9,
        "ratings_count": 15,
        "tasks": [
            {
                "title": "Find event location",
                "assigned_to": "Logistics"
            },
            {
                "title": "Create promotion campaign",
                "assigned_to": "Marketing"
            },
            {
                "title": "Manage sponsorship outreach",
                "assigned_to": "Sponsorship"
            },
            {
                "title": "Coordinate volunteers",
                "assigned_to": "HR"
            }
        ]
    }
]


def get_recommended_plans():
    return RECOMMENDED_PLANS


def get_plan_by_id(plan_id: int):

    for plan in RECOMMENDED_PLANS:

        if plan["id"] == plan_id:
            return plan

    return None


def get_similar_plans(goal: str):

    goal = goal.lower()

    matching = []

    for plan in RECOMMENDED_PLANS:

        if any(
            word in goal
            for word in plan["title"].lower().split()
        ):
            matching.append(plan)

    if not matching:
        return RECOMMENDED_PLANS[:2]

    return matching


def build_plan_modification_prompt(
        existing_plan,
        modification_request
):

    tasks_text = ""

    for task in existing_plan["tasks"]:

        assigned = task.get("assigned_to")

        if assigned:
            tasks_text += (
                f"- {task['title']} "
                f"(Assigned to: {assigned})\n"
            )
        else:
            tasks_text += (
                f"- {task['title']}\n"
            )

    prompt = f"""
    You are an intelligent planning assistant.

    Existing plan:
    {existing_plan['title']}

    Description:
    {existing_plan['description']}

    Existing tasks:
    {tasks_text}

    User requested modifications:
    {modification_request}

    Generate:
    - updated tasks
    - adapted structure
    - realistic planning
    - keep useful existing content
    """

    return prompt


def add_rating(plan_id: int, new_rating: float):

    plan = get_plan_by_id(plan_id)

    if not plan:
        return None

    current_rating = plan["rating"]
    ratings_count = plan["ratings_count"]

    updated_rating = (
        (current_rating * ratings_count)
        + new_rating
    ) / (ratings_count + 1)

    plan["rating"] = round(updated_rating, 2)
    plan["ratings_count"] += 1

    return plan