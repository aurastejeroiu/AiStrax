import PersonalPlanForm from '../components/forms/PersonalPlanForm'
import PlanViewer from '../components/plan/PlanViewer'
import ExplanationPanel from '../components/plan/ExplanationPanel'
import LoadingScreen from '../components/loading/LoadingScreen'

import usePlanGeneration from '../hooks/usePlanGeneration'

export default function PersonalPlanPage() {
    const {
        loading,
        result,
        generatePlan
    } = usePlanGeneration()

    return (
        <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h1 className="mb-6 text-3xl font-bold">
                    Personal Plan Generator
                </h1>

                <PersonalPlanForm
                    loading={loading}
                    onSubmit={generatePlan}
                />
            </div>

            {loading && <LoadingScreen />}

            {result?.plan && (
                <PlanViewer
                    plan={result.plan}
                />
            )}

            {typeof result?.explanation === 'string' && (
                <ExplanationPanel
                    explanation={result.explanation}
                />
            )}
        </div>
    )
}