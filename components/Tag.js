import { sizes, genres, sources } from '../puzzles/tagsData';
import styles from './Tag.module.css';
import Link from 'next/link';
export function Tag(name) {
    // add screen reader support for color
    let color = "pink";
    if (sizes.includes(name)) {
        color = "red"
    } else if (genres.includes(name)) {
        color = "blue"
    } else if (sources.includes(name)) {
        color = "green"
    }
    return <Link href={`/tags/${name}`} className={styles.tagWrapper}><span className={styles[`tag-${color}`]}>{name}</span></Link>
}