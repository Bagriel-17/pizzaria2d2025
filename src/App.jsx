import {useState } from "react"

function App(){

  const [nome, setNome] = useState('ronaldo')
  const Formulario = () => {
    return (
      <>
        <h3>Formulário</h3>
        <input 
        ClassName="nome"
        onChange={(e)=>{setNome(e.target.value)}}
        type="text" />
        
    <button 
      className="botao"
      onClick={()=>{
        alert('você é ' + nome)}}
    >
      CLIQUE AQUI
    </button>

      </>
    )
  }
   return (
    <div>
      <h3>PIZZARIA 2D</h3>
      
      <Formulario />
      <Formulario />
      <Formulario />
      <Formulario />
      
    </div>
  )
}

export default App