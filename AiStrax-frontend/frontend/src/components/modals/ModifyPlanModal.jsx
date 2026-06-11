import { useState } from 'react'

import Button from '../ui/Button'
import Textarea from '../ui/Textarea'

export default function ModifyPlanModal({
                                            open,
                                            loading,
                                            onClose,
                                            onSubmit
                                        }) {
    const [request, setRequest] =
        useState('')

    if (!open) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950 p-8">
                <h2 className="mb-6 text-2xl font-bold">
                    Modify Recommendation
                </h2>

                <Textarea
                    placeholder="Example: Make the plan shorter, reduce duration to 2 months, focus more on practical projects..."
                    value={request}
                    onChange={(e) =>
                        setRequest(
                            e.target.value
                        )
                    }
                />

                <div className="mt-6 flex gap-4">
                    <Button
                        onClick={() =>
                            onSubmit(request)
                        }
                        disabled={loading}
                    >
                        Apply Changes
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}