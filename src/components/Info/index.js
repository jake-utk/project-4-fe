import React from "react";
import { Button } from "../Styles";
import styled from "styled-components";

const Container = styled.div`
	background: ${({ lightBg }) => (lightBg ? "#9b9388" : "#1f262E")};
	color: #d9d5b6;

	@media screen and (max-width: 780px) {
		padding: 100px 0;
	}
`;

const Wrapper = styled.div`
	display: grid;
	height: 860px;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%;
	z-index: 1;
`;

const Row = styled.div`
	align-items: center;
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};

	@media screen and (max-width: 780px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
	}
`;

const ColumnOne = styled.div`
	grid-area: col1;
	margin-bottom: 15px;
	padding: 0 15px;
`;

const ColumnTwo = styled.div`
	grid-area: col2;
	margin-bottom: 15px;
	padding: 0 15px;
`;

const Content = styled.div`
	max-width: 540px;
	padding-bottom: 60px;
	padding-top: 0;
`;

const BigP = styled.p`
	color: #9b9388;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	line-height: 16px;
	margin-bottom: 16px;
	text-transform: uppercase;
`;

const LittleP = styled.p`
	color: ${({ darkText }) => (darkText ? "#3b3517" : "#d9d5b6")};
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 35px;
	max-width: 440px;
`;

const H1 = styled.h1`
	color: ${({ lightText }) => (lightText ? "#9b9388" : "#3b3517")};
	font-size: 48px;
	font-weight: 600;
	line-height: 1.1;
	margin-bottom: 24px;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;
`;

const Img = styled.img`
	margin: 0 0 10px 0;
	padding-right: 0;
	width: 100%;
`;

const Info = ({
	id,
	lightBg,
	lightText,
	lighTextDesc,
	topLine,
	headline,
	description,
	buttonLabel,
	imgStart,
	img,
	alt,
	dark,
	primary,
	darkText,
}) => {
	return (
		<Container lightBg={lightBg} id={id}>
			<Wrapper>
				<Row imgStart={imgStart}>
					<ColumnOne>
						<Content>
							<BigP>{topLine}</BigP>
							<H1 lightText={lightText}>{headline}</H1>
							<LittleP darkText={darkText}>{description}</LittleP>
							<ButtonContainer>
								<Button
									to='home'
									offset={-80}
									exact='true'
									primary={primary ? 1 : 0}
									dark={dark ? 1 : 0}>
									{buttonLabel}
								</Button>
							</ButtonContainer>
						</Content>
					</ColumnOne>
					<ColumnTwo>
						<ImgContainer>
							<Img src={img} alt={alt} />
						</ImgContainer>
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default Info;
