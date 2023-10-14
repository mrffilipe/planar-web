import styles from './page.module.css'

import TakeFlight from '@/components/TakeFlight'
import AboutUs from '@/components/AboutUs'
import ThinkDifferent from '@/components/ThinkDifferent'
import Experience from '@/components/Experience'
import Laboratory from '@/components/Laboratory'
import Customers from '@/components/Customers'

export default function Home() {
  return (
    <>
      <TakeFlight />
      <AboutUs />
      <ThinkDifferent />
      <Experience />
      <Laboratory />
      <Customers />
    </>
  )
}