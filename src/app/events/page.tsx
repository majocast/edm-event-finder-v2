import Card from "@/elements/Module/Card";
import styles from "./Events.module.css";
import { ReactElement } from "react";
//import getStaticProps from "@/api/index";

import Scraper from "../../api/scraper";

interface CardProps {
	artistName?: string;
	location?: string;
	date?: string;
	link?: string;
}


let cachedEvents: CardProps[] | null = null; 
//revalidates information on events page after 1 day
/*
export async function getStaticProps() {
	console.log("running getStaticProps");
	const scrapedData = await Scraper();
	return {
		props: {
			scrapedData,
		},
		revalidate: 10,
	}
}
*/

async function getEventData() {
	/*
	const res = await fetch("", {next: {revalidate: 86400}});
	const events = await res.json();
	*/
	if(cachedEvents !== null) {
		console.log("returning cached events");
		return cachedEvents;
	}
	try {
		console.log("setting cached events");
		cachedEvents = await Scraper();
	} catch (error) {
		console.error();
	}
	return cachedEvents;
}

async function processEventData() {
	const cachedEvents = await getEventData();
	if(cachedEvents !== null) {
		return cachedEvents.map(function (event, index) {
			return <Card {...event} key={index}/>
		})
	}
}

export default async function events(): Promise<ReactElement> {
	const processedEventData = await processEventData();


	if(!processedEventData || processedEventData.length === 0) {
		return <>Loading Data...</>
	}


	return <div className={styles.events}>
		{processedEventData}
	</div>
}