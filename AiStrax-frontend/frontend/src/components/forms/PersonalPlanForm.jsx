import { useState } from 'react'
import toast from 'react-hot-toast'

import Input from '../ui/Input'
import Button from '../ui/Button'

const implicationLabels = {
    1: 'Very Low',
    2: 'Low',
    3: 'Moderate',
    4: 'Balanced',
    5: 'High',
    6: 'Very High',
    7: 'Intensive'
}

const implicationColors = {
    1: 'text-blue-400',
    2: 'text-blue-500',
    3: 'text-indigo-400',
    4: 'text-violet-400',
    5: 'text-purple-400',
    6: 'text-fuchsia-400',
    7: 'text-pink-400'
}

export default function PersonalPlanForm({
                                             onSubmit,
                                             loading
                                         }) {
    const [form, setForm] = useState({
        describe_the_goal: '',
        deadline: '',
        implication_level: 4,
        format: 'json'
    })

    const [errors, setErrors] =
        useState({})

    const handleChange = (
        field,
        value
    ) => {
        setForm((prev) => ({
            ...prev,
            [field]: value
        }))

        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: ''
            }))
        }
    }

    const handleSubmit = (
        e
    ) => {
        e.preventDefault()

        const newErrors = {}

        if (
            !form.describe_the_goal.trim()
        ) {
            newErrors.describe_the_goal =
                'Goal is required'
        }

        if (
            !form.deadline.trim()
        ) {
            newErrors.deadline =
                'Deadline is required'
        }

        if (
            Object.keys(newErrors)
                .length > 0
        ) {
            setErrors(newErrors)

            toast.error(
                'Please complete all required fields'
            )

            return
        }

        setErrors({})

        onSubmit(form)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div>
                <label className="mb-2 block text-sm text-slate-400">
                    Goal
                </label>

                <Input
                    value={form.describe_the_goal}
                    onChange={(e) =>
                        handleChange(
                            'describe_the_goal',
                            e.target.value
                        )
                    }
                    placeholder="Describe your goal..."
                    className={
                        errors.describe_the_goal
                            ? 'border-red-500 focus:border-red-500'
                            : ''
                    }
                />

                {errors.describe_the_goal && (
                    <p className="mt-2 text-sm text-red-400">
                        {
                            errors.describe_the_goal
                        }
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm text-slate-400">
                    Deadline
                </label>

                <Input
                    value={form.deadline}
                    onChange={(e) =>
                        handleChange(
                            'deadline',
                            e.target.value
                        )
                    }
                    placeholder="Example: 30 days"
                    className={
                        errors.deadline
                            ? 'border-red-500 focus:border-red-500'
                            : ''
                    }
                />

                {errors.deadline && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.deadline}
                    </p>
                )}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                        Plan Intensity
                    </span>

                    <span
                        className={`font-semibold ${
                            implicationColors[
                                form.implication_level
                                ]
                        }`}
                    >
                        {
                            implicationLabels[
                                form.implication_level
                                ]
                        }
                    </span>
                </div>

                <input
                    type="range"
                    min="1"
                    max="7"
                    step="1"
                    value={
                        form.implication_level
                    }
                    onChange={(e) =>
                        handleChange(
                            'implication_level',
                            Number(
                                e.target.value
                            )
                        )
                    }
                    className="
                        h-2
                        w-full
                        cursor-pointer
                        appearance-none
                        rounded-lg
                        bg-white/10
                    "
                />

                <div className="mt-3 flex justify-between text-xs text-slate-500">
                    <span>
                        Very Low
                    </span>

                    <span>
                        Balanced
                    </span>

                    <span>
                        Intensive
                    </span>
                </div>
            </div>

            <Button
                type="submit"
                disabled={loading}
            >
                {loading
                    ? 'Generating...'
                    : 'Generate Plan'}
            </Button>
        </form>
    )
}