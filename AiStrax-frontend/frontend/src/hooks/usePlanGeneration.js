import { useState } from 'react'
import toast from 'react-hot-toast'

import { generatePersonalPlan } from '../api/planningApi'

export default function usePlanGeneration() {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)

    const generatePlan = async (payload) => {
        try {
            setLoading(true)

            const response = await generatePersonalPlan(payload)

            setResult(response)

            toast.success('Plan generated successfully')

            return response
        } catch (error) {
            toast.error('Failed to generate plan')
            throw error
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        result,
        generatePlan
    }
}