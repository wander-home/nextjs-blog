import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export function SearchItem(postData) {
    return <li className={utilStyles.listItem} key={postData.id}>
            <Link href={`/puzzles/${postData.id}`}>{postData.title}</Link>
            <br />
            <small className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </small>
        </li>
}