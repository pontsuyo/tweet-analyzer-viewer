import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LineChart, {TimePoint} from "./LineChart";
import {Box, Grid} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
		createStyles({
			root: {
				maxWidth: 2000,
				height: '20vw'
			},
			details: {
				display: 'flex',
				flexDirection: 'column',
			},
			media: {
				height: 0,
				paddingTop: '56.25%', // 16:9
			},
			expand: {
				transform: 'rotate(0deg)',
				marginLeft: 'auto',
				transition: theme.transitions.create('transform', {
					duration: theme.transitions.duration.shortest,
				}),
			},
			expandOpen: {
				transform: 'rotate(180deg)',
			},
			avatar: {
				backgroundColor: red[500],
			},
		}),
);

export interface Tweet {
	tweetId: BigInt;
	userId: BigInt;
	text: string;
	imageUrls: string[];
	favorite: TimePoint[];
	retweet: TimePoint[];
}

export function TweetCard(tweet: Tweet) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	
	return (
			<Card className={classes.root}>
				<Grid item xs container direction="row" spacing={2} justify="center">
					<Grid item xs={10} sm={4}>
						<CardHeader
								avatar={
									<Avatar aria-label="user-image">
										user image
									</Avatar>
								}
								action={
									<IconButton aria-label="details">
										<MoreVertIcon/>
									</IconButton>
								}
								title="user-name"
								subheader={tweet.tweetId}
						/>
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								{tweet.text}
							</Typography>
						</CardContent>
					
					</Grid>
					<Grid item>
						<Box height={1/4}>
							{/* linechart of counts of RT and fav*/}
							<LineChart
									favorite={tweet.favorite}
									retweet={tweet.retweet}
							/>
						</Box>
					</Grid>
				</Grid>
			</Card>
	);
}
