import { useState } from 'react'
import toast from 'react-hot-toast'

import Input from '../ui/Input'
import Button from '../ui/Button'
import Textarea from '../ui/Textarea'

export default function LearningPlanForm({
                                             loading,
                                             onSubmit
                                         }) {
    const [form, setForm] = useState({
        describe_the_goal: '',
        deadline: '',
        learning_materials_links: [],
        format: 'json'
    })

    const [materials,
        setMaterials] = useState('')

    const [errors,
        setErrors] = useState({})

    const handleSubmit = (
        e
    ) => {
        e.preventDefault()

        const newErrors = {}

        if (
            !form.describe_the_goal.trim()
        ) {
            newErrors.describe_the_goal =
                'Learning goal is required'
        }

        if (
            !form.deadline.trim()
        ) {
            newErrors.deadline =
                'Deadline is required'
        }

        if (
            !materials.trim()
        ) {
            newErrors.materials =
                'At least one learning resource is required'
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

        onSubmit({
            ...form,
            learning_materials_links:
                materials
                    .split('\n')
                    .map(
                        item =>
                            item.trim()
                    )
                    .filter(Boolean)
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div>
                <label className="mb-2 block text-sm text-slate-400">
                    Learning Goal
                </label>

                <Input
                    placeholder="Example: Become a Data Engineer"
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
                    Deadline
                </label>

                <Input
                    placeholder="Example: 6 months"
                    value={form.deadline}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            deadline:
                            e.target.value
                        })

                        if (
                            errors.deadline
                        ) {
                            setErrors(
                                previous => ({
                                    ...previous,
                                    deadline:
                                        ''
                                })
                            )
                        }
                    }}
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

            <div>
                <label className="mb-2 block text-sm text-slate-400">
                    Learning Resources
                </label>

                <Textarea
                    placeholder={`Example:
https://roadmap.sh
https://www.coursera.org
https://www.udemy.com`}
                    value={materials}
                    onChange={(e) => {
                        setMaterials(
                            e.target.value
                        )

                        if (
                            errors.materials
                        ) {
                            setErrors(
                                previous => ({
                                    ...previous,
                                    materials:
                                        ''
                                })
                            )
                        }
                    }}
                    className={
                        errors.materials
                            ? 'border-red-500 focus:border-red-500'
                            : ''
                    }
                />

                {errors.materials && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.materials}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={loading}
            >
                {loading
                    ? 'Generating...'
                    : 'Generate Learning Plan'}
            </Button>
        </form>
    )
}