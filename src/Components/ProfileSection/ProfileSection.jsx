import styles from './ProfileSection.module.css';
export default function ProfileSection({ info }) {
  return (
    <>
      <p>{info}</p>
      <hr className={styles.hr} />
    </>
  );
}
