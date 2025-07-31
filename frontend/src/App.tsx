import { Routes,Route } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Home from "./pages/home/Home"
import Result from "./pages/home/Result"
import Centers from "./pages/home/centers"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/home/result" element={<Result />}></Route>
      <Route path="/centers" element={<Centers />}></Route>
    </Routes>
    </>
  )
}

export default App
