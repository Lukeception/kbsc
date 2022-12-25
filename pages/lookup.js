import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import SearchKBSC from '../components/search_kbsc';




// old test function to work with pocketbase directly
// Remember to use the "allRecords" in the Lookup component if you want to use this again.
// and include <p>{allRecords.items[0].text}</p>

/* import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getStaticProps() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const record = await pb.collection('test').getList();
  const allRecords = JSON.parse(JSON.stringify(record));
  console.log(allRecords);
  return {props: { allRecords }};
} */

import { getShortcutData } from '../data/data_helper';

export async function getStaticProps() {
  const shortcuts = getShortcutData();
  return {props: { shortcuts, }};
}




export default function Lookup({ shortcuts }) {
  return (
    <Layout>
      <h1 className={styles.title}>Look Up</h1>
      <SearchKBSC shortcuts={shortcuts}/>
    </Layout>
  );
}