import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { getApps } from './utils/helper'

const App = () => {
  const CurrentApp = getApps();

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <CurrentApp />
    </BrowserRouter>
  )
}

export default App
