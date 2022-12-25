import { useState, useCallback } from "react";
import styles from "./search_kbsc.module.css";
import { prettifyKeys } from "../data/prettify";
/* import styles from "../styles/Home.module.css"; */


/* import { getShortcutData } from '../data/data_helper';

export async function getStaticProps() {
  const shortcutsJSON = getShortcutData();
  return {props: {shortcutsJSON}};
} */


export default function SearchKBSC({ shortcuts }) {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(shortcuts);

  const onChange = useCallback((event) => {
    const query = event.target.value
    setQuery(query)

    // Search
    var res = [];
    shortcuts.forEach(function (shortcut) {
      var score = 0;
      if (shortcut.title.toLowerCase().includes(query)) {score+=2;}
      if (shortcut.searchTerms.toLowerCase().includes(query)) {score+=1;}
      if (shortcut.description.toLowerCase().includes(query)) {score+=1;}
      if (score > 0) {
        res.push({...shortcut, score});
      }
    })
    
    res.sort((a, b) => (b.score - a.score));
    setResults(res)
    console.log(res);
  });


  return (
    <>
    <div>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search for keyboard shortcuts"
        value={query}
        onChange={onChange}
      />
    </div>
    <div className={styles.grid}>
      {results.map((shortcut) => (
        <div key={shortcut.id} className={styles.card}>
          <h2>{shortcut.title}</h2>
          <p className={styles.keyCombination}>{prettifyKeys(shortcut.key, shortcut.os)}</p>
          <p className={styles.description}>{shortcut.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}