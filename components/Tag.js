import styles from './Tag.module.css';
import Link from 'next/link';
export function Tag(name) {
    return <Link href={`/tags/${name}`} className={styles.tagWrapper}><span className={styles.tag}>{name}</span></Link>
}