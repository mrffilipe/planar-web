'use client'

import styles from './styles.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/img/logo.png'
import { CloseOutlined, MenuOutlined } from '@mui/icons-material'
import { useState } from 'react'

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>()

    const handleToggleMenu = (): void => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className={styles.header_container}>
            <div className={styles.header}>
                <Image src={Logo} alt='Logo Planar' draggable={false} />
                <button onClick={handleToggleMenu}>{menuOpen ? <CloseOutlined /> : <MenuOutlined />}</button>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? '' : styles.closed_menu}`}>
                <ul>
                    <li>
                        <Link href="#levante-voo">Home</Link>
                    </li>
                    <li>
                        <Link href="#sobre-nos">Sobre</Link>
                    </li>
                    <li>
                        <Link href="#experiencia">Experiência</Link>
                    </li>
                    <li>
                        <Link href="#laboratorio">Laboratório</Link>
                    </li>
                    <li>
                        <Link href="#clientes">Clientes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavMenu