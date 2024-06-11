import { MongoClient, Db } from 'mongodb'; 

export let cachedDb: Db | null = null;
export let cachedAcct: string | null = null;

export async function connectToDatabase(uri: string): Promise<Db>{
	if(cachedDb) {
		return cachedDb;
	}
	// Use new db connection
	const client = new MongoClient(uri, {
		monitorCommands: true,
	});
	try {
		await client.connect();
		cachedDb = client.db("EventScraper");
		return cachedDb;
	} catch(error) {
		throw new Error("Error Connecting to MongoDB: " + error);
	}
}

