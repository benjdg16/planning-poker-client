import { TCardType, TCardValue, DEFAULT_CARDS } from "../constants/card";

interface IGame {
	cardValues: Array<TCardValue>;
}

const Game = ({ cardValues }: IGame) => {
	const renderCard = (value: TCardValue) => <div className="card">{value}</div>;

	return (
		<div className="game">
			<div className="cards-container">
				{cardValues && cardValues?.map((value) => renderCard(value))}
			</div>
		</div>
	);
};

export default Game;
