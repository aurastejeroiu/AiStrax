import { motion } from 'framer-motion'

import Card from '../ui/Card'

const stats = [
    {
        title: 'Personal Plans',
        value: 'AI',
        subtitle: 'Personal goal planning'
    },
    {
        title: 'Learning Plans',
        value: 'AI',
        subtitle: 'Learning roadmaps'
    },
    {
        title: 'Corporate Plans',
        value: 'AI',
        subtitle: 'Business planning'
    },
    {
        title: 'Recommendations',
        value: '∞',
        subtitle: 'Smart suggestions'
    }
]

export default function StatsCards() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                >
                    <Card className="group p-6">
                        <div className="mb-5 flex items-center justify-between">
                            <p className="text-sm text-slate-400">
                                {item.title}
                            </p>

                            <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,1)]" />
                        </div>

                        <h3 className="mb-2 text-5xl font-bold transition-all duration-300 group-hover:scale-105">
                            {item.value}
                        </h3>

                        <p className="text-sm text-slate-500">
                            {item.subtitle}
                        </p>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}