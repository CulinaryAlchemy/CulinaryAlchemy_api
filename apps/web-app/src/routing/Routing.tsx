import { Header } from '@/components'
import { AuthGuard, CRoutes, PublicGuard } from '@/routing'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const LoginPage = lazy(() => import('@/pages/Login/Login'))
const IndexPage = lazy(() => import('@/pages/Index'))
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound'))
const RegisterPage = lazy(() => import('@/pages/Register/Register'))

export const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          <Route element={<AuthGuard />}>
            <Route path={CRoutes.index} element={<IndexPage />} />
          </Route>
          <Route element={<PublicGuard />}>
            <Route path={CRoutes.register} element={<RegisterPage />} />
            <Route path={CRoutes.login} element={<LoginPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
