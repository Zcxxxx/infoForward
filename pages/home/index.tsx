import type { NextPage } from 'next'
import styles from './index.module.css';
import { useRouter } from 'next/router'
import { Button } from 'antd';
import React from 'react';
const Home: NextPage<{ children: React.ReactNode }> = (params) => {
  const nav = useRouter()
  const gochild = () => {
    nav.push('/home/list')
  }
  return (
    <div className={styles.home_container}>
      <div>
        <button onClick={gochild}>123</button>
      </div>

      <div>
       
      </div>
    </div>
  )
}

export default Home;