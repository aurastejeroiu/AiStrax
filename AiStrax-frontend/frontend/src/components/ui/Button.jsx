import { cn } from '../../utils/cn'

export default function Button({
                                   children,
                                   className = '',
                                   variant = 'primary',
                                   type = 'button',
                                   disabled = false,
                                   onClick
                               }) {
    const variants = {
        primary:
            'bg-violet-600 hover:bg-violet-500 text-white',
        secondary:
            'bg-white/10 hover:bg-white/15 text-white border border-white/10',
        ghost:
            'hover:bg-white/10 text-white'
    }

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                'inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50',
                variants[variant],
                className
            )}
        >
            {children}
        </button>
    )
}