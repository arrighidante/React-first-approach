import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />
        <div id="detail">
            <Outlet />
        </div>
    </UserProvider>
  )
}
