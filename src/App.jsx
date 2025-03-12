import Card from './Components/Card/Card.jsx';
import starwars1 from './assets/star wars.jpg';
import starwar2 from './assets/empireStrikesBack.jpg';
import posterReturnJedi from './assets/Return of the Jedi.jpg';
import Button from './Components/Button/Button.jsx';
import tomiokaIcon from './assets/tomioka.jpg';
import CardProfile from './Components/Profile/CardProfile.jsx';

function sum(a, b) {
  return a + b;
}

export default function App() {
  return (
    <>
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
          <a href="" target="_Blank">
            GitHub
          </a>
        }
        linkedinUrl={
          <a href="" target="_Blank">
            Linkedin
          </a>
        }
        twitterUrl={
          <a href="" target="_Blank">
            Twitter
          </a>
        }
      />
    </>
  );
}
