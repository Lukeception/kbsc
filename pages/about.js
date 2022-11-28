import styles from '../styles/Home.module.css';
import Head from "next/head";
import Layout from "../components/layout";

export default function About () {
    return (
      <div className={styles.container}>
        <Head>
            <title>Learn Keyboard Shortcuts</title>
            <meta name="description" content="Learn and practice keyboard shortcuts" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Layout>
            <h1 className={styles.title}>Why Learn Keyboard Shortcuts?</h1>
            <p className={styles.bodyText}>
              Most programs have a plethora of buttons and menus which show you what actions you can take. When we first use a program, this is usually how we interact with programs because we're not yet familiar with all of its options and actions. However, almost all programs also offer keyboard shortcuts for those same actions. They can be challenging to learn and remember, which is why many people prefer not to use them.
            </p>
            <p className={styles.bodyText}>
              We argue that using a keyboard shortcut is almost always faster than selecting something in a menu with the mouse. This website aims to help you get over the challenge of learning the various shortcuts and improve you proficiency with computers.
            </p>
          </Layout>
      </div>
    )
}