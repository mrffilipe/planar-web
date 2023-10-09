'use client'

import styles from './styles.module.css'

import Image from 'next/image'

import Logo from '@/assets/img/logo.png'
import { CloseOutlined, MenuOutlined } from '@mui/icons-material'
import { useState } from 'react'

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(true)

    const handleToggleMenu = (): void => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className={styles.header_container}>
            <div className={styles.header}>
                <Image src={Logo} alt='Logo Planar' />
                <button onClick={handleToggleMenu}>{menuOpen ? <CloseOutlined /> : <MenuOutlined />}</button>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? '' : styles.closed_menu}`}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Experiências</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavMenu