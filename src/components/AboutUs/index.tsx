import styles from './styles.module.css'

const AboutUs = () => {
    return (
        <section className={styles.about_us}>
            <div className={styles.background}>
                <div className={styles.shape}></div>
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