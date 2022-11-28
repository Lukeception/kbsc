import { useState, useCallback } from "react";
import styles from "./search_kbsc.module.css";


/* import { getShortcutData } from '../data/data_helper';

export async function getStaticProps() {
  const shortcutsJSON = getShortcutData();
  return {props: {shortcutsJSON}};
} */


export default function SearchKBSC() {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");

  const onChange = useCallback((event) => {
    const query = event.target.value
    setQuery(query)
  });

  return (
    <div>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search for keyboard shortcuts"
        value={query}
        onChange={onChange}
      />
    </div>
  )
}