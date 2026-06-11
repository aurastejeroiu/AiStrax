import { useState } from 'react'

import Card from '../ui/Card'
import Button from '../ui/Button'

import {
    exportPlanPdf
} from '../../utils/exportPdf'

import {
    exportPlanPng
} from '../../utils/exportPng'

import {
    getTaskBreakdown
} from '../../api/recommendationApi'

export default function PlanViewer({
                                       plan
                                   }) {
    const [expandedTasks,
        setExpandedTasks] = useState({})

    const [taskBreakdowns,
        setTaskBreakdowns] = useState({})

    const [loadingBreakdown,
        setLoadingBreakdown] = useState(null)

    const showAssignedTo =
        plan.plan_type === 'corporate' ||
        plan.plan_type === 'public'

    async function handleBreakdown(
        task,
        index
    ) {
        if (
            taskBreakdowns[index]
        ) {
            return
        }

        try {
            setLoadingBreakdown(
                index
            )

            const data =
                await getTaskBreakdown(
                    task.name,
                    task.duration
                )

            setTaskBreakdowns(
                previous => ({
                    ...previous,
                    [index]:
                    data.steps
                })
            )
        } finally {
            setLoadingBreakdown(
                null
            )
        }
    }

    function toggleTask(
        index
    ) {
        setExpandedTasks(
            previous => ({
                ...previous,
                [index]:
                    !previous[index]
            })
        )
    }

    function getGlobalDayNumber(
        taskIndex,
        stepIndex
    ) {
        let dayNumber = 1

        for (
            let i = 0;
            i < taskIndex;
            i++
        ) {
            if (
                taskBreakdowns[i]
            ) {
                dayNumber +=
                    taskBreakdowns[i].length
            }
        }

        return (
            dayNumber +
            stepIndex
        )
    }

    function getPriorityBadge(
        priority
    ) {
        if (
            priority === 'High'
        ) {
            return (
                <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-300">
                    High
                </span>
            )
        }

        if (
            priority === 'Medium'
        ) {
            return (
                <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-300">
                    Medium
                </span>
            )
        }

        return (
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                Low
            </span>
        )
    }

    return (
        <Card className="p-6">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-2xl font-bold capitalize">
                    {plan.plan_type}
                    {' '}
                    Plan
                </h2>

                <div className="flex gap-3">
                    <Button
                        variant="secondary"
                        onClick={() =>
                            exportPlanPdf(
                                plan,
                                taskBreakdowns
                            )
                        }
                    >
                        Export PDF
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() =>
                            exportPlanPng(
                                plan,
                                taskBreakdowns
                            )
                        }
                    >
                        Export PNG
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                {plan.tasks?.map(
                    (
                        task,
                        index
                    ) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        >
                            <button
                                className="flex w-full items-center justify-between p-5 text-left"
                                onClick={() =>
                                    toggleTask(
                                        index
                                    )
                                }
                            >
                                <div>
                                    <p className="text-sm text-slate-400">
                                        Task {index + 1}
                                    </p>

                                    <h3 className="font-semibold">
                                        {task.name}
                                    </h3>
                                </div>

                                <span className="text-2xl">
                                    {expandedTasks[index]
                                        ? '−'
                                        : '+'}
                                </span>
                            </button>

                            {expandedTasks[index] && (
                                <div className="space-y-4 border-t border-white/10 p-5">
                                    <div
                                        className={`grid gap-4 ${
                                            showAssignedTo
                                                ? 'md:grid-cols-2'
                                                : 'md:grid-cols-1'
                                        }`}
                                    >
                                        <div className="rounded-xl bg-white/5 p-4">
                                            <p className="mb-2 text-sm text-slate-400">
                                                Priority
                                            </p>

                                            <p className="font-semibold">
                                                {task.priority}
                                            </p>
                                        </div>

                                        {showAssignedTo && (
                                            <div className="rounded-xl bg-white/5 p-4">
                                                <p className="mb-2 text-sm text-slate-400">
                                                    Assigned To
                                                </p>

                                                <p className="font-semibold">
                                                    {task.assigned_to}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <Button
                                        variant="secondary"
                                        onClick={() =>
                                            handleBreakdown(
                                                task,
                                                index
                                            )
                                        }
                                    >
                                        {loadingBreakdown === index
                                            ? 'Generating...'
                                            : 'Generate Detailed Breakdown'}
                                    </Button>

                                    {taskBreakdowns[index] && (
                                        <div className="space-y-3">
                                            {taskBreakdowns[index].map(
                                                (
                                                    step,
                                                    stepIndex
                                                ) => (
                                                    <div
                                                        key={stepIndex}
                                                        className="rounded-2xl border border-violet-500/10 bg-white/5 p-4"
                                                    >
                                                        <div className="mb-2 flex items-center justify-between">
                                                            <p className="font-semibold">
                                                                Day {
                                                                getGlobalDayNumber(
                                                                    index,
                                                                    stepIndex
                                                                )
                                                            }
                                                            </p>

                                                            {getPriorityBadge(
                                                                step.priority
                                                            )}
                                                        </div>

                                                        <p className="text-slate-300">
                                                            {step.title}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </Card>
    )
}