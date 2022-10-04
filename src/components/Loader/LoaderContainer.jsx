import React from "react";
import useLoader from "../../hooks/useLoader";
import {
	Button,
	ButtonContainer,
	Container,
	LoaderBackground,
	LoaderCircle,
	LoaderSVG,
	LoaderWrapper,
	ProgressText,
} from "./Loader.styled";

function LoaderContainer() {
	const { progress, pause, startAndRestartLoader, pauseAndResumeLoader } =
		useLoader({ interval: 1000 });
	return (
		<Container>
			<LoaderBackground className="outer-div">
				<LoaderSVG
					data-testid="id_loader_svg"
					viewBox="0 0 409 409"
					xmlns="http://www.w3.org/2000/svg"
				>
					<LoaderCircle
						progress={progress}
						cx="204.5"
						cy="204.5"
						r="189.5"
						stroke="black"
						stroke-width="30"
					/>
				</LoaderSVG>
				<LoaderWrapper className="inner-div">
					<ProgressText>{progress}%</ProgressText>
				</LoaderWrapper>
			</LoaderBackground>
			<ButtonContainer>
				<Button
					data-testid="id_start_btn"
					type="button"
					onClick={startAndRestartLoader}
				>
					Start
				</Button>
				<Button
					data-testid="id_pause_btn"
					type="button"
					onClick={pauseAndResumeLoader}
				>
					{!pause ? "Pause" : "Resume"}
				</Button>
			</ButtonContainer>
		</Container>
	);
}

export default LoaderContainer;
