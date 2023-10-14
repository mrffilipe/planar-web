import styles from './styles.module.css'

import Image from 'next/image'

const AboutUs = () => {
    return (
        <section id='sobre-nos' className={styles.about_us}>
            <div className={styles.background}>
                <div>
                    <div className={styles.mask}></div>
                </div>
            </div>
            <div className={styles.content}>
                <h1>SOBRE NÓS</h1>
                <p>
                    Somos apaixonados pela engenharia elétrica e energia fotovoltaica. Nossa jornada é impulsionada pela inovação e sustentabilidade, fornecendo soluções ecologicamente corretas para as necessidades energéticas do mundo.
                </p>
            </div>
        </section >
    )
}

export default AboutUs