/* useState ->  */
import { useEffect, useState } from 'react'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [numResult, setNumResult] = useState(0)
  const [operador, setOperador] = useState('')

  function Calcular() {
    if (operador == 'Somar') return parseFloat(num1) + parseFloat(num2)
    else if (operador == 'Subtrair') return parseFloat(num1) - parseFloat(num2)
    else if (operador == 'Multiplicar')
      return parseFloat(num1) * parseFloat(num2)
    else return parseFloat(num1) / parseFloat(num2)
  }

  useEffect(() => {
    setNumResult(Calcular())
  }, [num1, num2, operador])

  return (
    <div>
      <h1>Calculadora</h1>
      <label for="n1">Informe um número:</label>
      <br></br>
      <input
        id="n1"
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />
      <br></br>
      <label id="n2">Informe um número:</label>
      <br></br>
      <input
        name="n2"
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
      />
      <br></br>
      <input type="button" value="+" onClick={() => setOperador('Somar')} />
      <input type="button" value="-" onClick={() => setOperador('Subtrair')} />
      <input
        type="button"
        value="*"
        onClick={() => setOperador('Multiplicar')}
      />
      <input type="button" value="/" onClick={() => setOperador('Dividir')} />
      <br></br>
      <input type="number" name="result" id="result" value={numResult} />
    </div>
  )
}

export default App
