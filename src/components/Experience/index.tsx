import styles from './styles.module.css'

import Image from 'next/image'

import SolarEnergyIcon from '@/assets/icons/solar_energy.png'
import EngineeringIcon from '@/assets/icons/engineering.png'
import EnergyIcon from '@/assets/icons/energy.png'
import ShoppingIcon from '@/assets/icons/shopping.png'
import MotorIcon from '@/assets/icons/motor.png'
import TransformerIcon from '@/assets/icons/transformer.png'
import ServiceIcon from '@/assets/icons/service.png'

const Experience = () => {
    return (
        <section id='experiencia' className={styles.experience}>
            <div className={styles.title}>
                <h1>EXPERIÊNCIA</h1>
                <p>
                    Mais de uma década iluminando vidas.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <Image src={SolarEnergyIcon} alt='Solar energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={EngineeringIcon} alt='Engineering Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={EnergyIcon} alt='Energy Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={ShoppingIcon} alt='Shopping Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={MotorIcon} alt='Motor Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={TransformerIcon} alt='Transformer Icons8' />
                        <div></div>
                    </div>
                    <div className={styles.card}>
                        <Image src={ServiceIcon} alt='Service Icons8' />
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