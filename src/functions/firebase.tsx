import { initializeApp } from "firebase/app";
import {
	collection,
	query,
	where,
	onSnapshot,
	getFirestore,
} from "firebase/firestore";
import { leaderBoard } from "../components/breakout/interface";

const firebaseConfig = {
	apiKey: "AIzaSyAgzlnRnOGk01BFMmS3vD0sjUlqsToaHDA",
	authDomain: "website-16f43.firebaseapp.com",
	projectId: "website-16f43",
	storageBucket: "website-16f43.appspot.com",
	messagingSenderId: "531292370818",
	appId: "1:531292370818:web:b111c0c5168bb6e0e1019b",
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export function getLeaderboard(setLeaderboard: any) {
	const leaderboard: leaderBoard[] = [];

	const q = query(collection(db, "breakout"));
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		querySnapshot.forEach((doc) => {
			leaderboard.push({ name: doc.data().name, score: doc.data().score });
			console.log(leaderboard);
		});
		setLeaderboard(leaderboard);
		console.log(leaderboard);
	});
	console.log(leaderboard);
	unsubscribe();
	console.log(leaderboard);
}
