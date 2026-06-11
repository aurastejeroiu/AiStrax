export default function ErrorState({
                                       title,
                                       description
                                   }) {
    return (
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-center">
            <div className="mb-4 text-5xl">
                ⚠️
            </div>

            <h3 className="mb-2 text-xl font-semibold text-red-300">
                {title}
            </h3>

            <p className="text-red-200/80">
                {description}
            </p>
        </div>
    )
}