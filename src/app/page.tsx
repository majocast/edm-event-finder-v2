import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/elements/Module/Card";



export default async function Home() {
  
  return (
    <main className={styles.main}>
      <Card />
    </main>
  );
}
