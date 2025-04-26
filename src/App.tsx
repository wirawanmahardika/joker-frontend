import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Watch from "./pages/Watch"
import Learn from "./pages/Learn"
import Login from "./pages/Login"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/watch/:id_step/tutorial/:id_tutorial" element={<Watch />} />
      </Route>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
