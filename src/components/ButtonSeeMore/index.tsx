import styles from "./styles.module.scss";

interface Props {
  title: string;
}

export const ButtonSeeMore = ({ title }: Props) => {
  return (
    <div className={styles.btn}>
      <button>{title}</button>
    </div>
  );
};
