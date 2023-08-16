import { UserButton } from "@clerk/nextjs";

const DashboardPage = () =>{
  return (
   <div>
    <p>Dashboard Page (Protegida!)</p>
    <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default DashboardPage;