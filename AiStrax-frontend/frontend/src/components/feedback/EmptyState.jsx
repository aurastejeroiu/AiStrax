export default function EmptyState({
                                       title,
                                       description,
                                       icon = '✨'
                                   }) {
    return (
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 text-center">
            <div className="mb-4 text-5xl">
                {icon}
            </div>

            <h3 className="mb-3 text-2xl font-semibold">
                {title}
            </h3>

            <p className="mx-auto max-w-md text-slate-400">
                {description}
            </p>
        </div>
    )
}