import { Outlet } from 'react-router-dom'

import Sidebar from '../components/navigation/Sidebar'
import Topbar from '../components/navigation/Topbar'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-white">
            <div className="relative flex min-h-screen">
                <Sidebar />

                <div className="flex min-h-screen flex-1 flex-col">
                    <Topbar />

                    <main className="flex-1 px-6 py-6 lg:px-10">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}