import React from 'react'
import {CardItemContainer, ItemDetailsContainer, NameContainer, PriceContainer, ImgContainer} from './cart-item.styles'

const CartItem = ({item: {imageUrl, price, name, quantity}})=>(
	<CardItemContainer>
		<ImgContainer src={imageUrl} alt="item"/>
		<ItemDetailsContainer>
			<NameContainer>{name}</NameContainer>
			<PriceContainer>
				{quantity} x ${price}
			</PriceContainer>
		</ItemDetailsContainer>
	</CardItemContainer>
);

export default CartItem