import { useEffect } from 'react'
import styles from './styles.module.scss'

const fetchHelloWorld = async () => {
  const res = await fetch('/api/hello-world')
  const body = await res.json()
  return body
}
export const HomePage = () => {
  useEffect(() => {
    ;(async () => {
      const result = await fetchHelloWorld()
      console.log(result)
    })()
  }, [])
  return <div className={styles['text-red']}>Hello World</div>
}
