import styles from './page.module.css'

import TakeFlight from '@/components/TakeFlight'
import AboutUs from '@/components/AboutUs'

export default function Home() {
  return (
    <>
      <TakeFlight />
      <AboutUs />
    </>
  )
}