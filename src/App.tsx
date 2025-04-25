import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Watch from "./pages/Watch"
import Learn from "./pages/Learn"

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/watch/:idVideo" element={<Watch />} />
      </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
