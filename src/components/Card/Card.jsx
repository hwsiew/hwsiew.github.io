import styled from 'styled-components';

const CardRoot = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

const ImageContainer = styled.div`
	background-image: url(${ props => props.url });
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	min-width: 250px;
	min-height: 200px;
	margin-bottom:1rem;
	border:1px solid #9c9c9c;
	border-radius: 5px;
	@media (min-width: 576px) {
		margin-right:1rem;
		width:30%;
		min-height: 100px;
	}
`;

export default function Card (props) {

	const {
		imageUrl,
		title = '',
		subtitle = '',
		children
	} = props;

	return (
		<CardRoot>
			<ImageContainer url={imageUrl} />
			<div className="w-full">
				<div className="font-semibold text-xl uppercase">
					{title}
				</div>
				<div className="text-gray-500 text-lg text-base">
					{subtitle}
				</div>
				<div>
					{children}	
				</div>
			</div>
		</CardRoot>
	);
}