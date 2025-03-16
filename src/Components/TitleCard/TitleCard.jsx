import { useState } from 'react';
import styles from './TitleCard.module.css';
export default function TitleCard({ name }) {
  const [followText, setFollowText] = useState('Follow');

  function handleClick(e) {
    alert('Testando click');
    setFollowText('Following');
  }

  return (
    <>
      <h1>{name}</h1>
      <button className={StyleSheet.follwoBtn} onClick={handleClick}>
        {followText}
      </button>
      <hr />
    </>
  );
}
