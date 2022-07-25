import styles from "./styles.module.scss";


interface Props {
  title: string;
  text: string;
  imgUrl: string;
  color: string;
}

export const CardProducts = ({ title, text, imgUrl, color }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={imgUrl} alt={imgUrl} />
        <div className={styles.text}>
          <p>{text}</p>
        </div>
        <div className={styles.title} style={{ backgroundColor: `${color}` }}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};
