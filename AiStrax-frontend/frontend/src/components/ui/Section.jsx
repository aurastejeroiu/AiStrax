export default function Section({
                                    title,
                                    description,
                                    actions,
                                    children
                                }) {
    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h2 className="text-2xl font-bold">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-2 text-slate-400">
                            {description}
                        </p>
                    )}
                </div>

                {actions && (
                    <div>
                        {actions}
                    </div>
                )}
            </div>

            {children}
        </section>
    )
}