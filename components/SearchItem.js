import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export function SearchItem(postData) {
    return <li className={utilStyles.listItem} key={postData.id}>
            <div className={utilStyles.listItemImage}>
                {postData.imageFile ? <Image
                src={`/images/${postData.imageFile}`}
                width={100}
                height={100}
                alt="Image of puzzle"
                /> : <p>No image.</p>}
            </div>
            <div className={utilStyles.listItemText}>
                <Link href={`/puzzles/${postData.id}`}>{postData.title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </small>
            </div>
        </li>
}