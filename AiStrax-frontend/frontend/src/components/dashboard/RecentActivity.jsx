import Card from '../ui/Card'
import EmptyState from '../feedback/EmptyState'

export default function RecentActivity() {
    return (
        <Card className="p-8">
            <EmptyState
                title="No recent activity"
                description="Your generated plans and interactions will appear here."
            />
        </Card>
    )
}