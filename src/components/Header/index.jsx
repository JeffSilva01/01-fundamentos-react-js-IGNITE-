import styles from "./styles.module.css";

import logoImag from "../../assets/ignate-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImag} alt="Logo Ignate" />
    </header>
  );
}
