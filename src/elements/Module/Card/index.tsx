import { ReactElement } from "react";
import Slander from "../../../../public/example-edm-img.jpeg";
import CTA from "../../Module/SubModules/CTA";
import styles from "./Card.module.css";
import SaveButton from "../SubModules/SaveButton";

export interface CardProps {
	artistName?: string;
	location?: string;
	date?: string;
	link?: string;
	photo?: string;
}

export default function Card(props: CardProps): ReactElement {
	return <div className={styles.card}>
		<img src={props.photo} alt="Img Goes here" className={styles.imageContainer}/>
		<section className={styles.descContainer}>
			<h1 className={styles.cardHeader}>{props.artistName ? props.artistName : "Artist"}</h1>
			<span className={styles.cardBody}>{props.location ? props.location : "Location"}</span>
			<span className={styles.cardBody}>{props.date ? props.date : "Date"}</span>
			<CTA link={props.link ? props.link : "Dead Link"}/>
			
		</section>
	</div>
}