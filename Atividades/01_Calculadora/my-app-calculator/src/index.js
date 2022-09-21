import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /* StrictMode não renderiza nenhum elemento visível na interface. Ele ativa, no entanto, verificações e avisos adicionais para os seus descendentes */
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
