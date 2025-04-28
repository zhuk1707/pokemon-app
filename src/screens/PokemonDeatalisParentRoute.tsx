import { Header } from '../components/Header/Header.tsx'
import { Outlet } from 'react-router'

export const PokemonDetailsParentRoute = () => {
  return (
    <>
      <Header subtitle={'Details'}/>
      <Outlet/>
    </>
  )
}
