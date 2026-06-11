from openai import OpenAI
from dotenv import load_dotenv
import os
import json

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


class AIService:

    @staticmethod
    def generate_tasks(prompt: str):

        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "system",
                    "content": """
                    You are an intelligent planning assistant.

                    Return ONLY valid JSON.

                    Format:
                    {
                      "tasks": [
                        {
                          "name": "Task name",
                          "duration": 1,
                          "priority": 1,
                          "assigned_to": null
                        }
                      ]
                    }

                    Rules:

                    - Every task must contain a duration
                    - Duration must be an integer number of days
                    - Priorities:
                      1 = High
                      2 = Medium
                      3 = Low
                    - Tasks must be realistic
                    - Tasks must follow a logical progression
                    - Avoid duplicate tasks
                    """
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            response_format={
                "type": "json_object"
            }
        )

        content = response.choices[0].message.content

        return json.loads(content)

    @staticmethod
    def generate_task_breakdown(
            task_name: str,
            duration: int
    ):

        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {
                    "role": "system",
                    "content": """
                    You are an expert planning assistant.

                    Return ONLY valid JSON.

                    Format:

                    {
                      "steps": [
                        {
                          "step": "Day 1",
                          "title": "Step title",
                          "priority": "High"
                        }
                      ]
                    }
                    """
                },
                {
                    "role": "user",
                    "content": f"""
                    Create a detailed execution breakdown for:

                    {task_name}

                    Rules:

                    - Generate EXACTLY {duration} days
                    - Use Day 1, Day 2, Day 3 structure
                    - One concrete action per day
                    - Actions must follow a logical progression
                    - Priorities must be High, Medium or Low
                    - Focus on practical execution
                    - Avoid generic descriptions
                    - Return JSON only
                    """
                }
            ],
            response_format={
                "type": "json_object"
            }
        )

        content = response.choices[0].message.content

        return json.loads(content)