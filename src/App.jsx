import Title from './Components/Title/Index.jsx';
import Subtitle from './Components/Subtitle.jsx';
import StatusText from './Components/StatusText.jsx';
import styles from './App.module.css';
function sum(a, b) {
  return a + b;
}

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
