import Layout from '../../components/layout';
import { getAllPuzzleIds, getPuzzleData } from '../../lib/puzzles';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
 
export async function getStaticProps({ params }) {
  const postData = await getPuzzleData(params.id);
  return {
    props: {
      postData,
    },
  };
}
 
export async function getStaticPaths() {
  const paths = getAllPuzzleIds();
  return {
    paths,
    fallback: false,
  };
}
 
export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div>
          {postData.imageFile ? <Image
            src={`/images/${postData.imageFile}`}
            width={500}
            height={500}
            alt="Image of puzzle"
            /> : <p>No image.</p>}
          </div>
          <div>{postData.pzprxs ? <a href={`https://pzprxs.vercel.app/${postData.pzprxs}`} target="_blank">Solve online (pzprxs)</a> : null}</div>
          {postData.tags && postData.tags.map((tag) => {
            return <Link href={`/tags/${tag}`}>{`${tag}  `}</Link>
          })}
        </article>
      </Layout>
    );
  }