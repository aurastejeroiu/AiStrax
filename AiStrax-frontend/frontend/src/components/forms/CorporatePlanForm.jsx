import { useState } from 'react'
import toast from 'react-hot-toast'

import Input from '../ui/Input'
import Button from '../ui/Button'

export default function CorporatePlanForm({
                                              loading,
                                              onSubmit
                                          }) {
    const [form, setForm] = useState({
        describe_the_goal: '',
        deadline: '',
        team_members: [],
        format: 'json'
    })

    const [errors,
        setErrors] = useState({})

    const [memberName,
        setMemberName] = useState('')

    const [memberRole,
        setMemberRole] = useState('')

    const [memberAvailability,
        setMemberAvailability] = useState('')

    const addMember = () => {
        if (
            !memberName.trim() ||
            !memberRole.trim() ||
            !memberAvailability.trim()
        ) {
            toast.error(
                'Please complete all team member fields'
            )

            return
        }

        setForm({
            ...form,
            team_members: [
                ...form.team_members,
                {
                    name: memberName,
                    role: memberRole,
                    availability:
                    memberAvailability
                }
            ]
        })

        if (
            errors.team_members
        ) {
            setErrors(
                previous => ({
                    ...previous,
                    team_members: ''
                })
            )
        }

        setMemberName('')
        setMemberRole('')
        setMemberAvailability('')
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
                'Corporate goal is required'
        }

        if (
            !form.deadline.trim()
        ) {
            newErrors.deadline =
                'Deadline is required'
        }

        if (
            form.team_members.length === 0
        ) {
            newErrors.team_members =
                'At least one team member is required'
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
                    Corporate Goal
                </label>

                <Input
                    placeholder="Example: Launch a SaaS platform"
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
                    placeholder="Example: Q4 2026"
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

            <div className="rounded-2xl border border-white/10 p-4">
                <h3 className="mb-4 font-semibold">
                    Team Member
                </h3>

                <div className="space-y-4">
                    <Input
                        placeholder="Example: John Smith"
                        value={memberName}
                        onChange={(e) =>
                            setMemberName(
                                e.target.value
                            )
                        }
                    />

                    <Input
                        placeholder="Example: Backend Developer"
                        value={memberRole}
                        onChange={(e) =>
                            setMemberRole(
                                e.target.value
                            )
                        }
                    />

                    <Input
                        placeholder="Example: Full Time"
                        value={memberAvailability}
                        onChange={(e) =>
                            setMemberAvailability(
                                e.target.value
                            )
                        }
                    />
                </div>
            </div>

            {errors.team_members && (
                <p className="text-sm text-red-400">
                    {errors.team_members}
                </p>
            )}

            {form.team_members.length > 0 && (
                <div className="space-y-2">
                    {form.team_members.map(
                        (
                            member,
                            index
                        ) => (
                            <div
                                key={index}
                                className="rounded-xl border border-white/10 bg-white/5 p-3"
                            >
                                <p className="font-medium">
                                    {member.name}
                                </p>

                                <p className="text-sm text-slate-400">
                                    {member.role}
                                </p>

                                <p className="text-sm text-slate-500">
                                    {member.availability}
                                </p>
                            </div>
                        )
                    )}
                </div>
            )}

            <Button
                type="button"
                variant="secondary"
                onClick={addMember}
            >
                Add Team Member
            </Button>

            <Button
                type="submit"
                disabled={loading}
            >
                {loading
                    ? 'Generating...'
                    : 'Generate Corporate Plan'}
            </Button>
        </form>
    )
}