import styles from './styles.module.css'

import Image from 'next/image'

import Logo from '@/assets/img/logo.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image src={Logo} alt='Logo Planar' />
            <span>© Copyright 2023 - Todos os direitos reservados</span>
        </footer>
    )
}

export default Footer