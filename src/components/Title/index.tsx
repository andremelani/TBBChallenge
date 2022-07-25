import styles from './styles.module.scss'

type TitleProps = {
    title: string
}


export const Title = ({title}: TitleProps) => {

    return(
        <span className={styles.title} >
            {title}
        </span>
    )
}