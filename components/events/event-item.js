import Link from 'next/link';
import styles from './event-item.module.css';
function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    return <li className={styles.item}>
        <img src={"/"+image} alt={title} />
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Link href={`/events/${id}`}>Explore Event</Link>
            </div>
        </div>
    </li>
}
export default EventItem;