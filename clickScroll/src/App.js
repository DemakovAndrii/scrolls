import "./App.css";
import { useState } from "react";
import Comp from "./Comp";

function App() {
	const [inView, setInView] = useState(0);
	const [x, setX] = useState(0);

	const arr = [1, 2, 3];

	const prev = () => {
		if (inView !== 1) {
			setX(x + 250);
		}
	};
	const next = () => {
		if (inView < arr.length) {
			setX(x - 250);
		}
	};

	return (
		<div className="container">
			<div className="lenght-container">
				{arr.map((num) => (
					<div
						key={num}
						className={inView === num ? "lenght-active" : "lenght"}
					></div>
				))}
			</div>

			<div className="item-container">
				{arr.map((num) => {
					return <Comp key={num} x={x} setInView={setInView} num={num} />;
				})}
			</div>

			<div className="button-container">
				<div className="button" onClick={prev}>
					A
				</div>
				<div className="button" onClick={next}>
					A
				</div>
			</div>
		</div>
	);
}

export default App;
