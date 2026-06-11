import { useState } from 'react'
import toast from 'react-hot-toast'

import Input from '../ui/Input'
import Button from '../ui/Button'

export default function PublicPlanForm({
                                           loading,
                                           onSubmit
                                       }) {
    const [form, setForm] = useState({
        describe_the_goal: '',
        event_deadline: '',
        departments: [],
        format: 'json'
    })

    const [errors,
        setErrors] = useState({})

    const [department,
        setDepartment] =
        useState('')

    const addDepartment = () => {
        if (
            !department.trim()
        ) {
            toast.error(
                'Department name is required'
            )

            return
        }

        setForm({
            ...form,
            departments: [
                ...form.departments,
                department
            ]
        })

        if (
            errors.departments
        ) {
            setErrors(
                previous => ({
                    ...previous,
                    departments: ''
                })
            )
        }

        setDepartment('')
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
                'Event goal is required'
        }

        if (
            !form.event_deadline.trim()
        ) {
            newErrors.event_deadline =
                'Event deadline is required'
        }

        if (
            form.departments.length === 0
        ) {
            newErrors.departments =
                'At least one department is required'
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
                    Event Goal
                </label>

                <Input
                    placeholder="Example: Organize a student hackathon"
                    value={form.describe_the_goal}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            describe_the_goal:
                            e.target.value
                        })

                        if (
                            errors.describe_the_goal
                        ) {
                            setErrors(
                                previous => ({
                                    ...previous,
                                    describe_the_goal:
                                        ''
                                })
                            )
                        }
                    }}
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
                    Event Deadline
                </label>

                <Input
                    placeholder="Example: 15 August 2026"
                    value={form.event_deadline}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            event_deadline:
                            e.target.value
                        })

                        if (
                            errors.event_deadline
                        ) {
                            setErrors(
                                previous => ({
                                    ...previous,
                                    event_deadline:
                                        ''
                                })
                            )
                        }
                    }}
                    className={
                        errors.event_deadline
                            ? 'border-red-500 focus:border-red-500'
                            : ''
                    }
                />

                {errors.event_deadline && (
                    <p className="mt-2 text-sm text-red-400">
                        {
                            errors.event_deadline
                        }
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm text-slate-400">
                    Department
                </label>

                <Input
                    placeholder="Example: Marketing"
                    value={department}
                    onChange={(e) =>
                        setDepartment(
                            e.target.value
                        )
                    }
                />
            </div>

            {errors.departments && (
                <p className="text-sm text-red-400">
                    {errors.departments}
                </p>
            )}

            {form.departments.length > 0 && (
                <div className="space-y-2">
                    {form.departments.map(
                        (
                            item,
                            index
                        ) => (
                            <div
                                key={index}
                                className="rounded-xl border border-white/10 bg-white/5 p-3"
                            >
                                <p className="font-medium">
                                    {item}
                                </p>
                            </div>
                        )
                    )}
                </div>
            )}

            <Button
                type="button"
                variant="secondary"
                onClick={addDepartment}
            >
                Add Department
            </Button>

            <Button
                type="submit"
                disabled={loading}
            >
                {loading
                    ? 'Generating...'
                    : 'Generate Public Plan'}
            </Button>
        </form>
    )
}