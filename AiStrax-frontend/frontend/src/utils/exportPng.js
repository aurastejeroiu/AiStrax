export function exportPlanPng(
    plan,
    taskBreakdowns = {}
) {
    function wrapText(
        ctx,
        text,
        maxWidth
    ) {
        const words =
            text.split(' ')

        const lines = []

        let currentLine = ''

        words.forEach(
            word => {
                const testLine =
                    currentLine
                        ? `${currentLine} ${word}`
                        : word

                if (
                    ctx.measureText(
                        testLine
                    ).width > maxWidth
                ) {
                    if (
                        currentLine
                    ) {
                        lines.push(
                            currentLine
                        )
                    }

                    currentLine =
                        word
                } else {
                    currentLine =
                        testLine
                }
            }
        )

        if (
            currentLine
        ) {
            lines.push(
                currentLine
            )
        }

        return lines
    }

    const breakdownCount =
        Object.values(
            taskBreakdowns
        ).reduce(
            (
                total,
                steps
            ) =>
                total +
                (
                    steps?.length || 0
                ),
            0
        )

    const canvas =
        document.createElement(
            'canvas'
        )

    canvas.width = 1600

    canvas.height =
        Math.max(
            1800,
            500 +
            plan.tasks.length * 180 +
            breakdownCount * 120
        )

    const ctx =
        canvas.getContext(
            '2d'
        )

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            canvas.width,
            canvas.height
        )

    gradient.addColorStop(
        0,
        '#020617'
    )

    gradient.addColorStop(
        0.5,
        '#0f172a'
    )

    gradient.addColorStop(
        1,
        '#1e1b4b'
    )

    ctx.fillStyle =
        gradient

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    )

    ctx.fillStyle =
        '#ffffff'

    ctx.font =
        'bold 56px Arial'

    ctx.fillText(
        'AI Planning System',
        70,
        90
    )

    ctx.fillStyle =
        '#94a3b8'

    ctx.font =
        '28px Arial'

    ctx.fillText(
        'Intelligent Planning Powered by AI',
        70,
        130
    )

    ctx.fillStyle =
        '#8b5cf6'

    ctx.fillRect(
        70,
        165,
        300,
        6
    )

    ctx.fillStyle =
        '#ffffff'

    ctx.font =
        'bold 42px Arial'

    ctx.fillText(
        `${plan.plan_type.toUpperCase()} PLAN`,
        70,
        235
    )

    ctx.fillStyle =
        '#64748b'

    ctx.font =
        '22px Arial'

    ctx.fillText(
        `Generated on ${new Date().toLocaleDateString()}`,
        70,
        270
    )

    let y = 340

    plan.tasks.forEach(
        (
            task,
            index
        ) => {
            const breakdown =
                taskBreakdowns?.[
                    index
                    ] || []

            ctx.fillStyle =
                'rgba(30,41,59,0.95)'

            ctx.beginPath()

            ctx.roundRect(
                50,
                y,
                1500,
                120,
                20
            )

            ctx.fill()

            ctx.fillStyle =
                '#8b5cf6'

            ctx.beginPath()

            ctx.arc(
                100,
                y + 60,
                28,
                0,
                Math.PI * 2
            )

            ctx.fill()

            ctx.fillStyle =
                '#ffffff'

            ctx.font =
                'bold 20px Arial'

            ctx.fillText(
                String(index + 1),
                93,
                y + 68
            )

            ctx.font =
                'bold 26px Arial'

            ctx.fillText(
                task.name,
                150,
                y + 45
            )

            let priorityLabel =
                'Low'

            let priorityColor =
                '#22c55e'

            if (
                task.priority === 1
            ) {
                priorityLabel =
                    'High'

                priorityColor =
                    '#ef4444'
            }

            if (
                task.priority === 2
            ) {
                priorityLabel =
                    'Medium'

                priorityColor =
                    '#f59e0b'
            }

            ctx.fillStyle =
                priorityColor

            ctx.font =
                'bold 20px Arial'

            ctx.fillText(
                `Priority: ${priorityLabel}`,
                150,
                y + 85
            )

            if (
                task.assigned_to
            ) {
                ctx.fillStyle =
                    '#38bdf8'

                ctx.fillText(
                    `Assigned: ${task.assigned_to}`,
                    550,
                    y + 85
                )
            }

            y += 150

            if (
                breakdown.length > 0
            ) {
                ctx.fillStyle =
                    '#8b5cf6'

                ctx.font =
                    'bold 22px Arial'

                ctx.fillText(
                    'Detailed Breakdown',
                    80,
                    y
                )

                y += 40

                breakdown.forEach(
                    (
                        step,
                        stepIndex
                    ) => {
                        let globalDay = 1

                        for (
                            let i = 0;
                            i < index;
                            i++
                        ) {
                            if (
                                taskBreakdowns[i]
                            ) {
                                globalDay +=
                                    taskBreakdowns[i].length
                            }
                        }

                        const dayLabel =
                            `Day ${
                                globalDay +
                                stepIndex
                            }`

                        ctx.font =
                            '16px Arial'

                        const wrappedLines =
                            wrapText(
                                ctx,
                                step.title,
                                1100
                            )

                        const boxHeight =
                            Math.max(
                                55,
                                wrappedLines.length * 24 + 25
                            )

                        ctx.fillStyle =
                            'rgba(255,255,255,0.04)'

                        ctx.beginPath()

                        ctx.roundRect(
                            80,
                            y - 25,
                            1400,
                            boxHeight,
                            12
                        )

                        ctx.fill()

                        ctx.fillStyle =
                            '#ffffff'

                        ctx.font =
                            'bold 18px Arial'

                        ctx.fillText(
                            dayLabel,
                            110,
                            y + 5
                        )

                        ctx.fillStyle =
                            '#cbd5e1'

                        ctx.font =
                            '16px Arial'

                        wrappedLines.forEach(
                            (
                                line,
                                lineIndex
                            ) => {
                                ctx.fillText(
                                    line,
                                    260,
                                    y + 5 +
                                    lineIndex * 22
                                )
                            }
                        )

                        y +=
                            Math.max(
                                70,
                                wrappedLines.length * 24 + 20
                            )
                    }
                )

                y += 20
            }
        }
    )

    ctx.fillStyle =
        '#64748b'

    ctx.font =
        '20px Arial'

    ctx.fillText(
        'Generated by AI Planning System',
        70,
        canvas.height - 40
    )

    const link =
        document.createElement(
            'a'
        )

    link.download =
        `${plan.plan_type}-plan.png`

    link.href =
        canvas.toDataURL(
            'image/png'
        )

    link.click()
}