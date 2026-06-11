from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    ForeignKey
)

from app.core.database import Base


class PlanDB(Base):
    __tablename__ = "plans"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    plan_type = Column(String)

    goal = Column(String)

    duration = Column(Integer)

    content = Column(String)

    difficulty = Column(String)

    estimated_duration = Column(String)

    average_rating = Column(
        Float,
        default=0
    )

    ratings_count = Column(
        Integer,
        default=0
    )


class UserDB(Base):
    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(String)


class RatingDB(Base):
    __tablename__ = "ratings"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    plan_id = Column(
        Integer,
        ForeignKey("plans.id")
    )

    rating = Column(Float)