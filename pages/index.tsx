import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Tweet} from "../src/components/TweetCard";
import {TweetCard} from "../src/components/TweetCard";

export default function Home({props}) {
	return (
			<div className={styles.container}>
				<Head>
					<title>tweet-analyzer</title>
					<link rel="icon" href="/favicon.ico"/>
				</Head>
				
				<main className={styles.main}>
					<div>
						{props.map((t: Tweet) =>
								<div>
									<TweetCard
											tweetId={t.tweetId}
											userId={t.userId}
											text={t.text}
											imageUrls={t.imageUrls}
											favorite={t.favorite}
											retweet={t.retweet}
									/>
								</div>
						)}
					</div>
				</main>
				
				<footer className={styles.footer}>
					<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
					>
						Powered by{' '}
						<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
					</a>
				</footer>
			</div>
	)
}


// This function gets called at build time
export async function getStaticProps() {
	// Call an external API endpoint to get posts
	console.error(process.env.URL)
	const res = await fetch(process.env.URL, {
		headers: {
			'x-api-key': process.env.KEY
		}
	})
	const props = await res.json()
	
	return {
		props: {
			props,
		},
	}
}
