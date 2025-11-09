import nodejsKawaiiLogo from '/Node_sawalogo.png'
import reactKawaiiLogo from '/React_sawalogo.png'

export const Footer = () => {
    return (
        <div>
            <a href="https://nodejs.org" target='_blank'>
                <img src={nodejsKawaiiLogo} className="logo" alt='Node.jsさわらつきさん' />
            </a>
            <a href="https://react.dev" target='_blank'>
                <img src={reactKawaiiLogo} className="logo" alt="Reactさわらつきさん" />
            </a>
        </div>
    )
}