export default function ProductItem({categories, title, text, img}) {
    return(
        <div className="products__item">
        <div className="products__item-info">
            <div>
                <p className="products__item-category">{categories}</p>
                <h5 className="products__item-title">{title}</h5>
                <p className="products__item-text">{text}</p>
            </div>
            <button className="products__item-button">confira aqui</button>
        </div>
        <div className="products__item-image">
            <img src={img} alt="" />
        </div>
        </div>
    )
};
