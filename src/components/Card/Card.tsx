import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { TCardValue } from "../../constants/card";

interface ICard {
	value: TCardValue;
}

const Card = ({ value }: ICard) => {
	return (
		<MuiCard
			sx={{
				maxWidth: 345,
				boxShadow: "none",
				padding: "1em",
				height: "100%",
				backgroundColor: "#8BC6EC",
				backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
			}}
		>
			<CardActionArea sx={{ height: "100%" }}>
				{/* <CardMedia
					component="img"
					height="140"
					image="/static/images/cards/contemplative-reptile.jpg"
					alt="green iguana"
				/> */}
				<CardContent>
					<Typography
						gutterBottom
						variant="h4"
						component="div"
						color={"white"}
						textAlign={"center"}
						margin={0}
					>
						{value}
					</Typography>
					{/* <Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography> */}
				</CardContent>
			</CardActionArea>
			{/* <CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
			</CardActions> */}
		</MuiCard>
	);
};

export default Card;
