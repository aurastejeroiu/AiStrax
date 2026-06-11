import apiClient from './axios'

export async function getRecommendations() {
    const { data } = await apiClient.get(
        '/recommendations'
    )

    return data
}

export async function getCommunityPlans() {
    const { data } = await apiClient.get(
        '/plans'
    )

    return data
}

export async function getRecommendationDetails(
    planId
) {
    const { data } = await apiClient.get(
        `/recommendations/${planId}`
    )

    return data
}

export async function modifyRecommendedPlan(
    payload
) {
    const { data } = await apiClient.post(
        '/modify-recommended-plan',
        payload
    )

    return data
}

export async function ratePlan(payload) {
    const { data } = await apiClient.post(
        '/rate-plan',
        payload
    )

    return data
}

export async function getTaskBreakdown(
    taskName,
    duration
) {
    const { data } = await apiClient.post(
        '/task-breakdown',
        {
            task_name: taskName,
            duration
        }
    )

    return data
}