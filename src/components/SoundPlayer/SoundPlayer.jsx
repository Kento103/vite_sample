import useSound from 'use-sound'
import sfx from '../../assets/kira2.mp3'

export const SoundPlayer = () => {
  const [play, { stop, isPlaying }] = useSound(sfx, { volume: 0.7 })

  return (
    <div style={{ marginTop: 12 }}>
      <button onClick={play}>効果音再生</button>
      <button onClick={stop} disabled={!isPlaying} style={{ marginLeft: 8 }}>
        停止
      </button>
    </div>
  )
}