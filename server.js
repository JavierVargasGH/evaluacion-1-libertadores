import express from 'express'
import cors from 'cors'
import { paises, clubes } from './datos.js'

const app = express()
app.use(cors())

const PORT = 3000

// 1. GET /api/clubes y GET /api/clubes?pais=X
app.get('/api/clubes', (req, res) => {
  const { pais } = req.query

  if (pais) {
    const paisEncontrado = paises.find(p => p.nombre.toLowerCase() === pais.toLowerCase())

    if (!paisEncontrado) {
      return res.status(404).json({ error: `El país '${pais}' no está registrado.` })
    }

    const clubesPorPais = clubes.filter(c => c.paisId === paisEncontrado.id)
    return res.status(200).json(clubesPorPais)
  }

  res.status(200).json(clubes)
})

// 2. GET /api/clubes/:id
app.get('/api/clubes/:id', (req, res) => {
  const idClub = Number(req.params.id)
  const club = clubes.find(c => c.id === idClub)

  if (!club) {
    return res.status(404).json({ error: `No existe el club con el id ${idClub}` })
  }

  res.status(200).json(club)
})

// 3. GET /api/titulos/:club
app.get('/api/titulos/:club', (req, res) => {
  const nombreBuscado = req.params.club.replace(/-/g, ' ').toLowerCase()
  const club = clubes.find(c => c.nombre.toLowerCase() === nombreBuscado)

  if (!club) {
    return res.status(404).json({ error: `El club '${req.params.club}' no existe.` })
  }

  res.status(200).json(club.titulos)
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🏆 API escuchando en http://localhost:${PORT}`)
})
