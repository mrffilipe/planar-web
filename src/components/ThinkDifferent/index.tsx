import styles from './styles.module.css'

import Image from 'next/image'

import DroneImg from '@/assets/img/agras_t40.png'

const ThinkDifferent = () => {
    return (
        <section className={styles.think_different}>
            <div className={styles.mask}>
                <div className={styles.background}>
                    <div className={styles.diagonal}>
                        <Image src={DroneImg} alt='DJI Agras T40' draggable={false} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>PENSE</h1>
                        <span>DIFERENTE</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lorem at lorem fringilla, sed varius purus eleifend. Vivamus dapibus pharetra lorem.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThinkDifferent