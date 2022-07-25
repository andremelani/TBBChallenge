import styles from "./styles.module.scss";


interface Props {
  text: string;
  imgUrl: string;
}

export const CardArticle = ({ text, imgUrl }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={imgUrl} alt={imgUrl} />
        <div className={styles.text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
