import { useState } from "react";
import { CountDown } from "../../components/CountDown";
import Logo from '../../assets/images/logo.png';

import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import './styles.scss';


export default function Home() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const parseData = JSON.parse(String(localStorage.getItem('Emails'))) || []  
  
  const handleSubmit = () => {
    try {
      const email = { email: value };
      
      parseData.push(email);
      console.log(parseData);
      
      localStorage.setItem('Emails', JSON.stringify(parseData));
      setValue('');

    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }

  return (
    <div className="containerHome">
      <header>
        <img src={Logo} alt="logoImage" />
        <h2>Preparem-se para as maiores  ofertas do mercado</h2>
      </header>
      <div className="containerInfo" >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna augue,
          nec interdum leo pharetra ac. Vestibulum arcu mi, rutrum eget consequat vel, rhoncus ut lorem!
        </p>
        <CountDown />
      </div>
      <div className="containerForm">
        <h2>Digite seu melhor e-mail no campo abaixo e receba todas as promoções!</h2>
        <div className="labelForm">
          <label htmlFor="email">E-mail:</label>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
          <button onClick={handleSubmit}>Enviar</button>
        </div>
        {error && <p><span>Erro:</span>Dados não encontrados</p>}
      </div>
      <div className="icons">
        <span><a href="/"><FaFacebookSquare color="#3b5998" size="30" /></a></span>
        <span><a href="/"><FaInstagram color="#dd2a7b" size="30" /></a></span>
        <span><a href="/"><FaTwitter color="#3b5998" size="30" /></a></span>
      </div>
    </div>
  )
}