from fastapi import APIRouter
from fastapi.responses import FileResponse

from app.schemas.personal_request import PersonalPlanRequest
from app.schemas.learning_request import LearningPlanRequest
from app.schemas.corporate_request import CorporatePlanRequest
from app.schemas.public_request import PublicPlanRequest
from app.schemas.modify_plan_request import ModifyPlanRequest
from app.schemas.rate_plan_request import RatePlanRequest

from app.planners.personal_planner import PersonalPlanner
from app.planners.learning_planner import LearningPlanner
from app.planners.corporate_planner import CorporatePlanner
from app.planners.public_planner import PublicPlanner

from app.services.export_service import export_plan

from app.services.recommendation_service import (
    get_similar_plans,
    get_recommended_plans,
    get_plan_by_id,
    build_plan_modification_prompt,
    add_rating
)

from app.services.db_service import (
    save_plan,
    get_all_plans
)


from app.services.explain_service import explain_plan
from app.services.ai_service import AIService
from app.services.parser_service import ParserService

from app.models.plan import Plan

from app.schemas.task_breakdown_request import (
    TaskBreakdownRequest
)

router = APIRouter()


@router.get("/")
def root():
    return {
        "message": "AI Planning System running"
    }


@router.get("/recommendations")
def recommendations():
    return get_recommended_plans()


@router.get("/recommendations/{plan_id}")
def recommendation_details(plan_id: int):

    plan = get_plan_by_id(plan_id)

    if not plan:
        return {
            "message": "Plan not found"
        }

    return plan


@router.post("/modify-recommended-plan")
def modify_recommended_plan(
        request: ModifyPlanRequest
):

    existing_plan = get_plan_by_id(
        request.plan_id
    )

    if not existing_plan:
        return {
            "message": "Plan not found"
        }

    prompt = build_plan_modification_prompt(
        existing_plan,
        request.modification_request
    )

    ai_result = AIService.generate_tasks(
        prompt
    )

    tasks = ParserService.parse_tasks(
        ai_result
    )

    updated_plan = Plan(
        existing_plan["category"],
        tasks
    )

    save_plan(
        updated_plan,
        goal=existing_plan["title"],
        difficulty=existing_plan["difficulty"],
        estimated_duration=existing_plan["estimated_duration"]
    )

    return {
        "original_plan": existing_plan,
        "modified_plan": updated_plan.to_dict()
    }


@router.post("/rate-plan")
def rate_plan(
        request: RatePlanRequest
):

    updated_plan = add_rating(
        request.plan_id,
        request.rating
    )

    if not updated_plan:
        return {
            "message": "Plan not found"
        }

    return {
        "message": "Rating added successfully",
        "updated_plan": updated_plan
    }


@router.post("/generate-personal-plan")
def generate_personal_plan(
        request: PersonalPlanRequest
):

    plan = PersonalPlanner.generate_plan(
        request.describe_the_goal,
        request.deadline,
        request.implication_level
    )

    save_plan(
        plan,
        goal=request.describe_the_goal,
        difficulty="medium",
        estimated_duration=request.deadline
    )

    recommendations = get_similar_plans(
        request.describe_the_goal
    )

    explanation = explain_plan(
        request.describe_the_goal
    )

    if (
            request.format == "pdf"
            or request.format == "image"
    ):
        file_path = export_plan(
            plan,
            request.format
        )

        return FileResponse(file_path)

    return {
        "plan": plan.to_dict(),
        "recommendations": recommendations,
        "explanation": explanation
    }


@router.post("/generate-learning-plan")
def generate_learning_plan(
        request: LearningPlanRequest
):

    plan = LearningPlanner.generate_plan(
        request.describe_the_goal,
        request.deadline,
        request.learning_materials_links
    )

    save_plan(
        plan,
        goal=request.describe_the_goal,
        difficulty="medium",
        estimated_duration=request.deadline
    )

    recommendations = get_similar_plans(
        request.describe_the_goal
    )

    explanation = explain_plan(
        request.describe_the_goal
    )

    if (
            request.format == "pdf"
            or request.format == "image"
    ):
        file_path = export_plan(
            plan,
            request.format
        )

        return FileResponse(file_path)

    return {
        "plan": plan.to_dict(),
        "recommendations": recommendations,
        "explanation": explanation
    }


@router.post("/generate-corporate-plan")
def generate_corporate_plan(
        request: CorporatePlanRequest
):

    plan = CorporatePlanner.generate_plan(
        request.describe_the_goal,
        request.deadline,
        request.team_members
    )

    save_plan(
        plan,
        goal=request.describe_the_goal,
        difficulty="hard",
        estimated_duration=request.deadline
    )

    recommendations = get_similar_plans(
        request.describe_the_goal
    )

    explanation = explain_plan(
        request.describe_the_goal
    )

    if (
            request.format == "pdf"
            or request.format == "image"
    ):
        file_path = export_plan(
            plan,
            request.format
        )

        return FileResponse(file_path)

    return {
        "plan": plan.to_dict(),
        "recommendations": recommendations,
        "explanation": explanation
    }


@router.post("/generate-public-plan")
def generate_public_plan(
        request: PublicPlanRequest
):

    plan = PublicPlanner.generate_plan(
        request.describe_the_goal,
        request.event_deadline,
        request.departments
    )

    save_plan(
        plan,
        goal=request.describe_the_goal,
        difficulty="medium",
        estimated_duration=request.event_deadline
    )

    recommendations = get_similar_plans(
        request.describe_the_goal
    )

    explanation = explain_plan(
        request.describe_the_goal
    )

    if (
            request.format == "pdf"
            or request.format == "image"
    ):
        file_path = export_plan(
            plan,
            request.format
        )

        return FileResponse(file_path)

    return {
        "plan": plan.to_dict(),
        "recommendations": recommendations,
        "explanation": explanation
    }

@router.get("/plans")
def get_saved_plans():

    plans = get_all_plans()

    return [
        {
            "id": plan.id,
            "plan_type": plan.plan_type,
            "goal": plan.goal,
            "duration": plan.duration,
            "difficulty": plan.difficulty,
            "estimated_duration": plan.estimated_duration,
            "average_rating": plan.average_rating,
            "ratings_count": plan.ratings_count
        }
        for plan in plans
    ]

@router.post("/task-breakdown")
def generate_task_breakdown(
        request: TaskBreakdownRequest
):

    breakdown = (
        AIService.generate_task_breakdown(
            request.task_name,
            request.duration
        )
    )

    return breakdown