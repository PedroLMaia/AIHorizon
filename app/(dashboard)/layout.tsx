import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({
    children
}:{
    children: React.ReactNode
}) =>{
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <div>
                    Hello Sidebar
                </div>
                <UserButton afterSignOutUrl="/"/>
            </div>
            <main className="md:pl-72">
                Hello content
            </main>
        </div>
    )
}

export default DashboardLayout;