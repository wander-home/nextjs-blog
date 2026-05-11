import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getMostRecentPuzzle } from "../lib/puzzles";
import { SearchItem } from "../components/SearchItem";

export async function getStaticProps() {
  const mostRecentPuzzle = await getMostRecentPuzzle();
  return {
    props: {
      mostRecentPuzzle,
    },
  };
}

export default function Home({ mostRecentPuzzle }) {
  console.log(mostRecentPuzzle);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Check out my puzzles:</h2>
        <ul className={utilStyles.list}>
          <li>
            <a href={"/maps/sources"}>All Sources</a>
          </li>
          <li>
            <a href={"/maps/genres"}>All Genres</a>
          </li>
          <li>
            <a href={"/tags/favorites"}>My Favorite Puzzles!</a>
          </li>
          <li>The Most Recent Puzzle:</li>
        </ul>
        {SearchItem(mostRecentPuzzle)}
      </section>
    </Layout>
  );
}
