import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const name = "Corey Scheideman";
  const tagline = "Homemade Dev";
  const title = `${name} | Portfolio`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img
          src="/images/profile.jpg"
          className={`${styles.headerImage} ${styles.borderCircle}`}
          alt={name}
        />
        <div className={styles.headerContainer}>
          <h1 className={styles.name}>{name}</h1>
          <small>{tagline}</small>
          <nav>
            <a>Home</a>
            {" / "}
            <a>About</a>
            {" / "}
            <a>Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <p>Hello, World!</p>
      </main>
    </div>
  );
}
