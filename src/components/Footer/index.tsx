import styles from './styles.module.scss'
import Link from 'next/link'
import Router from 'next/router'

import { InstagramLogo } from 'phosphor-react'
import { footerItems } from '../NavItems'


export const Footer = () => {



    const handleInstagram = () => {
        Router.push('https://www.instagram.com/thebrooklynbrothersbrasil/')
    }

    return(
        <footer className={styles.footer}>
                <ul>
                {footerItems.map(item => {
                    return(
                        <li key={item.id}>
                            <Link href='/'>{item.title}</Link>
                            {item.bar ? <div className={styles.divider}>{item.bar}</div> : null }
                        </li>
                    )
                })}
                </ul>

    
            <div className={styles.logo}>
                <img src='/images/footerLogo.png' alt='' />
                <InstagramLogo size={42} color={'#fff'} onClick={handleInstagram} className={styles.instagram}/>
            </div>
        </footer>
    )
}