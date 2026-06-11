import { useState } from 'react'
import toast from 'react-hot-toast'

import {
    modifyRecommendedPlan
} from '../api/recommendationApi'

export default function useModifyRecommendation() {
    const [loading, setLoading] =
        useState(false)

    const modify = async (
        planId,
        modificationRequest
    ) => {
        try {
            setLoading(true)

            const response =
                await modifyRecommendedPlan({
                    plan_id: Number(planId),
                    modification_request:
                    modificationRequest
                })

            console.log(
                'MODIFIED RESPONSE',
                response
            )

            toast.success(
                'Plan updated'
            )

            return response
        } catch {
            toast.error(
                'Modification failed'
            )

            return null
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        modify
    }
}