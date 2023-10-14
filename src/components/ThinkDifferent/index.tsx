import styles from './styles.module.css'

import Image from 'next/image'

import DroneImg from '@/assets/img/agras_t40_left.webp'

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
                        Inovação está no nosso DNA. Desafiamos o status quo, criando soluções elétricas e energéticas que vão além do convencional. O futuro é agora.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThinkDifferent