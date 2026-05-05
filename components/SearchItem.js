import styles from './SearchItem.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export function SearchItem(postData) {
    return <li className={styles.listItem} key={postData.id}>
        <div className={styles.listItemImageWrapper}>
            {postData.imageFile ? <Image
                src={`/images/${postData.imageFile}`}
                fill={true}
                objectFit={'contain'}
                className={styles.listItemImage}
                alt="Image of puzzle"
            /> : <p>No image.</p>}
        </div>
        <div className={styles.listItemText}>
            <Link href={`/puzzles/${postData.id}`} className={styles.listItemTitle}>{postData.title}</Link>
            <br />
            <small className={styles.lightText}>
            <Date dateString={postData.date} />
            </small>
        </div>
    </li>
}