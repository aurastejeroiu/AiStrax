import { Star } from 'lucide-react'

export default function RatingStars({
                                        onRate
                                    }) {
    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()

                        onRate(star)
                    }}
                    className="transition hover:scale-110"
                >
                    <Star
                        size={20}
                    />
                </button>
            ))}
        </div>
    )
}