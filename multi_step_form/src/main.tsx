import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './index.css'
import Step1 from './pages/step_1.tsx'
import Step2 from './pages/step_2.tsx'
import Step3 from './pages/step_3.tsx'
import Step4 from './pages/step_4.tsx'

const router = createBrowserRouter([
  {
    "path": "/",
    element: <Step1 />
  },
  {
    "path": "/step1",
    element: <Step1 />
  },
  {
    "path": "/step2",
    element: <Step2 />
  },
  {
    "path": "/step3",
    element: <Step3 />
  },
  {
    "path": "/step4",
    element: <Step4 />
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
