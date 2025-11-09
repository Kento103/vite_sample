import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  
  const counterShow = () => {
    alert("現在" + count + "回ボタンをクリックしました。")
  }

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        {count} 回クリックしたよ
      </button>
      <button onClick={counterShow}>現在のクリック回数を表示する</button>
    </div>
  )
}