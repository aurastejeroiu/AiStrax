import { cn } from '../../utils/cn'

export default function Textarea({
                                     className = '',
                                     ...props
                                 }) {
    return (
        <textarea
            {...props}
            className={cn(
                'min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-violet-500',
                className
            )}
        />
    )
}