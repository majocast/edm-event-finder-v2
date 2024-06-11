import { ReactElement } from "react";
import { cachedDb, cachedAcct } from "../../../../app/mongo";
import { NextApiResponse } from "next";

export interface CardProps {
	artistName?: string;
	location?: string;
	date?: string;
	link?: string;
}

export default async function SaveButton(props: CardProps): Promise<ReactElement> {
	async function saveEvent(props: CardProps) {
		let account = await cachedDb?.collection('accounts').findOne({username: cachedAcct})
		.then((res) => {
			console.log(res);
			if(res) return res.json();
		}).catch((error) => {
			console.log(error);
		});
	}

	return <><button>save</button></>
}