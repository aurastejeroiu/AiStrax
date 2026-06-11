import Card from '../ui/Card'
import Button from '../ui/Button'

export default function ExportModal({
                                        open,
                                        onClose,
                                        onPdf,
                                        onImage
                                    }) {
    if (!open) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-md">
            <Card className="w-full max-w-lg p-8">
                <h2 className="mb-3 text-2xl font-bold">
                    Export Plan
                </h2>

                <p className="mb-8 text-slate-400">
                    Choose how you want to export the generated plan.
                </p>

                <div className="flex flex-col gap-4">
                    <Button onClick={onPdf}>
                        Export as PDF
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={onImage}
                    >
                        Export as Image
                    </Button>
                </div>

                <div className="mt-8">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </Card>
        </div>
    )
}