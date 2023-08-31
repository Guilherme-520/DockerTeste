import { useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import api from './Api';
import '../Buscador.css';
function Buscador() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  async function search(){
    if (input === "") {
      alert("Por favor digite um cep")
      return;
    }
     try {
       const response = await api.get(`${input}/json`);
       setCep(response.data)
       setInput("")
       
     } catch {
       alert("Erro ao buscar")
       setInput(" ");
     }
   }
  return (

   

      <div className="container">
      <h1 className="title">Buscador</h1>

      <div className="containerInput">
        <input type="text" value={input} placeholder="Digite o cep aqui..." onChange={(e)=> setInput(e.target.value)}/>

        <button className="buttonSearch"><FiSearch className='img' onClick={search}  size={25} color="#fff" /></button>
      </div>
{Object.keys(cep).length > 0 && (
 <main className='main'>
    <h2>Cep: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      <span> {cep.bairro} </span>
      <span> {cep.localidade} - {cep.uf}</span>

</main>
)}

      </div>
   
       
  );
}

export default Buscador;