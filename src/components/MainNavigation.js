import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
      <header className={css.header}>
          <nav>
              <ul className={css.list}>
                  <li>
                      <NavLink
                          to='/'
                          className={({ isActive }) => isActive ? css.active : ''}
                          end // end means that the path must be exact, so it will only be active with the exact "/" path
                      >
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/products' className={({isActive}) => isActive ? css.active : ''}>Products</NavLink>
                  </li>
              </ul>
          </nav>
    </header>
  )
}

export default MainNavigation