import toast from 'react-hot-toast'

import {
    ratePlan
} from '../api/recommendationApi'

export default function useRating() {
    const submitRating = async (
        planId,
        rating
    ) => {
        try {
            await ratePlan({
                plan_id: planId,
                rating
            })

            toast.success(
                'Rating submitted'
            )
        } catch {
            toast.error(
                'Rating failed'
            )
        }
    }

    return {
        submitRating
    }
}