import { cn } from '../../utils/cn'

export default function Badge({
                                  children,
                                  className = ''
                              }) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium',
                className
            )}
        >
      {children}
    </span>
    )
}