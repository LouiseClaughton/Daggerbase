import Link from "next/link";

export default function Sidebar({ activeTab }) {
    return (
        <div className="bg-gray-700 w-[25%] h-full flex flex-col items-center justify-center gap-1">
            <div className="sidebar-link relative">
                <Link href="/">
                    <h1 className="font-amagro text-white">Daggerbase</h1>
                </Link>
            </div>
            <div className={`sidebar-link w-full py-2 px-4 transition-colors ${activeTab == "campaigns" ? 'bg-purple-600' : 'bg-gray-900 hover:bg-gray-800'} relative`}>
                <Link href="/campaigns" className="block h-full w-full">Campaigns</Link>
            </div>
            <div className={`sidebar-link w-full py-2 px-4 transition-colors ${activeTab == "one-shots" ? 'bg-purple-600' : 'bg-gray-900 hover:bg-gray-800'} relative`}>
                <Link href="/one-shots" className="block h-full w-full">One-Shots</Link>
            </div>
            <div className={`sidebar-link w-full py-2 px-4 transition-colors ${activeTab == "resources" ? 'bg-purple-600' : 'bg-gray-900 hover:bg-gray-800'} relative`}>
                <Link href="/" className="block h-full w-full">Resources</Link>
            </div>
        </div>
    )
}