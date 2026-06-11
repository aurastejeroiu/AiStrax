import { motion } from 'framer-motion'

import Card from '../ui/Card'

import logo_title from '../../assets/logo_title.png'

export default function DashboardHero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="relative overflow-hidden p-8 lg:p-12">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative z-10 max-w-5xl">
                    <div className="mb-8">
                        <img
                            src={logo_title}
                            alt="AiStraX"
                            className="
                                h-38
                                lg:h-40
                                w-auto
                                object-contain
                            "
                        />
                    </div>

                    <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                        Transform goals into
                        <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            actionable plans
                        </span>
                    </h2>

                    <p className="max-w-3xl text-lg leading-8 text-slate-400">
                        Generate intelligent personal, learning, corporate and
                        public plans powered by advanced artificial intelligence.
                        Create structured roadmaps, receive personalized
                        recommendations, generate detailed task breakdowns and
                        export professional execution plans designed to help you
                        achieve your objectives efficiently.
                    </p>
                </div>
            </Card>
        </motion.div>
    )
}