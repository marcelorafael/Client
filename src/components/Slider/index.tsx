import SlickSlider, { Settings } from 'react-slick'
import * as S from './styles'
export type SliderSttings = Settings

export type Sliderprops = {
  children: React.ReactNode
  settings: SliderSttings
}

const Slider = ({ children, settings }: Sliderprops) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
