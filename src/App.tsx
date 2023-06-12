import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import { DEFAULT_CARDS } from "./constants/card";
import Game from "./pages/Game";

function App() {
	const [testMsg, setTestMsg] = useState<string>();
	const inputRef = useRef<HTMLInputElement>(null);

	// const socket = io("localhost:6010", {
	// 	transports: ["websocket", "polling", "flashsocket"],
	// });

	const socket = io("https://planning-poker-server-fhnd.onrender.com/", {
		transports: ["websocket", "polling", "flashsocket"],
	});

	useEffect(() => {
		console.log(`init client`);

		socket.on("init", () => {
			return String(`User: ${Date.now()}`);
		});

		socket.on("message", (msg: string) => {
			console.log(`hello ${msg}`);
			setTestMsg(msg);
		});
	}, []);

	const handleSubmit = () => {
		if (inputRef.current) {
			const msg = inputRef.current?.value;
			console.log(msg);
			socket.emit("message", msg);

			inputRef.current.value = "";
		}
	};

	return (
		<div className="App">
			Hello world!
			<input ref={inputRef} type="text" />
			<button onClick={handleSubmit}>Send</button>
			<h1>{`received message: ${testMsg}`}</h1>
			{DEFAULT_CARDS.FIBONACCI.values && (
				<Game cardValues={DEFAULT_CARDS.FIBONACCI.values} />
			)}
		</div>
	);
}

export default App;
