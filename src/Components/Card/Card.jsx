import Button from '../Button/Button';
import styles from './Card.module.css';

export default function Card({ title, img }) {
  return (
    <div
      className={styles.cardDiv}
      style={{ background: 'lightgray', borderRadius: '10px', margin: '10px' }}
    >
      <img src={img} alt="star wars img" />
      <div className="divDesc">
        <h2 style={{ margin: '0' }}>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          laudantium quo autem, voluptatum expedita ex in reiciendis
          reprehenderit illum et libero harum quas nam laborum officia totam
          optio molestiae earum.
        </p>
        <Button text={'Comprar Agora'} />
      </div>
    </div>
  );
}
