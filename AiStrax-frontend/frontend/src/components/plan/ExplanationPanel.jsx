import Card from '../ui/Card'

export default function ExplanationPanel({
                                             explanation
                                         }) {
    return (
        <Card className="p-6">
            <h3 className="mb-4 text-xl font-semibold">
                AI Explanation
            </h3>

            <p className="leading-7 text-slate-300">
                {explanation}
            </p>
        </Card>
    )
}