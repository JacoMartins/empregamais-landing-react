import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import App from './App'
import Contato from './routes/contato'
import Empresa from './routes/empresa'
import Instituicoes from './routes/instituicoes'
import { GlobalStyle } from './styles/global'
import NavContext from './utils/NavContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavContext>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/instituicoes" element={<Instituicoes />} />
        </Routes>
      </NavContext>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
