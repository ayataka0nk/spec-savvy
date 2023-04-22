import { Route as BaseRoute, Routes as BaseRoutes } from 'react-router-dom'
import { HomePage } from './components/pages/home'
import { SamplePage } from './components/pages/sample'

export const Routes = () => {
  return (
    <BaseRoutes>
      <BaseRoute path='/' element={<HomePage />} />
      <BaseRoute path='/sample' element={<SamplePage />} />
    </BaseRoutes>
  )
}
