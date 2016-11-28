/* Logger */

import React from 'react'
import Table from 'components/Table'

import styles from './styles.css'

const logs = [
  {
    date: '12:51:12',
    method: 'GET',
    origin: '11.1.1.143',
    destination: 'disney.com',
    path: '/',
    status: 311,
    size: '35.24Kb',
    type: 'application/text',
    time: '256.71'
  }, {
    date: '12:51:12',
    method: 'GET',
    origin: '11.1.1.13',
    destination: 'rog.mx',
    path: '/',
    status: 311,
    size: '35.24Kb',
    type: 'application/text',
    time: '33.71'
  }, {
    date: '12:51:12',
    method: 'GET',
    origin: '11.1.1.143',
    destination: 'test.mx',
    path: '/',
    status: 311,
    size: '42.24Kb',
    type: 'application/text',
    time: '133.37'
  }
]

export default function Logger () {
  const data = Array.apply(null, Array(42)).map(() => { return logs[Math.floor(Math.random() * 3)] })
  return (
    <section className={styles.Logger}>
      <Table data={data} />
    </section>
  )
}
