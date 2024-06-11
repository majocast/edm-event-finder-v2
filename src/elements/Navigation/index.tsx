import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
	return <nav className={styles.nav}>
		<Link className={styles.page} href="/">EVENT FINDER</Link>
		<div className={styles.rightNav}>
			<Link className={styles.page} href="/events">EVENTS</Link>
			<Link className={styles.page} href="/profile">PROFILE</Link>
		</div>
	</nav>
}