import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />
        <div id="detail">
          {/* ALT 1 */}
            {/* <Outlet /> */}

          {/* ALT 2 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        </div>
    </UserProvider>
  )
}
