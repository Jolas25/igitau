import SolvingItem from "./SolvingItem"
import Card from "./Card"
import "./main.scss"
import ProductItem from "./ProductItem"
import Slider from "../Slider/Slider"
import About from "./About/About"
import Contacts from "./Contacts/Contacts"
import Info from "./Info/Info"

const solvingItems = [
    {
        icon: "src/Components/Main/img/Icon1.svg",
        title: "boleto",
        text: "emita 2ª via de boletos Itaú"
    },
    {
        icon: "src/Components/Main/img/Icon2.svg",
        title: "desbloqueio de cartão",
        text: "veja como fazer"
    },
    {
        icon: "src/Components/Main/img/Icon3.svg",
        title: "aplicativos",
        text: "baixe os apps do banco Itaú"
    },
    {
        icon: "src/Components/Main/img/Icon4.svg",
        title: "fatura digital",
        text: "receba a fatura do seu cartão"
    },
    {
        icon: "src/Components/Main/img/Icon5.svg",
        title: "comprovantes",
        text: "gere uma 2ª via do comprovante"
    }, 
    {
        icon: "src/Components/Main/img/Icon6.svg",
        title: "atendimento",
        text: "conheça nossos canais de ajuda"
    }
]

const cards = [
    {
        img: "src/Components/Main/img/Card1.jpg",
        title: "Conta com cartão",
        text: "Conta sem mensalidade e cartão sem anuidade",
        buttonText: "abra sua conta"
    },
    {
        img: "src/Components/Main/img/Card2.jpg",
        title: "Cartão Pão de Açúcar",
        text: "20% OFF em queijos, vinhos e cervejas especiais",
        buttonText: "peça já o seu"
    },
    {
        img: "src/Components/Main/img/Card3.jpg",
        title: "Cartão Magalu",
        text: "Anuidade grátis e 2% de cashback no site da Magalu.",
        buttonText: "peça já o seu"
    },
    {
        img: "src/Components/Main/img/Card4.jpg",
        title: "Cartões Itaú",
        text: "Escolha o cartão que dá match com você.",
        buttonText: "escolha o seu"
    },
]

const products = [
    {
        categories: "renegociação",
        title: "Renegociação. Conte com o Itaú.",
        text: "Simule do seu jeito e negocie contas em atraso com a melhor condição. Ésimples, rápido e segur",
        img: "src/Components/Main/img/imagem_renegociacao_desktop_256x270.png.png"
    },
    {
        categories: "empréstimo",
        title: "Consignado INSS",
        text: "Disponível até para quem não tem conta Itaú.",
        img: "src/Components/Main/img/itau_emprestimo_consignado_mae_filha_256x270.png.png"
    },
    {
        categories: "cartões",
        title: "O cartão de crédito ideal",
        text: "Só quem tem mais de 70 opções de cartões pode ajudar a escolher o cartão que dá match com voc",
        img: "src/Components/Main/img/540x240_mosaic_cartoes.jpg.png"
    },
    {
        categories: "Itaú Shop",
        title: "Sua experiência de compra",
        text: "Compre sem sair de casa, com parcelamento sem juros e cashback.",
        img: "src/Components/Main/img/31_EN_0053562_tablet_360x296px.png.png"
    },
    {
        categories: "seguros",
        title: "Mais de 30 seguros pra você",
        text: "Deixe tudo que importa com Seguros do Itaú.",
        img: "src/Components/Main/img/1311055917.png.png"
    },
]

export default function Main({page}) {
    return(
        <main>
            <div className="main__container">
                {page === "about" && <About />}
                {page === "main" && <>
                    <Slider/>
                    <section className="solving">
                        <h2 className="solving__title title">resolva as questões do dia a dia</h2>
                        <div className="solving__items">
                            {
                                solvingItems.map(item => <SolvingItem iconurl={item.icon} title={item.title} text={item.text} key={item.title} index = {solvingItems.indexOf(item)}/>)
                            }
                        </div>
                    </section>
                    <section className="cards">
                        <h2 className="cards__title">confira nossos cartões de crédito mais pedidos da semana</h2>
                        <div className="cards__items">
                            {
                                cards.map(card => <Card key={card.title} img={card.img} text={card.text} title={card.title} buttonText={card.buttonText}/>)
                            }
                        </div>
                    </section>
                    <section className="products">
                        <div className="products__description">
                            <h2 className="products__title">contrate nossos produtos on-line</h2>
                            <p className="products__text">Confira as soluções que o banco Itaú oferece para você.</p>
                        </div>
                        <div className="products__items">
                            {products.map(item => <ProductItem key={item.title} text={item.text} title={item.title} categories={item.categories} img={item.img}/>)}
                        </div> 
                    </section>
                </>}  
                {page === "contacts" && <Contacts />}
                {page === "info" && <Info />}
            </div>
        </main>
    )
}

