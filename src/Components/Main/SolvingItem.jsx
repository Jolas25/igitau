import Icon1 from "./img/Icon1.svg?react" 
import Icon2 from "./img/Icon2.svg?react" 
import Icon3 from "./img/Icon3.svg?react" 
import Icon4 from "./img/Icon4.svg?react" 
import Icon5 from "./img/Icon5.svg?react" 
import Icon6 from "./img/Icon6.svg?react" 

const icons = [<Icon1 className="logo"/>, <Icon2 className="logo"/>, <Icon3 className="logo"/>, <Icon4 className="logo"/>, <Icon5 className="logo"/>, <Icon6 className="logo"/>]

export default function SolvingItem({ iconurl, title, text, index }) {
    // const combinedClassNames = iconurl.join(' ');
    // console.log(combinedClassNames);
    // console.log(index);
    return (
        <div className="solving__item">
            <div className="solving__item-image">{icons[index]}</div>
            <h4 className="solving__item-title">{title}</h4>
            <p className="solving__item-text">{text}</p>
        </div>
    )
}
