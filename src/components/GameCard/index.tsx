import * as S from './styles'
import { FavoriteBorder } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { AddShoppingCart } from 'styled-icons/material'

export type GameCardProps = {
  title: string
  developer: string
  image: string
  price: string
}

const GameCard = ({ title, developer, image, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={image} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>
    <S.FavButton role="button">
      <FavoriteBorder aria-label="Add to wishlist" />
    </S.FavButton>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </S.BuyBox>
  </S.Wrapper>
)

export default GameCard
