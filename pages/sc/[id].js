import { getShortcutIds, getShortcutData, getSingleShortcutData } from "../../data/data_helper";

export async function getStaticPaths() {
    const paths = getShortcutIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const shortcutData = getSingleShortcutData(params.id)
    return {
        props: {
            shortcutData
        }
    }
}

export default function ShortcutPage({ shortcutData }) {
  return (
      <h1>{shortcutData.title}</h1>
  )
}