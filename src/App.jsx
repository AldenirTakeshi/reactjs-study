import Card from './Components/Card/Card.jsx';
import posterReturnJedi from '../public/Return of the Jedi.jpg';
import Button from './Components/Button/Button.jsx';
function sum(a, b) {
  return a + b;
}

export default function App() {
  return (
    <>
      <h1>Opa Teste</h1>
      <Button text="Hello World" />
      <Card title="Poster: Star Wars (1977)" img="./public/star wars.jpg" />
      <Card
        title="Poster: Empire Strikes Back (1980)"
        img="./public/empireStrikesBack.jpg"
      />
      <Card title="Poster: Return of the Jedi (1983)" img={posterReturnJedi} />
      <Card />
    </>
  );
}
