import React from 'react';
import MailChimpForm from './MailChimpForm';

const MainSection = () => {
    return(
        <div>
            <div className='main-section'>
            <img className='logo' src={require('../images/logo-svg.svg')} />
                <div className='text-intro'>
                    <h2>Descubra os melhores conteúdos sobre produto e/ou ciência de dados produzidos por mulheres</h2>
                    <p>Faz uma lista mental de 5 pessoas que produzem conteúdo sobre tecnologia.
                    Quantas são mulheres? Pois é.
                    
                    Por isso resolvemos fazer essa newsletter:
                    Uma curadoria feita com carinho sobre os dois assuntos que mais têm bombado no mercado: product management e data science, produzidos exclusivamente por mulheres. 
                    Direto na sua caixa de entrada, quinzenalmente.</p>
                    <p>Coloca seu e-mail aqui e chega mais:</p>
                    
                    <MailChimpForm/>
                </div>
            </div>
        </div>
    )
}

export default MainSection;