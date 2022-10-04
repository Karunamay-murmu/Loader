import styled from "styled-components";

export const LoaderBackground = styled.div`
	position: relative;
	width: 250px;
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 99%;
	border: 1px solid gray;
`;

export const LoaderWrapper = styled.div`
	width: 224px;
	height: 224px;
	background-color: white;
	border-radius: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid gray;
`;

export const ProgressText = styled.div`
	font-size: 3rem;
`;

export const LoaderSVG = styled.svg`
	width: 255px;
	fill: none;
	position: absolute;
	top: -4px;
	left: -4px;
	transform: rotate(90deg);
`;

export const LoaderCircle = styled.circle`
	fill: none;
	stroke: red;
	stroke-width: 22px;
	stroke-dasharray: 1200;
	stroke-dashoffset: ${(props) => 1200 - Number(props.progress * 12)};
	border-radius: 50%;
	stroke-linecap: round;
	transition: 1000ms;
`;

export const Button = styled.button`
	padding: 0.85rem 1rem;
	background: white;
	border: none;
	box-shadow: 0 0 1px 1px gray;
	border-radius: 0.5rem;
	font-size: 1rem;
	letter-spacing: 0.5px;
	width: 120px;
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;
