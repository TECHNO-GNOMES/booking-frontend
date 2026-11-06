import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { MainLayout } from "@/app/MainLayout"
import { NotFoundPage } from './pages/NotFoundPage'
import { RegistrationPage } from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage/ui/LoginPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >

            <Route index element={<MainPage />} />
        
          </Route>
          <Route path='/registration' element={<RegistrationPage/ >}></Route>
          <Route path='/login' element={<LoginPage/ >}></Route>
          <Route path='/404' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App