import { initializeApp } from "firebase/app";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
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
	const Leaderboard: leaderBoard[] = [];
	const q = query(collection(db, "breakout"), where("show", "==", true));

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		Leaderboard.push({ name: doc.data().name, score: doc.data().score });
	});
	setLeaderboard(Leaderboard);
}
