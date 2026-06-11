import Button from '../ui/Button'

export default function InsightsModal({
                                          open,
                                          onClose
                                      }) {
    if (!open) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="max-h-[85vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        AiStraX Insights
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Planning intelligence, productivity principles and best
                        practices for successful execution.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
                        <h3 className="mb-4 text-xl font-semibold text-violet-300">
                            Planning Principles
                        </h3>

                        <p className="leading-8 text-slate-300">
                            Successful planning begins with clarity.
                            Users often focus on defining objectives,
                            but the most effective plans start by
                            identifying realistic milestones and
                            breaking complex goals into actionable steps.
                            Research in productivity and project
                            management consistently shows that smaller,
                            well-defined objectives improve execution,
                            reduce uncertainty and increase motivation.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                        <h3 className="mb-4 text-xl font-semibold text-cyan-300">
                            Productivity Strategies
                        </h3>

                        <p className="leading-8 text-slate-300">
                            Consistency outperforms intensity.
                            While highly intensive plans may initially
                            appear attractive, sustainable progress is
                            usually achieved through regular effort over
                            longer periods of time. Users who maintain
                            a balanced workload tend to report higher
                            completion rates and lower levels of burnout
                            than users following highly aggressive schedules.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <h3 className="mb-4 text-xl font-semibold">
                            Best Practices
                        </h3>

                        <div className="space-y-3 text-slate-300">
                            <p>
                                • Review plans regularly and adjust priorities.
                            </p>

                            <p>
                                • Focus on completing one milestone at a time.
                            </p>

                            <p>
                                • Avoid unrealistic deadlines.
                            </p>

                            <p>
                                • Prioritize progress over perfection.
                            </p>

                            <p>
                                • Use detailed task breakdowns for large objectives.
                            </p>

                            <p>
                                • Track completed milestones to maintain motivation.
                            </p>

                            <p>
                                • Keep plans flexible enough to adapt to change.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                        <h3 className="mb-4 text-xl font-semibold">
                            Execution Mindset
                        </h3>

                        <p className="leading-8 text-slate-300">
                            Planning is not about predicting the future.
                            The purpose of a plan is to provide structure,
                            clarity and direction while remaining flexible
                            enough to accommodate changing circumstances.
                            The most successful users treat plans as living
                            documents that evolve together with their objectives,
                            resources and priorities.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6">
                        <h3 className="mb-4 text-xl font-semibold text-emerald-300">
                            AiStraX Recommendation
                        </h3>

                        <p className="leading-8 text-slate-300">
                            For long-term goals, begin with a balanced
                            intensity level and gradually increase effort
                            as confidence, experience and progress grow.
                            This approach promotes sustainable execution
                            while reducing the risk of abandonment.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}