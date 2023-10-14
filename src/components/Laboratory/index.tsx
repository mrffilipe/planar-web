import styles from './styles.module.css'

import Image from 'next/image'

import DroneImg from '@/assets/img/agras_t40.png'

const Laboratory = () => {
    return (
        <section className={styles.laboratory}>
            <div className={styles.title}>
                <h1>LABORATÓRIO</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lorem at lorem fringilla.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.detail_left}>
                    <div className={styles.info}>
                        <span>PESO MÁXIMO</span>
                        <div>
                            <p><strong>101</strong></p>
                            <span>kg</span>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <span>COMPRIMENTO</span>
                        <div>
                            <p><strong>280</strong></p>
                            <span>cm</span>
                        </div>
                    </div>
                </div>
                <Image src={DroneImg} alt='Drone - DJI Agras T40' />
                <div className={styles.detail_right}>
                    <div className={styles.info}>
                        <span>DISTÂNCIA DE VOO</span>
                        <div>
                            <p><strong>2000</strong></p>
                            <span>m</span>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <span>TEMPO DE VOO</span>
                        <div>
                            <p><strong>18</strong></p>
                            <span>min</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Laboratory