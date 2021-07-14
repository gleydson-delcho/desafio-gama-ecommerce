import { useState } from "react";
import { CountDown } from "../../components/CountDown";
import Logo from '../../assets/images/logo.png';

import './styles.scss';

export default function Home() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [mailStorage, setMailStorage] = useState([{}])
  
  
  const handleSubmit = () => {
    const mail = [];
    try {
        const email = { email: value};
        
        mail.push(email);     
        
        setValue(''); 
             
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    setMailStorage(mail)
  }
  localStorage.setItem('Emails', JSON.stringify(mailStorage));  

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
    </div>
  )
}