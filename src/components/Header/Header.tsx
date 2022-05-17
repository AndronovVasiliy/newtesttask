import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import style from './Header.module.scss'

function Header() {

  const { isAuth } = useAppSelector(state => state.auth)

  return (
    <div className={style.headerComponent}>
      <ul>
        <li><NavLink className={({ isActive }) => isActive ? style.active : ""} to="/">Главная</NavLink>  </li>
        <li><NavLink className={({ isActive }) => isActive ? style.active : ""} to="/news">Новости</NavLink></li>
        {isAuth ? <li><NavLink className={({ isActive }) => isActive ? style.active : ""} to="/profile">Профаил</NavLink></li> :
          <li><NavLink className={({ isActive }) => isActive ? style.active : ""} to="/login">Логин</NavLink></li>}
      </ul>
    </div>
  )
}

export default Header