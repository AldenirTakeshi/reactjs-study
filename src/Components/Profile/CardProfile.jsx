import styles from './Profile.module.css';
export default function CardProfile({
  avatar,
  name,
  bio,
  email,
  phone,
  gitHubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  return (
    <div className={styles.CardProfile}>
      <img src={avatar} alt="Img de perfil" />
      <h1 className="Name">{name}</h1>
      <hr />
      <p>{bio}</p>
      <hr />
      <p>{phone}</p>
      <hr />
      <p>{email}</p>
      <hr />
      <div className={styles.divBtn}>
        <button className={styles.btn}>{gitHubUrl}</button>
        <button className={styles.btn}>{linkedinUrl}</button>
        <button className={styles.btn}>{twitterUrl}</button>
      </div>
    </div>
  );
}
