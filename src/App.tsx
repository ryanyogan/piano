import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}>
        <h3>Piano here</h3>
      </main>
      <Footer />
    </div>
  );
};
