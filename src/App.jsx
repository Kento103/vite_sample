import { useNavigate } from 'react-router-dom'
import { TopLogo } from './components/TopLogo/TopLogo'
import { Counter } from './components/Counter/Counter'
import { SoundPlayer } from './components/SoundPlayer/SoundPlayer'
import './App.css'
import { Footer } from './components/Footer/Footer'

function App() {
  const navigate = useNavigate()
  
  return (
    <>
      <TopLogo />
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <SoundPlayer />
        <button onClick={() => navigate('/dice')}>
          サイコロ画面へ
        </button>
      </div>
      <Footer />
    </>
  )
}
export default App