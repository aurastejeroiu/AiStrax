import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Dashboard from '../pages/Dashboard'
import PersonalPlanPage from '../pages/PersonalPlanPage'
import LearningPlanPage from '../pages/LearningPlanPage'
import CorporatePlanPage from '../pages/CorporatePlanPage'
import PublicPlanPage from '../pages/PublicPlanPage'
import RecommendationsPage from '../pages/RecommendationsPage'
import RecommendationDetailsPage from '../pages/RecommendationDetailsPage'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/plans/personal"
                        element={<PersonalPlanPage />}
                    />

                    <Route
                        path="/plans/learning"
                        element={<LearningPlanPage />}
                    />

                    <Route
                        path="/plans/corporate"
                        element={<CorporatePlanPage />}
                    />

                    <Route
                        path="/plans/public"
                        element={<PublicPlanPage />}
                    />

                    <Route
                        path="/recommendations"
                        element={<RecommendationsPage />}
                    />

                    <Route
                        path="/recommendations/:id"
                        element={
                            <RecommendationDetailsPage />
                        }
                    />
                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}