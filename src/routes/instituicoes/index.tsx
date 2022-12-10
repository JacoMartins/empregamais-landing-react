import { useState } from 'react'
import { BannerSection, ContainerInBanner, ContainerInInformation, InformationSection, Main, SearchInput } from './styles'
import art3 from '../../assets/images/3.svg';
import siteView2 from '../../assets/images/siteview2.png';
import List from '../../components/list';
import { benefitsData, blockData, companyListData, educationalData } from '../../utils/data';
import { Asterisk, Circle } from 'phosphor-react';

export default function Instituicoes() {
  const [headerHeight, setHeaderHeight] = useState(0);
  setTimeout(() => {
    setHeaderHeight(document.getElementById('header')?.clientHeight || 0);
  }, 0);

  return (
    <Main>
      <BannerSection headerHeight={headerHeight}>
        <ContainerInBanner>
          <div>
            <h1>Gere mais oportunidade de trabalho para alunos e egressos</h1>
            <h3>Tecnologia para contratações mais ágeis e eficientes com foco em mão de obra operacional</h3>

            <div>
              <button type='button'>Solicite uma demonstração</button>
            </div>
          </div>

          <img src={art3} alt='Pessoas com vestes sociais' />
        </ContainerInBanner>
      </BannerSection>

      <InformationSection>
        <ContainerInInformation>
          <div>
            <div>
              <img src={siteView2} alt='Computadores com uma demonstração do site' />
              <h1>Nós temos a solução completa para pontecializar a gestão de carreiras da sua instituição!</h1>
            </div>
            <h2>Conecte a sua instituição com o mercado de trabalho. Tenha indicadores completos de empregabilidade dos alunos e egressos</h2>
          </div>


          <div>
            {educationalData.map((item, index) => <List icon={item.icon} title={item.title} spanColor='var(--blue-800)' iconColor='var(--blue-250)' key={item.title} />)}
          </div>
        </ContainerInInformation>
      </InformationSection>
    </Main>
  )
}
