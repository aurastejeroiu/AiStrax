import apiClient from './axios'

export async function generatePersonalPlan(payload) {
    const { data } = await apiClient.post(
        '/generate-personal-plan',
        payload
    )

    return data
}

export async function generateLearningPlan(payload) {
    const { data } = await apiClient.post(
        '/generate-learning-plan',
        payload
    )

    return data
}

export async function generateCorporatePlan(payload) {
    const { data } = await apiClient.post(
        '/generate-corporate-plan',
        payload
    )

    return data
}

export async function generatePublicPlan(payload) {
    const { data } = await apiClient.post(
        '/generate-public-plan',
        payload
    )

    return data
}

export async function getGeneratedPlans() {
    const { data } = await apiClient.get(
        '/plans'
    )

    return data
}

export async function getTaskBreakdown(taskName) {
    const { data } = await apiClient.post('/generate-task-breakdown', { task_name: taskName })
    return data
}