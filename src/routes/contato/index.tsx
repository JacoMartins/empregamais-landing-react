import { useState } from 'react'
import { BannerSection, ContainerInBanner, Main, SearchInput } from './styles'
import art4 from '../../assets/images/4.svg';
import siteView2 from '../../assets/images/siteview2.png';
import List from '../../components/list';
import { benefitsData, blockData, companyListData, educationalData } from '../../utils/data';
import { Asterisk, Circle } from 'phosphor-react';

export default function Contato() {
  const [headerHeight, setHeaderHeight] = useState(0);
  setTimeout(() => {
    setHeaderHeight(document.getElementById('header')?.clientHeight || 0);
  }, 0);

  return (
    <Main>
      <BannerSection headerHeight={headerHeight}>
        <ContainerInBanner>
          <div>
            <div>
              <h1>Fale Conosco</h1>
              <h3>Ficou com alguma dúvida ou gostaria de saber mais sobre o nosso portal? Entre em contato com a gente! Buscaremos responder o mais rápido possível.</h3>
            </div>

            <img src={art4} alt='Pessoas com vestes sociais' />
          </div>

          <div>
              <form>
                <div>
                  <input type='text' placeholder='Seu nome' />
                  <input type='email' placeholder='Seu melhor email' />
                </div>

                <div>
                  <input type='text' placeholder='Telefone para contato' />
                  <input type='email' placeholder='Como nos encontrou?' />
                </div>

                <input type='text' placeholder='Assunto' />
                <input type='text' placeholder='Sua mensagem' />                
              </form>
            </div>
        </ContainerInBanner>
      </BannerSection>
    </Main>
  )
}
