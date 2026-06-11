import { useState } from 'react'

import Button from '../ui/Button'

const sections = [
    {
        title: 'Platform Overview',
        items: [
            {
                question: 'What is AiStraX?',
                answer:
                    'AiStraX is an AI-powered planning platform designed to transform goals into structured execution plans through intelligent task generation, recommendations and detailed breakdowns.'
            },
            {
                question: 'Why was AiStraX created?',
                answer:
                    'AiStraX was developed to address one of the most common productivity challenges: transforming ideas into actionable and achievable plans.'
            },
            {
                question: 'Who can benefit from AiStraX?',
                answer:
                    'Students, professionals, project managers, entrepreneurs, organizations and anyone seeking a more structured approach to planning and execution.'
            },
            {
                question: 'Why is the platform called AiStraX?',
                answer:
                    'In mathematics, an AiStraX represents a fundamental principle from which more complex structures are derived. AiStraX follows the same philosophy by transforming simple goals into complete execution strategies.'
            }
        ]
    },
    {
        title: 'Planning Features',
        items: [
            {
                question: 'What planning types are supported?',
                answer:
                    'AiStraX currently supports Personal Planning, Learning Planning, Corporate Planning and Public Event Planning.'
            },
            {
                question: 'How does the AI generate plans?',
                answer:
                    'The AI analyzes user goals, deadlines and contextual information before generating structured tasks and execution recommendations.'
            },
            {
                question: 'Can plans adapt to different deadlines?',
                answer:
                    'Yes. Generated plans are designed to distribute tasks according to the specified deadline and planning context.'
            },
            {
                question: 'What is Plan Intensity?',
                answer:
                    'Plan Intensity controls the pace of execution. Lower values prioritize flexibility, while higher values focus on faster progress and increased commitment.'
            },
            {
                question: 'What are Detailed Task Breakdowns?',
                answer:
                    'Detailed Task Breakdowns divide larger tasks into smaller execution steps, helping users maintain clarity and momentum.'
            },
            {
                question: 'Can generated plans be modified?',
                answer:
                    'Yes. Users can request modifications and generate updated execution plans tailored to new requirements.'
            }
        ]
    },
    {
        title: 'Recommendations',
        items: [
            {
                question: 'How do recommendations work?',
                answer:
                    'Recommendations are generated using planning patterns, user feedback and AI-assisted decision support principles.'
            },
            {
                question: 'Can recommendations be personalized?',
                answer:
                    'Yes. Recommendations can be adapted through user modification requests and AI-generated adjustments.'
            },
            {
                question: 'What makes a recommendation useful?',
                answer:
                    'The most effective recommendations combine realistic timelines, achievable milestones and actionable execution steps.'
            }
        ]
    },
    {
        title: 'Export & Productivity',
        items: [
            {
                question: 'Can plans be exported?',
                answer:
                    'Yes. Plans can be exported as PDF documents and PNG images.'
            },
            {
                question: 'Why should I export my plans?',
                answer:
                    'Exporting plans enables easier tracking, sharing and documentation of planning activities.'
            },
            {
                question: 'How often should I review a plan?',
                answer:
                    'Most productivity frameworks recommend reviewing plans weekly to ensure priorities remain aligned with objectives.'
            }
        ]
    },
    {
        title: 'AI & Execution',
        items: [
            {
                question: 'Does AI replace human decision-making?',
                answer:
                    'No. AiStraX provides guidance and structure while allowing users to remain in control of final decisions.'
            },
            {
                question: 'What is the main objective of AiStraX?',
                answer:
                    'The primary goal is not simply generating plans, but supporting successful execution through structure, clarity and actionable recommendations.'
            },
            {
                question: 'What makes AiStraX different from traditional planning tools?',
                answer:
                    'AiStraX combines AI-generated planning, recommendation systems, detailed task breakdowns and professional export capabilities within a unified platform.'
            }
        ]
    }
]

export default function FaqModal({
                                     open,
                                     onClose
                                 }) {
    const [
        activeQuestion,
        setActiveQuestion
    ] = useState(null)

    if (!open) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="max-h-[85vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        AiStraX FAQ
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Everything you need to know about the platform.
                    </p>
                </div>

                <div className="space-y-8">
                    {sections.map(
                        (
                            section,
                            sectionIndex
                        ) => (
                            <div
                                key={sectionIndex}
                            >
                                <h3 className="mb-4 text-xl font-semibold text-violet-300">
                                    {section.title}
                                </h3>

                                <div className="space-y-3">
                                    {section.items.map(
                                        (
                                            item,
                                            itemIndex
                                        ) => {
                                            const key =
                                                `${sectionIndex}-${itemIndex}`

                                            return (
                                                <div
                                                    key={key}
                                                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                                                >
                                                    <button
                                                        onClick={() =>
                                                            setActiveQuestion(
                                                                activeQuestion === key
                                                                    ? null
                                                                    : key
                                                            )
                                                        }
                                                        className="flex w-full items-center justify-between p-5 text-left"
                                                    >
                                                        <span className="font-medium">
                                                            {item.question}
                                                        </span>

                                                        <span className="text-xl">
                                                            {activeQuestion === key
                                                                ? '−'
                                                                : '+'}
                                                        </span>
                                                    </button>

                                                    {activeQuestion === key && (
                                                        <div className="border-t border-white/10 p-5 text-slate-400">
                                                            {item.answer}
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className="mt-8 flex justify-end">
                    <Button
                        variant="secondary"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}