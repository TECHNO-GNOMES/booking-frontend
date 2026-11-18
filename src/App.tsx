import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { MainLayout } from "@/app/MainLayout"
import { NotFoundPage } from '@/pages/NotFoundPage'
import { RegistrationPage } from '@/pages/RegistrationPage'
import { LoginPage } from '@/pages/LoginPage'
import { SuccessPage } from '@/pages/SuccessPage'


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
          <Route path='/success' element={<SuccessPage/>}/>
          {/* роуты для навигации */}
          {/* <Route path='/about' element={<AboutPage />}/> */}
          {/* <Route path="/guests" element={<GuestsPage/>}/> */}
          {/* <Route path="/places" element={<PlacesPage/>}/> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App