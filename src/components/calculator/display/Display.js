import './display.css';

export default function Display(props) {
    return (
        <div className="calculator__display" >{props.result || props.tempResult}</div>
    )
}
