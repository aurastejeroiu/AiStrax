import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

import {
    Clock,
    Star,
    Layers,
    Wand2
} from 'lucide-react'

import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import LoadingScreen from '../components/loading/LoadingScreen'
import ModifyPlanModal from '../components/modals/ModifyPlanModal'
import PlanViewer from '../components/plan/PlanViewer'
import EmptyState from '../components/feedback/EmptyState'

import {
    getRecommendationDetails
} from '../api/recommendationApi'

import useModifyRecommendation from '../hooks/useModifyRecommendation'

export default function RecommendationDetailsPage() {
    const { id } = useParams()

    const [loading, setLoading] =
        useState(true)

    const [plan, setPlan] =
        useState(null)

    const [modifiedPlan,
        setModifiedPlan] = useState(null)

    const [isModifyOpen,
        setIsModifyOpen] = useState(false)

    const {
        loading: modifyLoading,
        modify
    } = useModifyRecommendation()

    const loadPlan = useCallback(async () => {
        try {
            setLoading(true)

            const response =
                await getRecommendationDetails(id)

            setPlan(response)
        } catch {
            toast.error(
                'Failed to load recommendation'
            )
        } finally {
            setLoading(false)
        }
    }, [id])

    useEffect(() => {
        loadPlan()
    }, [loadPlan])

    const handleModify = async (
        request
    ) => {
        const updated =
            await modify(
                id,
                request
            )

        if (
            updated?.modified_plan
        ) {
            setModifiedPlan(
                updated.modified_plan
            )

            setIsModifyOpen(false)

            toast.success(
                'Modified plan generated'
            )
        }
    }

    if (loading) {
        return <LoadingScreen />
    }

    if (!plan) {
        return (
            <EmptyState
                icon="⚠️"
                title="Recommendation not found"
                description="The requested recommendation does not exist or is no longer available."
            />
        )
    }

    const recommendationPlan = {
        plan_type:
            plan.category ||
            'recommendation',

        tasks:
            plan.tasks?.map(
                (
                    task
                ) => ({
                    name:
                    task.title,
                    duration:
                        '-',
                    priority:
                        'Medium'
                })
            ) || []
    }

    return (
        <>
            <ModifyPlanModal
                open={isModifyOpen}
                loading={modifyLoading}
                onClose={() =>
                    setIsModifyOpen(false)
                }
                onSubmit={handleModify}
            />

            <div className="space-y-8">
                <Card className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                            {plan.category}
                        </span>

                        <Button
                            onClick={() =>
                                setIsModifyOpen(true)
                            }
                        >
                            <Wand2 size={18} />
                            Modify Plan
                        </Button>
                    </div>

                    <h1 className="mb-4 text-4xl font-bold">
                        {plan.title}
                    </h1>

                    <p className="mb-8 max-w-4xl text-lg text-slate-400">
                        {plan.description}
                    </p>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <Clock
                                size={20}
                                className="mb-3"
                            />

                            <p className="text-sm text-slate-400">
                                Duration
                            </p>

                            <p className="font-semibold">
                                {plan.estimated_duration}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <Layers
                                size={20}
                                className="mb-3"
                            />

                            <p className="text-sm text-slate-400">
                                Difficulty
                            </p>

                            <p className="font-semibold capitalize">
                                {plan.difficulty}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <Star
                                size={20}
                                className="mb-3"
                            />

                            <p className="text-sm text-slate-400">
                                Rating
                            </p>

                            <p className="font-semibold">
                                {plan.rating}
                                {' '}
                                ({plan.ratings_count} votes)
                            </p>
                        </div>
                    </div>
                </Card>

                <PlanViewer
                    plan={
                        recommendationPlan
                    }
                />

                {modifiedPlan && (
                    <div className="space-y-6">
                        <Card className="border-violet-500/30 p-6">
                            <h2 className="text-3xl font-bold text-violet-300">
                                AI Generated Execution Plan
                            </h2>

                            <p className="mt-2 text-slate-400">
                                Detailed execution plan generated from your modification request.
                            </p>
                        </Card>

                        <PlanViewer
                            plan={modifiedPlan}
                        />
                    </div>
                )}
            </div>
        </>
    )
}