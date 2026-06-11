import Card from '../ui/Card'
import EmptyState from '../feedback/EmptyState'

export default function RecommendationsPreview() {
    return (
        <Card className="p-8">
            <EmptyState
                title="No recommendations yet"
                description="Generate a plan and explore AI-powered recommendations."
            />
        </Card>
    )
}