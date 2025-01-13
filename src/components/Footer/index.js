import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer-infos">
            <div className="social-media">
               <ul>
                <li>
                    <a href="#">
                        <img src="/images/fb.png" alt="Logo do Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/ig.png" alt="Logo do Instagram" />
                    </a>
                </li>
               </ul>
            </div>
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </div>
            <div className="desenvolvidoAlura">
                <p>Desenvolvido por Alura.</p>
            </div>
        </section>
    )
}

export default Footer;
