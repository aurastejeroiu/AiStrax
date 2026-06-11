import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import {
    User,
    GraduationCap,
    Building2,
    Landmark
} from 'lucide-react'

import Card from '../ui/Card'

const actions = [
    {
        title: 'Personal Plan',
        description: 'Create personalized AI plans',
        icon: User,
        path: '/plans/personal'
    },
    {
        title: 'Learning Plan',
        description: 'Structured learning roadmaps',
        icon: GraduationCap,
        path: '/plans/learning'
    },
    {
        title: 'Corporate Plan',
        description: 'Business planning workflows',
        icon: Building2,
        path: '/plans/corporate'
    },
    {
        title: 'Public Plan',
        description: 'Public project organization',
        icon: Landmark,
        path: '/plans/public'
    }
]

export default function QuickActions() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {actions.map((action, index) => {
                const Icon = action.icon

                return (
                    <motion.div
                        key={action.title}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.08
                        }}
                    >
                        <Link to={action.path}>
                            <Card className="group h-full p-6">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 transition-all duration-300 group-hover:scale-110">
                                    <Icon size={24} />
                                </div>

                                <h3 className="mb-2 text-lg font-semibold">
                                    {action.title}
                                </h3>

                                <p className="text-sm text-slate-400">
                                    {action.description}
                                </p>
                            </Card>
                        </Link>
                    </motion.div>
                )
            })}
        </div>
    )
}