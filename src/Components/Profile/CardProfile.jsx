import BtnCard from '../BtnCard/BtnCard';
import ProfileSection from '../ProfileSection/ProfileSection';
import TitleCard from '../TitleCard/TitleCard';
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
      <TitleCard name={name} />
      <ProfileSection info={bio} />
      <ProfileSection info={phone} />
      <ProfileSection info={email} />
      <div className={styles.divBtn}>
        <BtnCard Linkurl={gitHubUrl} />
        <BtnCard Linkurl={linkedinUrl} />
        <BtnCard Linkurl={twitterUrl} />
      </div>
    </div>
  );
}
