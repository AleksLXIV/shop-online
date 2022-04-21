import styled from 'styled-components';

const ButtonStyled = styled.button`
	margin-top: auto;
`

export const CardDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 80px;
	right: 70px;
	z-index: 5;
	${ButtonStyled}
`
export const CardItemContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	overflow-x: hidden;
`

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto
`