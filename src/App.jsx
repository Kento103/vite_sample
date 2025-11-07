import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import reactKawaiiLogo from '/React_sawalogo.png'
import nodejsKawaiiLogo from '/Node_sawalogo.png'
import './App.css'
import { useNavigate } from 'react-router-dom' // ReactRouterを使うために必要なもの
import useSound from 'use-sound' // 音楽再生に使うもの
import sfx from './assets/kira2.mp3' // 対象音楽ファイル

function App() {
  const [count, setCount] = useState(0)
  const testClick = () => {
    alert("ボタンをクリックしました！\nこんにちは！");
  }
  const counterShow = () => {
    alert("現在" + count + "回ボタンをクリックしました。");
  }
  const navigate = useNavigate()
  const changePage = () => {
    navigate('/dice')
  }

  // user-soundフックを初期化する
  const [play, { stop, isPlaying}] = useSound(sfx, {volume: 0.7})

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} 回クリックしたよ
        </button>
        <button onClick={testClick}>ポップアップ表示</button>
        <button onClick={counterShow}>現在のクリック回数を表示する</button>

        {/* 音再生ボタンと停止ボタン */}
        <div style={{ marginTop: 12}}>
          <button onClick={play}>効果音再生</button>
          <button onClick={stop} disabled={!isPlaying} style={{ marginLeft: 8 }}>停止</button>
        </div>

        <p>
          <code>src/App.jsx</code> を編集したり保存したりして色々いじってあそんでみてね。
        </p>
      </div>
      <div>
        <button onClick={changePage}>サイコロ画面へ</button>
      </div>
      <p className="read-the-docs">
        ViteとReactのロゴをクリックすると、詳細を公式ページで確認できます。
      </p>
      <div>
        <a href="https://nodejs.org" target='_blank'>
          <img src={nodejsKawaiiLogo} className="logo" alt='Node.jsさわらつきさん' />
        </a>
        <a href="https://react.dev" target='_blank'>
          <img src={reactKawaiiLogo} className="logo" alt="Reactさわらつきさん" />
        </a>
      </div>
    </>
  )
}

export default App
