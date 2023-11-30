import Image from "next/image";
import styles from "./page.module.css";
import { GridStuff } from "@/components/component-grid";

export default function Home() {
  return (
    <main>
      <div className={styles.headingDiv}>
        <h1>Kalender</h1>
      </div>
      <GridStuff></GridStuff>
    </main>
  );
}
