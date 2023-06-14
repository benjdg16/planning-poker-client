import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Card from "../components/Card";

import { TCardType, TCardValue, DEFAULT_CARDS } from "../constants/card";

interface IGame {
	cardValues: Array<TCardValue>;
}

const Game = ({ cardValues }: IGame) => {
	const renderCard = (value: TCardValue) => <div className="card">{value}</div>;
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));
	const bull = (
		<Box
			component="span"
			sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
		>
			•
		</Box>
	);

	return (
		<div className="game">
			<CssBaseline />
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				<Grid item xs={12}>
					<Grid container justifyContent="center" spacing={2}>
						{cardValues.map((value) => (
							<Grid key={value} item>
								<Paper
									sx={{
										// height: 140,
										width: "100%",
										backgroundColor: (theme) =>
											theme.palette.mode === "dark" ? "#1A2027" : "#fff",
										padding: "8px",
									}}
									// elevation={}
								>
									{/* {value} */}
									<Card value={value} />
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Game;
