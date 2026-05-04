import Layout from '../../components/layout';
import { getAllTagIds, getPuzzlesWithTag } from '../../lib/puzzles';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
 
export async function getStaticProps({ params }) {
  const postData = await getPuzzlesWithTag(params.tag);
  console.log(postData);
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
            {postData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/puzzles/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }