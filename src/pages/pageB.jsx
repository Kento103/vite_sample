import { useNavigate } from 'react-router-dom' // ReactRouterを使うために必要なもの
import axios from 'axios'
import { TopLogo } from '../components/TopLogo/TopLogo'

function PageB() {
    const navigate = useNavigate()
    const changePage = () => {
        navigate('/')
    }
    // POSTリクエスト用
    const diceRole = async () => {
        try {
            const responce = await axios.post('/api/bcdice/v2/game_system/Cthulhu/roll/', {
                command: '1d100'
            })
            console.log(responce.data)
        } catch (error) {
            console.error('リクエストエラー：', error)
        }
    }
    return (
        <>
            <TopLogo />
            <h1>さいころを振ってみよう！</h1>
            <button onClick={diceRole}>さいころを振る</button>
            <button onClick={changePage}>トップページに戻る</button>
        </>
    )
}
export default PageB