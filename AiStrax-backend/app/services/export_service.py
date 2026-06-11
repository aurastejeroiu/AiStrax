from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import (
    getSampleStyleSheet
)

from PIL import (
    Image,
    ImageDraw
)

import uuid


def export_plan(
        plan,
        export_format
):

    if export_format == "pdf":

        file_name = (
            f"plan_{uuid.uuid4()}.pdf"
        )

        doc = SimpleDocTemplate(
            file_name
        )

        styles = getSampleStyleSheet()

        elements = []

        title = Paragraph(
            f"Plan Type: {plan.plan_type}",
            styles["Heading1"]
        )

        elements.append(title)

        elements.append(Spacer(1, 12))

        for task in plan.tasks:

            text = (
                f"Task: {task.name}"
                f" | Duration: {task.duration}"
                f" | Priority: {task.priority}"
            )

            if task.assigned_to:
                text += (
                    f" | Assigned To: "
                    f"{task.assigned_to}"
                )

            paragraph = Paragraph(
                text,
                styles["BodyText"]
            )

            elements.append(paragraph)

            elements.append(
                Spacer(1, 8)
            )

        doc.build(elements)

        return file_name

    elif export_format == "image":

        file_name = (
            f"plan_{uuid.uuid4()}.png"
        )

        image = Image.new(
            "RGB",
            (1200, 1000),
            color="white"
        )

        draw = ImageDraw.Draw(image)

        y = 20

        draw.text(
            (20, y),
            f"Plan Type: {plan.plan_type}",
            fill="black"
        )

        y += 40

        for task in plan.tasks:

            text = (
                f"- {task.name}"
                f" | Duration: {task.duration}"
                f" | Priority: {task.priority}"
            )

            if task.assigned_to:
                text += (
                    f" | Assigned To: "
                    f"{task.assigned_to}"
                )

            draw.text(
                (20, y),
                text,
                fill="black"
            )

            y += 40

        image.save(file_name)

        return file_name