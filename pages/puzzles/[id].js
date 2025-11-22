import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/puzzles';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
 
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
 
export async function getStaticPaths() {
  const paths = getAllPostIds();
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
          <Image
            src={`/images/${postData.imageFile}`}
            width={500}
            height={500}
            alt="Puzzle image"
            />
          </div>
          <div>{postData.pzprxs ? <a href={`https://pzprxs.vercel.app/${postData.pzprxs}`} target="_blank">Solve online (pzprxs)</a> : null}</div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }