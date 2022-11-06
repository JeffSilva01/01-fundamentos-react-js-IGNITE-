import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./styles/App.module.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>posts</main>
      </div>
    </>
  );
}

export default App;
