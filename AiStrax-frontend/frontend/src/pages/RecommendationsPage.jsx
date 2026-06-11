import { useState } from 'react'

import RecommendationCard
    from '../components/recommendations/RecommendationCard'

import LoadingScreen
    from '../components/loading/LoadingScreen'

import EmptyState
    from '../components/feedback/EmptyState'

import useRecommendations
    from '../hooks/useRecommendations'

import useRating
    from '../hooks/useRating'

const filters = [
    'all',
    'personal',
    'learning',
    'corporate',
    'public'
]

export default function RecommendationsPage() {
    const {
        loading,
        recommendations,
        communityPlans
    } = useRecommendations()

    const {
        submitRating
    } = useRating()

    const [
        activeTab,
        setActiveTab
    ] = useState('recommended')

    const [
        activeFilter,
        setActiveFilter
    ] = useState('all')

    if (loading) {
        return <LoadingScreen />
    }

    const filteredRecommendations =
        activeFilter === 'all'
            ? recommendations
            : recommendations.filter(
                (item) =>
                    item.category?.toLowerCase() ===
                    activeFilter
            )

    const filteredCommunityPlans =
        activeFilter === 'all'
            ? communityPlans
            : communityPlans.filter(
                (item) =>
                    item.plan_type?.toLowerCase() ===
                    activeFilter
            )

    const difficultyStyles = {
        easy:
            'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
        medium:
            'bg-amber-500/15 text-amber-400 border border-amber-500/20',
        hard:
            'bg-rose-500/15 text-rose-400 border border-rose-500/20'
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    Recommendations
                </h1>

                <p className="mt-2 text-slate-400">
                    Explore recommended plans and discover what users like you choose.
                </p>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() =>
                        setActiveTab(
                            'recommended'
                        )
                    }
                    className={`rounded-2xl px-5 py-3 font-medium transition-all ${
                        activeTab === 'recommended'
                            ? 'bg-violet-500 text-white'
                            : 'bg-white/5 text-slate-300'
                    }`}
                >
                    Recommended Plans
                </button>

                <button
                    onClick={() =>
                        setActiveTab(
                            'community'
                        )
                    }
                    className={`rounded-2xl px-5 py-3 font-medium transition-all ${
                        activeTab === 'community'
                            ? 'bg-violet-500 text-white'
                            : 'bg-white/5 text-slate-300'
                    }`}
                >
                    Users Like You Choose
                </button>
            </div>

            <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() =>
                            setActiveFilter(
                                filter
                            )
                        }
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            activeFilter === filter
                                ? 'bg-violet-500 text-white'
                                : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                    >
                        {filter.charAt(0).toUpperCase() +
                            filter.slice(1)}
                    </button>
                ))}
            </div>

            {activeTab === 'recommended' ? (
                filteredRecommendations.length === 0 ? (
                    <EmptyState
                        icon="✨"
                        title="No recommendations available"
                        description="Generate your first AI plan and recommendations will appear here."
                    />
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredRecommendations.map(
                            (recommendation) => (
                                <RecommendationCard
                                    key={recommendation.id}
                                    recommendation={recommendation}
                                    onRate={submitRating}
                                />
                            )
                        )}
                    </div>
                )
            ) : (
                filteredCommunityPlans.length === 0 ? (
                    <EmptyState
                        icon="📋"
                        title="No community plans found"
                        description="Community generated plans will appear here."
                    />
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredCommunityPlans.map(
                            (plan) => (
                                <div
                                    key={plan.id}
                                    className="
                                        rounded-3xl
                                        border
                                        border-white/10
                                        bg-[#0b1020]
                                        p-6
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:border-violet-500/20
                                        hover:bg-[#10162b]
                                        hover:scale-[1.02]
                                    "
                                >
                                    <div className="mb-3 flex items-start justify-between gap-4">
                                        <h3 className="text-xl font-semibold">
                                            {plan.goal}
                                        </h3>

                                        {plan.difficulty && (
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                                                    difficultyStyles[
                                                        plan.difficulty.toLowerCase()
                                                        ] ||
                                                    'bg-slate-500/15 text-slate-300 border border-slate-500/20'
                                                }`}
                                            >
                                                {plan.difficulty}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mb-5 text-slate-400">
                                        {plan.plan_type.toLowerCase()}
                                    </p>

                                    <div className="space-y-2 text-slate-400">
                                        <p>
                                            {plan.duration} tasks
                                        </p>

                                        <p>
                                            {plan.estimated_duration}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )
            )}
        </div>
    )
}