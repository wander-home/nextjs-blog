import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPuzzlesData } from "../lib/puzzles";
import { SearchItem } from "../components/SearchItem";

export async function getStaticProps() {
  const allPostsData = getSortedPuzzlesData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((postData) => {
            return SearchItem(postData);
          })}
        </ul>
      </section>
    </Layout>
  );
}
