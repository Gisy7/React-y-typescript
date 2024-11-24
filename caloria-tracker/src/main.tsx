import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ActivityProvider from './context/ContextActivity.tsx'


createRoot(document.getElementById('root')!).render(
  <ActivityProvider>
    <App />
  </ActivityProvider>
)
