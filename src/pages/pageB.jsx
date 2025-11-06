import { useNavigate } from 'react-router-dom' // ReactRouterを使うために必要なもの

function PageB() {
    const navigate = useNavigate()
    const changePage = () => {
        navigate('/')
    }
    return (
        <>
            <h1>さいころを振ってみよう！</h1>
            <button onClick={changePage}>トップページに戻る</button>
        </>
    )
}
export default PageB