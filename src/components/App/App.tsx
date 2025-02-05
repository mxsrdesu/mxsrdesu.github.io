import Prompt from '@components/Prompt';
import Header from '@components/Header';
import About from '@components/Content/About';
import Footer from '@components/Footer';
import Skills from '@components/Content/Skills';
import styles from './App.module.scss';
import '@styles/global.scss';


const App = () => {
  return (
    <div class={styles.container}>
      <Prompt />
      <Header />
      <main class={styles.main}>
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
