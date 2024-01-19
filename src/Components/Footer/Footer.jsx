import "./footer.scss"

const footerLinks = [
    {
        title: "nossos produtos",
        links: ["conta corrente", "cartões de crédito", "consórcio", "seguros", "investimentos", "renegociação"]
    },
    {
        title: "itaú",
        links: ["relações com investidores", "carreiras", "imprensa", "sustentabilidade", "Integridade e Ética"]
    },
    {
        title: "ajuda",
        links: ["central de ajuda", "canais Itaú", "encontre agências", "segurança", "acessos não correntista", "consumidor.gov"]
    }
]

export default function Footer({setPage}) {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__container">
                    <section className="footer__title">
                    <p>Banco Itaú</p>
                    </section>
                </div>
            </div>
            <div className="footer__container">
                <section className="footer__links">
                    {
                        footerLinks.map(obj => (
                            <div className="footer__links-item" key={obj.title}>
                                <p className="footer__links-title">{obj.title}</p>
                                <ul className="footer__links-list">
                                    {obj.links.map(item => <li key={item} className="footer__links-link" onClick={() => setPage("info")} style={{cursor: "pointer"}}>{item }</li>)}
                                </ul>
                            </div>
                            
                        ))
                    }
                </section>
            </div>
            <div className="footer__copy copy">
                <div className="footer__container copy__container">
                    <div className="copy__logo">
                        <p className="copy__logo-link">Itaú em outros países</p>
                    </div>
                    <div className="copy__info">
                        <h6>© 2023 Itaú Unibanco Holding S.A. CNPJ: 60.872.504/0001-23</h6>
                        <p>Praça Alfredo Egydio de Souza Aranha, 100, Torre Olavo Setubal, Parque Jabaquara - CEP 04344-902 - São Paulo - Brasil</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};
