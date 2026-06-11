import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import RatingStars from './RatingStars'

export default function RecommendationCard({ recommendation, onRate }) {
    return (
        <Link to={`/recommendations/${recommendation.id}`}>
            <Card className="p-6 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="mb-3 text-xl font-semibold">
                    {recommendation.title}
                </h3>

                <p className="mb-5 text-slate-400">
                    {recommendation.category}
                </p>

                <RatingStars
                    onRate={(rating) => onRate(recommendation.id, rating)}
                />
            </Card>
        </Link>
    )
}