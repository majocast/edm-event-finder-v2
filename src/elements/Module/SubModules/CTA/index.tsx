"use client"

import { ReactElement } from "react";
import styles from "./CTA.module.css";

type CTAProps = {
	link: string;
}

export default function CTA(props: CTAProps): ReactElement {
	const link = props.link;

	return <a href={link} className={styles.CTA}>
		View Tickets
	</a>
}