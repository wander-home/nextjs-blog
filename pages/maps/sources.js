import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { Tag } from "../../components/Tag";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Sources() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>All Sources</h2>
        <ul className={utilStyles.list}>
          <li>
            <p>
              {Tag("blog")} (2014-2017) My original{" "}
              <a
                href={"https://wa1729.blogspot.com/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                Blogspot puzzle blog!
              </a>
            </p>
          </li>
          <li>
            <p>
              {Tag("book")} (2017) My puzzle book, A Beginner&apos;s Guide to
              Logic Puzzles!
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
