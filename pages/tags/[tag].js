import Layout from "../../components/layout";
import { getAllTagIds, getPuzzlesWithTag } from "../../lib/puzzles";
import utilStyles from "../../styles/utils.module.css";
import { SearchItem } from "../../components/SearchItem";

export async function getStaticProps({ params }) {
  const postData = await getPuzzlesWithTag(params.tag);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTagIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Tag({ postData }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{`Puzzles with Tag`}</h2>
        <ul className={utilStyles.list}>
          {postData.map((postData) => {
            return SearchItem(postData);
          })}
        </ul>
      </section>
    </Layout>
  );
}
