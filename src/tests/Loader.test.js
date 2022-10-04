import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LoaderContainer from "../components/Loader/LoaderContainer";

test("it should contain two buttons, start and paush", () => {
	render(<LoaderContainer />);
	const startBtn = screen.getByTestId("id_start_btn");
	const pauseBtn = screen.getByTestId("id_pause_btn");
	expect(startBtn).toBeInTheDocument();
	expect(pauseBtn).toBeInTheDocument();
});

test("it should render loader svg", () => {
	render(<LoaderContainer />);
	const loaderSvg = screen.getByTestId("id_loader_svg");
	expect(loaderSvg).toBeInTheDocument();
});
