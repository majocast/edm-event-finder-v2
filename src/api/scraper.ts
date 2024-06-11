const cheerio = require('cheerio');
const axios = require('axios');
import { CardProps } from '../elements/Module/Card';

export default async function Scraper(pageNum?: number) {
  console.log("Scraper is revalidating")
  let url = `https://concerts50.com/upcoming-concerts-in-california/g/dance-electronic`;
  try {
    url = pageNum !== undefined ? `${url}/${pageNum}` : url;
    const axiosRes = await axios(url);
    const htmlData = axiosRes.data;
    const $ = cheerio.load(htmlData);
    const events: CardProps[] = [];
    $('.c50-table-row', htmlData).each(function(index: number, element: number) {
      const artistName = $(element).children('.c50-table-info').children('.c50-title').text().trim();
      const location = $(element).children('.c50-table-info').children('.c50-description').text().trim();
      const date = $(element).children('.c50-table-date').children('.c50-block-date').text().replace(/\n/g, '').trim();
      const photo = $(element).children('.c50-table-date').children('.c50-block-photo').children('a').children('img').attr('src');
      const link = $(element).children('.c50-table-button').children('.tickets').children('button').attr('x-url');
			
			events.push({
        artistName,
        location,
        date,
        photo,
        link
      })
    })
    
    //pushes data back to server
    return events;
  } catch (error) {
    console.error(error);
		return null;
  }
};
