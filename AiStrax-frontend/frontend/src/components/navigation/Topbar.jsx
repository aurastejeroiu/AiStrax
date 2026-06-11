import { useState } from 'react'

import {
    Brain,
    BarChart3,
    CircleHelp
} from 'lucide-react'

import InsightsModal from '../modals/InsightsModal'
import FaqModal from '../modals/FaqModal'
import StatisticsModal from '../modals/StatisticsModal'

export default function Topbar() {
    const [
        insightsOpen,
        setInsightsOpen
    ] = useState(false)

    const [
        faqOpen,
        setFaqOpen
    ] = useState(false)

    const [
        statisticsOpen,
        setStatisticsOpen
    ] = useState(false)

    return (
        <>
            <InsightsModal
                open={insightsOpen}
                onClose={() =>
                    setInsightsOpen(false)
                }
            />

            <FaqModal
                open={faqOpen}
                onClose={() =>
                    setFaqOpen(false)
                }
            />

            <StatisticsModal
                open={statisticsOpen}
                onClose={() =>
                    setStatisticsOpen(false)
                }
            />

            <header className="sticky top-0 z-30 border-b border-white/10 bg-black/20 backdrop-blur-xl">
                <div className="flex h-20 items-center justify-between px-6 lg:px-10">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Intelligent Planning Platform
                        </h2>

                        <p className="text-sm text-slate-400">
                            Where mathematical axioms inspire endless possibilities
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() =>
                                setInsightsOpen(true)
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-3
                                text-sm
                                font-medium
                                transition-all
                                hover:border-violet-500/30
                                hover:bg-white/10
                            "
                        >
                            <Brain size={18} />

                            <span>
                                Insights
                            </span>
                        </button>

                        <button
                            onClick={() =>
                                setStatisticsOpen(true)
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-3
                                text-sm
                                font-medium
                                transition-all
                                hover:border-cyan-500/30
                                hover:bg-white/10
                            "
                        >
                            <BarChart3 size={18} />

                            <span>
                                Statistics
                            </span>
                        </button>

                        <button
                            onClick={() =>
                                setFaqOpen(true)
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-3
                                text-sm
                                font-medium
                                transition-all
                                hover:border-violet-500/30
                                hover:bg-white/10
                            "
                        >
                            <CircleHelp size={18} />

                            <span>
                                FAQ
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}