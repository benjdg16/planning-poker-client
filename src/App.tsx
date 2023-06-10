import { useEffect, useRef } from "react";
import io from "socket.io-client";

// const socket = io("localhost:6010");

function App() {
	const id = useRef(`${Date.now()}`);
	const editor = useRef<any>(null);
	const remote = useRef(false);

	useEffect(() => {
		const socket = io("localhost:6010", {
			transports: ["websocket", "polling", "flashsocket"],
		});
		console.log(`init client`);
		socket.emit("init", "world");
		socket.on("inits", (x: any) => console.log(x));
		// socket.on(
		// 	"new-operations",
		// 	({ editorId, ops }: { editorId: string; ops: string }) => {
		// 		if (id.current !== editorId) {
		// 			remote.current = true;
		// 			JSON.parse(ops).forEach((ops: any) =>
		// 				editor.current!.applyOperation(ops)
		// 			);
		// 			remote.current = false;
		// 		}
		// 	}
		// );
	}, []);
	return <div className="App">Hello world!</div>;
}

export default App;
