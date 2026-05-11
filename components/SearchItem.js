import styles from "./SearchItem.module.css";
import Link from "next/link";
import { Tag } from "./Tag";
import Image from "next/image";

export function SearchItem(postData) {
  return (
    <li className={styles.listItem} key={postData.id}>
      <Link href={`/puzzles/${postData.id}`}>
        <div className={styles.listItemImageWrapper}>
          {postData.imageFile ? (
            <Image
              src={`/images/${postData.imageFile}`}
              fill={true}
              sizes={"100px"}
              className={styles.listItemImage}
              alt="Image of puzzle"
            />
          ) : (
            <p>No image.</p>
          )}
        </div>
      </Link>
      <div className={styles.listItemText}>
        <Link href={`/puzzles/${postData.id}`} className={styles.listItemTitle}>
          {postData.title}
        </Link>
        <div className={styles.listItemTags}>
          {postData.tags.map((tag) => {
            return Tag(tag);
          })}
        </div>
      </div>
    </li>
  );
}
