import About from '@components/Content/About';
import Skills from '@components/Content/Skills';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Prompt from '@components/Prompt';
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
