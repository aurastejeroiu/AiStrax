from app.core.database import SessionLocal

from app.models.db_models import (
    PlanDB,
    RatingDB
)

import json


def save_plan(
        plan,
        goal="",
        difficulty="medium",
        estimated_duration=""
):

    db = SessionLocal()

    content = []

    for task in plan.tasks:

        content.append(
            task.to_dict()
        )

    plan_db = PlanDB(
        plan_type=plan.plan_type,
        goal=goal,
        duration=len(plan.tasks),
        content=json.dumps(content),
        difficulty=difficulty,
        estimated_duration=(
            estimated_duration
        ),
        average_rating=0,
        ratings_count=0
    )

    db.add(plan_db)

    db.commit()

    db.refresh(plan_db)

    db.close()

    return plan_db


def get_all_plans():

    db = SessionLocal()

    plans = db.query(PlanDB).all()

    db.close()

    return plans


def get_plan_by_id(plan_id):

    db = SessionLocal()

    plan = (
        db.query(PlanDB)
        .filter(PlanDB.id == plan_id)
        .first()
    )

    db.close()

    return plan


def add_rating(
        plan_id,
        rating
):

    db = SessionLocal()

    plan = (
        db.query(PlanDB)
        .filter(PlanDB.id == plan_id)
        .first()
    )

    if not plan:
        db.close()
        return None

    updated_average = (
        (
            plan.average_rating
            * plan.ratings_count
        )
        + rating
    ) / (plan.ratings_count + 1)

    plan.average_rating = round(
        updated_average,
        2
    )

    plan.ratings_count += 1

    rating_db = RatingDB(
        user_id=1,
        plan_id=plan.id,
        rating=rating
    )

    db.add(rating_db)

    db.commit()

    db.refresh(plan)

    db.close()

    return plan