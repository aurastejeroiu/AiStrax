import { NavLink } from 'react-router-dom'

import {
    LayoutDashboard,
    User,
    GraduationCap,
    Building2,
    Landmark,
    Sparkles
} from 'lucide-react'

import logo_title from '../../assets/logo_title.png'

const items = [
    {
        label: 'Dashboard',
        path: '/',
        icon: LayoutDashboard
    },
    {
        label: 'Personal',
        path: '/plans/personal',
        icon: User
    },
    {
        label: 'Learning',
        path: '/plans/learning',
        icon: GraduationCap
    },
    {
        label: 'Corporate',
        path: '/plans/corporate',
        icon: Building2
    },
    {
        label: 'Public',
        path: '/plans/public',
        icon: Landmark
    },
    {
        label: 'Recommendations',
        path: '/recommendations',
        icon: Sparkles
    }
]

export default function Sidebar() {
    return (
        <aside className="hidden w-72 border-r border-white/10 bg-white/[0.04] backdrop-blur-xl lg:block">
            <div className="px-7 py-8">
                <div className="flex justify-center">
                    <img
                        src={logo_title}
                        alt="AiStraX"
                        className="h-20 object-contain"
                    />
                </div>

                <p className="mt-2 text-sm text-slate-400">
                    Developed and Designed by Aura
                </p>
            </div>

            <nav className="space-y-2 px-4">
                {items.map((item) => {
                    const Icon = item.icon

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `group flex items-center gap-3 rounded-2xl px-4 py-4 transition-all duration-300 ${
                                    isActive
                                        ? 'border border-violet-500/20 bg-violet-500/15'
                                        : 'hover:bg-white/5'
                                }`
                            }
                        >
                            <Icon
                                size={20}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />

                            <span className="font-medium">
                                {item.label}
                            </span>
                        </NavLink>
                    )
                })}
            </nav>
        </aside>
    )
}