import styles from './styles.module.css'

import { ArrowCircleRightOutlined } from '@mui/icons-material'
import Image from 'next/image'

import DroneImg from '@/assets/img/agras_t40.png'

const TakeFlight = () => {
    return (
        <section id='levante-voo' className={styles.take_flight}>
            <div className={styles.mask}>
                <div className={styles.content}>
                    <h1>LEVANTE VOO</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lorem at lorem fringilla, sed varius purus eleifend. Vivamus dapibus pharetra lorem.
                    </p>
                    <button>Leia mais<ArrowCircleRightOutlined /></button>
                </div>
                <div className={styles.background}>
                    <div className={styles.diagonal}>
                        <Image src={DroneImg} alt='DJI Agras T40' draggable={false} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default TakeFlight