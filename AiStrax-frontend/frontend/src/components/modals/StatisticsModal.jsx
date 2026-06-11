import Button from '../ui/Button'

const participantDistribution = [
    { label: 'Software Engineering', value: 25 },
    { label: 'Students', value: 20 },
    { label: 'Project Management', value: 15 },
    { label: 'Banking & Finance', value: 12 },
    { label: 'Insurance', value: 10 },
    { label: 'Entrepreneurship', value: 8 },
    { label: 'NGOs & Associations', value: 6 },
    { label: 'Research & Academia', value: 4 }
]

const planningChallenges = [
    { label: 'Task Prioritization', value: 31 },
    { label: 'Time Management', value: 26 },
    { label: 'Goal Definition', value: 18 },
    { label: 'Project Coordination', value: 14 },
    { label: 'Progress Tracking', value: 11 }
]

const aiInterest = [
    { label: 'Very Interested', value: 48 },
    { label: 'Interested', value: 32 },
    { label: 'Neutral', value: 14 },
    { label: 'Not Interested', value: 6 }
]

const planningScenarios = [
    { label: 'Learning & Upskilling', value: 28 },
    { label: 'Career Development', value: 22 },
    { label: 'Project Planning', value: 18 },
    { label: 'Personal Productivity', value: 15 },
    { label: 'Event Management', value: 10 },
    { label: 'Business Development', value: 7 }
]

const industries = [
    {
        name: 'Education',
        potential: 'High Potential'
    },
    {
        name: 'Technology',
        potential: 'High Potential'
    },
    {
        name: 'Consulting',
        potential: 'High Potential'
    },
    {
        name: 'Banking',
        potential: 'Moderate Potential'
    },
    {
        name: 'Insurance',
        potential: 'Moderate Potential'
    },
    {
        name: 'Public Sector',
        potential: 'Emerging Potential'
    },
    {
        name: 'NGOs',
        potential: 'Emerging Potential'
    },
    {
        name: 'Research',
        potential: 'Emerging Potential'
    }
]

const benefits = [
    'Improved Planning Clarity',
    'Reduced Planning Effort',
    'Better Goal Visibility',
    'Structured Execution',
    'Improved Coordination',
    'Higher Consistency',
    'Increased Productivity',
    'Enhanced Decision Support'
]

const futureDomains = [
    {
        title: 'Healthcare',
        description:
            'Treatment planning and patient workflow management.'
    },
    {
        title: 'Education',
        description:
            'Personalized learning roadmaps and academic planning.'
    },
    {
        title: 'Human Resources',
        description:
            'Employee development and career growth planning.'
    },
    {
        title: 'Construction',
        description:
            'Project scheduling and resource coordination.'
    },
    {
        title: 'Government',
        description:
            'Public programs and initiative planning.'
    },
    {
        title: 'Research Management',
        description:
            'Research project execution and milestone tracking.'
    },
    {
        title: 'Startup Incubation',
        description:
            'Product development and business roadmap generation.'
    },
    {
        title: 'Personal Finance',
        description:
            'Financial goal planning and execution support.'
    }
]

export default function StatisticsModal({
                                            open,
                                            onClose
                                        }) {
    if (!open) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        AiStraX Statistics
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Exploratory Market Analysis & Future Development Opportunities
                    </p>
                </div>

                <div className="mb-8 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8">
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold">
                            Exploratory Case Study
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Analysis conducted across multiple educational,
                            technical and business domains.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-slate-400">
                                Participants
                            </p>

                            <p className="mt-2 text-4xl font-bold text-violet-300">
                                150
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-slate-400">
                                Backgrounds
                            </p>

                            <p className="mt-2 text-4xl font-bold text-cyan-300">
                                8
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-slate-400">
                                Planning Scenarios
                            </p>

                            <p className="mt-2 text-4xl font-bold text-violet-300">
                                6
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-slate-400">
                                Future Domains
                            </p>

                            <p className="mt-2 text-4xl font-bold text-cyan-300">
                                8
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 leading-8 text-slate-300">
                        This exploratory case study involved 150 participants
                        from various educational, technical and business
                        backgrounds in order to identify potential application
                        areas, planning challenges and future adoption
                        opportunities for intelligent planning systems.
                    </p>
                </div>

                <div className="space-y-8">
                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            Participant Distribution
                        </h3>

                        <div className="space-y-4">
                            {participantDistribution.map((item) => (
                                <div key={item.label}>
                                    <div className="mb-2 flex justify-between">
                                        <span>
                                            {item.label}
                                        </span>

                                        <span className="text-violet-300">
                                            {item.value}%
                                        </span>
                                    </div>

                                    <div className="h-3 rounded-full bg-white/5">
                                        <div
                                            className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                                            style={{
                                                width: `${item.value * 3}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            Most Common Planning Challenges
                        </h3>

                        <div className="space-y-4">
                            {planningChallenges.map((item) => (
                                <div key={item.label}>
                                    <div className="mb-2 flex justify-between">
                                        <span>
                                            {item.label}
                                        </span>

                                        <span className="text-cyan-300">
                                            {item.value}%
                                        </span>
                                    </div>

                                    <div className="h-3 rounded-full bg-white/5">
                                        <div
                                            className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                                            style={{
                                                width: `${item.value * 3}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            Interest in AI-Assisted Planning
                        </h3>

                        <div className="space-y-4">
                            {aiInterest.map((item) => (
                                <div key={item.label}>
                                    <div className="mb-2 flex justify-between">
                                        <span>
                                            {item.label}
                                        </span>

                                        <span className="text-violet-300">
                                            {item.value}%
                                        </span>
                                    </div>

                                    <div className="h-3 rounded-full bg-white/5">
                                        <div
                                            className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                                            style={{
                                                width: `${item.value * 2}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            Most Relevant Planning Scenarios
                        </h3>

                        <div className="space-y-4">
                            {planningScenarios.map((item) => (
                                <div key={item.label}>
                                    <div className="mb-2 flex justify-between">
                                        <span>
                                            {item.label}
                                        </span>

                                        <span className="text-cyan-300">
                                            {item.value}%
                                        </span>
                                    </div>

                                    <div className="h-3 rounded-full bg-white/5">
                                        <div
                                            className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                                            style={{
                                                width: `${item.value * 3}%`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            Potential Industry Adoption
                        </h3>

                        <div className="grid gap-4 md:grid-cols-4">
                            {industries.map((industry) => (
                                <div
                                    key={industry.name}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                >
                                    <p className="font-medium">
                                        {industry.name}
                                    </p>

                                    <p className="mt-2 text-sm text-slate-400">
                                        {industry.potential}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            Expected Benefits
                        </h3>

                        <div className="grid gap-4 md:grid-cols-4">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="rounded-2xl border border-violet-500/10 bg-violet-500/5 p-5"
                                >
                                    <p className="font-medium">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            Future Application Domains
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">
                            {futureDomains.map((domain) => (
                                <div
                                    key={domain.title}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                                >
                                    <h4 className="mb-2 font-semibold text-violet-300">
                                        {domain.title}
                                    </h4>

                                    <p className="text-slate-400">
                                        {domain.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-5 text-2xl font-semibold">
                            AiStraX Development Roadmap
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
                                <h4 className="mb-4 text-lg font-semibold text-emerald-300">
                                    Current Platform Capabilities
                                </h4>

                                <div className="space-y-2">
                                    <p>✓ Intelligent Planning</p>
                                    <p>✓ Recommendations</p>
                                    <p>✓ Task Breakdown</p>
                                    <p>✓ PDF Export</p>
                                    <p>✓ PNG Export</p>
                                    <p>✓ Insights</p>
                                    <p>✓ FAQ</p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                                <h4 className="mb-4 text-lg font-semibold text-cyan-300">
                                    Future Development Roadmap
                                </h4>

                                <div className="space-y-2">
                                    <p>□ User Accounts</p>
                                    <p>□ Team Collaboration</p>
                                    <p>□ Calendar Integration</p>
                                    <p>□ Mobile Application</p>
                                    <p>□ Adaptive AI Planning</p>
                                    <p>□ Predictive Scheduling</p>
                                    <p>□ Cloud Synchronization</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8">
                        <h3 className="mb-4 text-2xl font-semibold">
                            Key Finding
                        </h3>

                        <p className="leading-8 text-slate-300">
                            The analysis suggests that intelligent planning
                            systems can provide value across multiple industries
                            where goal definition, task organization and
                            execution monitoring represent critical activities.

                            <br />
                            <br />

                            The strongest adoption potential was identified
                            within education, technology, project management
                            and organizational environments where structured
                            planning directly influences productivity and
                            execution efficiency.

                            <br />
                            <br />

                            AiStraX demonstrates how artificial intelligence
                            can support these processes through structured
                            planning, recommendation generation and adaptive
                            execution support.
                        </p>
                    </section>
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