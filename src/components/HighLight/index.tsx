import Button from 'components/Button'
import * as S from './styles'

export type HighLightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
}

const HighLight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage
}: HighLightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default HighLight
