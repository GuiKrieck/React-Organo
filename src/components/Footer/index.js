import './Footer.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <img src="/images/logo.png" alt="" />
        </section>
        <section >
            <ul>
                <li>
                    <a href="https://github.com/GuiKrieck" target="_blank" rel="noreferrer">
                        <img src="/images/github.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/guilherme-krieck/" target="_blank" rel="noreferrer">
                        <img src="/images/linkedin.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Desenvolvido por Guilherme Krieck.
            </p>
        </section>
    </footer>)
}

export default Footer