import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getNumberOfPuzzlesByGenre } from "../../lib/puzzles";
import { Tag } from "../../components/Tag";

export async function getStaticProps() {
  const puzzlesPerGenre = getNumberOfPuzzlesByGenre();
  const genres = Object.keys(puzzlesPerGenre);
  genres.sort(function (a, b) {
    return puzzlesPerGenre[b] - puzzlesPerGenre[a] || a.localeCompare(b);
  });
  return {
    props: {
      genres,
      puzzlesPerGenre,
    },
  };
}

export default function Genres({ genres, puzzlesPerGenre }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>All Genres</h2>
        <ul className={utilStyles.list}>
          {genres.map((genre) => {
            return (
              <li key={genre}>
                {Tag(genre)}
                {` ${puzzlesPerGenre[genre]}`}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
