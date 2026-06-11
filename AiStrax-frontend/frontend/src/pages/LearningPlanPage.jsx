import { useState } from 'react'
import toast from 'react-hot-toast'

import LearningPlanForm from '../components/forms/LearningPlanForm'
import PlanViewer from '../components/plan/PlanViewer'
import ExplanationPanel from '../components/plan/ExplanationPanel'
import LoadingScreen from '../components/loading/LoadingScreen'

import { generateLearningPlan } from '../api/planningApi'

export default function LearningPlanPage() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)

    const handleGenerate = async (payload) => {
        try {
            setLoading(true)

            const response =
                await generateLearningPlan(payload)

            setResult(response)

            toast.success(
                'Learning plan generated'
            )
        } catch {
            toast.error(
                'Failed to generate learning plan'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h1 className="mb-6 text-3xl font-bold">
                    Learning Plan Generator
                </h1>

                <LearningPlanForm
                    loading={loading}
                    onSubmit={handleGenerate}
                />
            </div>

            {loading && <LoadingScreen />}

            {result?.plan && (
                <PlanViewer plan={result.plan} />
            )}

            {typeof result?.explanation ===
                'string' && (
                    <ExplanationPanel
                        explanation={
                            result.explanation
                        }
                    />
                )}
        </div>
    )
}