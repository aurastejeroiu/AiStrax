import { cn } from '../../utils/cn'

export default function Card({
                                 children,
                                 className = ''
                             }) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.06]',
                className
            )}
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.02] via-transparent to-transparent" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}