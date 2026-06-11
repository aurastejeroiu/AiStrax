import { useEffect, useState } from 'react'

import {
    getRecommendations,
    getCommunityPlans
} from '../api/recommendationApi'

export default function useRecommendations() {
    const [loading, setLoading] =
        useState(true)

    const [recommendations,
        setRecommendations] = useState([])

    const [communityPlans,
        setCommunityPlans] = useState([])

    useEffect(() => {
        loadRecommendations()
    }, [])

    const loadRecommendations =
        async () => {
            try {
                const [
                    recommendationsResponse,
                    communityResponse
                ] = await Promise.all([
                    getRecommendations(),
                    getCommunityPlans()
                ])

                setRecommendations(
                    recommendationsResponse
                )

                setCommunityPlans(
                    communityResponse
                )
            } finally {
                setLoading(false)
            }
        }

    return {
        loading,
        recommendations,
        communityPlans,
        reload: loadRecommendations
    }
}