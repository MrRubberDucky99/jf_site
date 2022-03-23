import { initializeApp } from "firebase/app";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
	doc,
	setDoc,
} from "firebase/firestore";
import { leaderBoard } from "../components/breakout/interface";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_APP_ID,
	authDomain: "website-16f43.firebaseapp.com",
	projectId: "website-16f43",
	storageBucket: "website-16f43.appspot.com",
	messagingSenderId: "531292370818",
	appId: process.env.FIREBASE_APP_KEY,
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function getLeaderboard(setLeaderboard: any) {
	console.log("Getting Leaderboard");
	const Leaderboard: leaderBoard[] = [];
	const q = query(collection(db, "breakout"), where("show", "==", true));

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		console.log("Got Data");
		Leaderboard.push({ name: doc.data().name, score: doc.data().score });
	});
	setLeaderboard(Leaderboard);
}

export async function uploadScore(name: string, score: number) {
	if (name !== "") {
		try {
			await setDoc(doc(db, "breakout", name), {
				name: name,
				score: score,
				show: true,
			});
			console.log("Score Uploaded");
		} catch (e) {
			console.error("Error adding document: ", e);
		}
		name = "";
	}
}
