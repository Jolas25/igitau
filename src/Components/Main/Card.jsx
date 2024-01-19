import { useState } from "react"
import Modal from "../Modal/modal"

export default function Card({img, title, text, buttonText}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

function openModal() {
    setIsModalOpen(true)
}

    return(
        <div className="cards__item card">
            <div className="card__image">
                <img className="card__img" src={img} alt="" />
            </div>
            <div className="card__info">
                <h3 className="card__title">{title}</h3>
                <p className="card__text">{text}</p>
            </div>
            <div className="card__buttons">
                <button className="card__button" onClick={openModal}>{buttonText}</button>
            </div>
            <Modal isOpen={isModalOpen}>
                <>
                    <div className="card__close">
                        <button className="icon-button" onClick={() => setIsModalOpen(false)}>
                            <img src="src/Components/Main/img/cross-small.svg" alt="" />
                        </button>
                    </div>
                    <div className="card__image">
                        <img className="card__img" src={img} alt="" />
                    </div>
                    <div className="card__info">
                        <h3 className="card__title">{title}</h3>
                        <p className="card__text">{text}</p>
                    </div>
                    
                </>
            </Modal>
        </div>
    )
};
