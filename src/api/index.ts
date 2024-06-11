import Scraper from "./scraper";

export default async function getStaticProps() {
	console.log("running getStaticProps");
	const scrapedData = await Scraper();
	return {
		props: {
			scrapedData,
		},
		revalidate: 10,
	}
}
