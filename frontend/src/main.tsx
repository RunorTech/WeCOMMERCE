export const dynamic = 'force-dynamic';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { PageProvider } from './PageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageProvider>
    <RouterProvider router={router}/>
    </PageProvider>
  </StrictMode>,
)
