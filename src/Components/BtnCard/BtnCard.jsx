import styles from './BtnCard.module.css';
export default function BtnCard({ Linkurl }) {
  return <button className={styles.btn}>{Linkurl}</button>;
}
