import styles from './styles.module.css'

import Image from 'next/image'

import SolarEnergyIcon from '@/assets/icons/solar_energy.png'

const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className={styles.title}>
                <h1>EXPERIÊNCIA</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lorem at lorem fringilla.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                </div>
                <div className={styles.gallery}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Experience