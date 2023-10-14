import styles from './styles.module.css'

import Image from 'next/image'

import FriatoLogo from '@/assets/img/friato_logo.png'
import OderichLogo from '@/assets/img/oderich_logo.png'
import CoapilLogo from '@/assets/img/coapil_logo.png'
import AgrofavaLogo from '@/assets/img/agrofava_logo.png'
import AgromenLogo from '@/assets/img/agromen_logo.png'

const Customers = () => {
    return (
        <section id='clientes' className={styles.customer}>
            <div className={styles.mask}>
                <Image src={FriatoLogo} alt='Friato logo' draggable={false} />
                <Image src={OderichLogo} alt='Oderich logo' draggable={false} />
                <Image src={CoapilLogo} alt='Coapil logo' draggable={false} />
                <Image src={AgrofavaLogo} alt='Agrofava logo' draggable={false} />
                <Image src={AgromenLogo} alt='Agromen logo' draggable={false} />
            </div>
        </section>
    )
}

export default Customers