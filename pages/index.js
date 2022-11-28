import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Keyboard Shortcuts</title>
        <meta name="description" content="Learn and practice keyboard shortcuts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>KBSC</span> !
        </h1>

        <p className={styles.description}>
          Quickly look up, learn and practice keyboard shortcuts to do more in less time with 
          computers. <Link href="/about">Why learn keyboard shortcuts?</Link>
        </p>

        <div className={styles.grid}>
          <Link href="./lookup" className={styles.card}>
              <h2>Look Up Shortcuts &rarr;</h2>
              <p>Quickly search for any specific keyboard shortcut.</p>
          </Link>

          <Link href="./practice" className={styles.card}>
              <h2>Learn and Practice &rarr;</h2>
              <p>Make newly learned shortcuts stick by practicing them here.</p>
          </Link>
        </div>
      </Layout>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
