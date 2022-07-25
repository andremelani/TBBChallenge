import styles from './styles.module.scss'
import { ReactNode } from 'react'

type ParagraphProps = {
    children: ReactNode
}

export const Paragraph = ({children}: ParagraphProps) => {

    return(
        <p className={styles.paragraph} data-aos="zoom-in" >
            {children}
        </p>
    )
}