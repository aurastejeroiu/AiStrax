import { useState } from 'react'
import toast from 'react-hot-toast'

import CorporatePlanForm from '../components/forms/CorporatePlanForm'
import PlanViewer from '../components/plan/PlanViewer'
import LoadingScreen from '../components/loading/LoadingScreen'

import { generateCorporatePlan } from '../api/planningApi'

export default function CorporatePlanPage() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)

    const handleGenerate = async (payload) => {
        try {
            setLoading(true)

            const response =
                await generateCorporatePlan(
                    payload
                )

            setResult(response)

            toast.success(
                'Corporate plan generated'
            )
        } catch {
            toast.error(
                'Failed to generate corporate plan'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h1 className="mb-6 text-3xl font-bold">
                    Corporate Plan Generator
                </h1>

                <CorporatePlanForm
                    loading={loading}
                    onSubmit={handleGenerate}
                />
            </div>

            {loading && <LoadingScreen />}

            {result?.plan && (
                <PlanViewer plan={result.plan} />
            )}
        </div>
    )
}