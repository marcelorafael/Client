import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import HighLight, { HighLightProps } from 'components/HighLight'

import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import * as S from './styles'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

export type HomeTemplteProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighLightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighLight: HighLightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighLight: HighLightProps
}

const Home = ({
  banners,
  freeGames,
  freeHighLight,
  mostPopularGames,
  mostPopularHighLight,
  newGames,
  upcommingGames,
  upcommingHighLight,
  upcommingMoreGames
}: HomeTemplteProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <HighLight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>
    </Container>

    <Container>
      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <HighLight {...upcommingHighLight} />
        <GameCardSlider items={upcommingMoreGames} />
      </S.SectionUpcoming>
    </Container>

    <Container>
      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        <HighLight {...freeHighLight} />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <Container>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </Container>
  </section>
)

export default Home
