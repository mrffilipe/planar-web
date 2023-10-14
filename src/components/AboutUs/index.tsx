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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lorem at lorem fringilla, sed varius purus eleifend. Vivamus dapibus pharetra lorem.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lorem at lorem fringilla, sed varius purus eleifend. Vivamus dapibus pharetra lorem.
                </p>
            </div>
        </section >
    )
}

export default AboutUs