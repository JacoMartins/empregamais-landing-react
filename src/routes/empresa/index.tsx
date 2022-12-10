import { useState } from 'react'
import { BannerSection, ContainerInBanner, ContainerInInformation, ContainerProsSection, InformationSection, Main, ProsSection, SearchInput } from './styles'
import art2 from '../../assets/images/2.svg';
import siteView1 from '../../assets/images/siteview1.png';
import List from '../../components/list';
import { benefitsData, blockData, companyListData } from '../../utils/data';
import { Asterisk, Circle } from 'phosphor-react';

export default function Empresa() {
  const [headerHeight, setHeaderHeight] = useState(0);
  setTimeout(() => {
    setHeaderHeight(document.getElementById('header')?.clientHeight || 0);
  }, 0);

  return (
    <Main>
      <BannerSection headerHeight={headerHeight}>
        <ContainerInBanner>
          <div>
            <h1>Receba mais currículos e potencialize as suas contratações!</h1>
            <h3>Tecnologia para contratações mais ágeis e eficientes com foco em mão de obra operacional</h3>

            <div>
              <button type='button'>Solicite uma demonstração</button>
            </div>
          </div>

          <img src={art2} alt='Ilustração de pessoas arquitetando e construindo' />
        </ContainerInBanner>
      </BannerSection>

      <InformationSection>
        <ContainerInInformation>
          <div>
            <h1>Receba mais currículos em menos tempo</h1>
          </div>

          <div>
            {companyListData.map((item, index) => <List icon={item.icon} title={item.title} content={item.content} spanColor='var(--blue-800)' iconColor='var(--blue-250)' key={item.title} />)}
          </div>
        </ContainerInInformation>
      </InformationSection>

      <ProsSection>
        <ContainerProsSection>
          <div>
            <h1>Tenha mais benefícios por controlar totalmente o seu processo seletivo:</h1>
          </div>

          <div>
            <div>
              {benefitsData.map((item, index) => <List title={item.content} spanColor='transparent' iconColor='var(--blue-800)' icon={<Circle width={12} weight='fill' />} key={item.content}/>)}
            </div>
            <img src={siteView1} alt='Visualização do site em tela de computador' />
          </div>
        </ContainerProsSection>
      </ProsSection>
    </Main>
  )
}
