import { useState } from 'react'
import toast from 'react-hot-toast'

import PublicPlanForm from '../components/forms/PublicPlanForm'
import PlanViewer from '../components/plan/PlanViewer'
import LoadingScreen from '../components/loading/LoadingScreen'

import { generatePublicPlan } from '../api/planningApi'

export default function PublicPlanPage() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)

    const handleGenerate = async (payload) => {
        try {
            setLoading(true)

            const response =
                await generatePublicPlan(
                    payload
                )

            setResult(response)

            toast.success(
                'Public plan generated'
            )
        } catch {
            toast.error(
                'Failed to generate public plan'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h1 className="mb-6 text-3xl font-bold">
                    Public Plan Generator
                </h1>

                <PublicPlanForm
                    loading={loading}
                    onSubmit={handleGenerate}
                />
            </div>

            {loading && <LoadingScreen />}

            {result?.plan && (
                <PlanViewer
                    plan={result.plan}
                />
            )}
        </div>
    )
}