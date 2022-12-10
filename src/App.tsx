import { useState } from 'react'
import { BannerSection, Block, BlockSection, ContainerBlockSection, ContainerInBanner, ContainerInInformation, InformationSection, Main, SearchInput } from './styles/home'
import { MagnifyingGlass } from 'phosphor-react';
import art5 from './assets/images/5.svg';
import art1 from './assets/images/1.svg'
import List from './components/list';
import { blockData, forYouListData } from './utils/data';

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  setTimeout(() => {
    setHeaderHeight(document.getElementById('header')?.clientHeight || 0);
  }, 0);

  return (
    <Main>
      <BannerSection headerHeight={headerHeight}>
        <ContainerInBanner>
          <div>
            <h3>A sua próxima oportunidade no mercado de trabalho está aqui!</h3>
            <h1>Encontre agora o seu próximo emprego!</h1>

            <div>
              <button type='button'>Cadastrar-se gratuitamente</button>
              <SearchInput>
                <MagnifyingGlass size={24} weight={'bold'} />
                <input type='text' placeholder='Buscar' className='searchInput' />
              </SearchInput>
            </div>
          </div>

          <img src={art1} alt='Ilustração de pessoas arquitetando e construindo' />
        </ContainerInBanner>
      </BannerSection>

      <InformationSection>
        <ContainerInInformation>
          <div>
            <img src={art5}></img>
            <h1>Estamos ao seu lado para apoiar você na sua jornada profissional!</h1>
          </div>

          <div>
            {forYouListData.map((item, index) => <List icon={item.icon} title={item.title} content={item.content} spanColor='var(--green-800)' iconColor='var(--green-250)' key={item.title} />)}
          </div>
        </ContainerInInformation>
      </InformationSection>

      <BlockSection>
        <ContainerBlockSection>
          <div>
            <h2>Veja o que você pode encontrar aqui</h2>
            <h1>Vagas de emprego em todo o Ceará.</h1>
          </div>

          <div>
            {blockData.map((item, index) => <Block href={item.url} key={item.title}>{item.title}</Block>)}
          </div>

          <button onClick={() => {window.open('https://fortaleza.portalempregamais.com.br/register')}}>
            <h2>Clique aqui e faça agora o seu cadastro gratuito em nossa plataforma.</h2>
            <span>Aproveite a oportunidade de encontrar o seu novo emprego!</span>
          </button>
        </ContainerBlockSection>
      </BlockSection>
    </Main>
  )
}

export default App
