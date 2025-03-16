import Card from './Components/Card/Card.jsx';
import starwars1 from './assets/star wars.jpg';
import starwar2 from './assets/empireStrikesBack.jpg';
import posterReturnJedi from './assets/Return of the Jedi.jpg';
import Button from './Components/Button/Button.jsx';
import tomiokaIcon from './assets/tomioka.jpg';
import CardProfile from './Components/Profile/CardProfile.jsx';
import styles from './App.module.css';

function sum(a, b) {
  return a + b;
}

export default function App() {
  return (
    <div className={styles.app}>
      {/* <h1>Opa Teste</h1>
      <Button text="Hello World" />
      <Card title="Poster: Star Wars (1977)" img={starwars1} />
      <Card title="Poster: Empire Strikes Back (1980)" img={starwar2} />
      <Card title="Poster: Return of the Jedi (1983)" img={posterReturnJedi} /> */}
      <CardProfile
        avatar={tomiokaIcon}
        name={'Aldenir Takeshi'}
        bio={'Dev Front-End'}
        phone={'69 9 92438399'}
        email={'aldenirtakeshi@gmail.com'}
        gitHubUrl={
          <a href="https://github.com/AldenirTakeshi" target="_Blank">
            GitHub
          </a>
        }
        linkedinUrl={
          <a
            href="https://www.linkedin.com/in/aldenir-arminio-060a51300/"
            target="_Blank"
          >
            Linkedin
          </a>
        }
        twitterUrl={
          <a href="https://x.com/takeshiitos" target="_Blank">
            Twitter
          </a>
        }
      />
    </div>
  );
}
