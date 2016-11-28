import React from 'react'

import styles from './styles.css'

export default function Pagination () {
  return (
    <footer className={styles.Pagination}>
      <div className='container'>
        <nav className='pagination'>
          <a className='button'>Previous</a>
          <a className='button'>Next page</a>
          <ul>
            <li>
              <a className='button'>1</a>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <a className='button'>45</a>
            </li>
            <li>
              <a className='button is-primary'>46</a>
            </li>
            <li>
              <a className='button'>47</a>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <a className='button'>86</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
