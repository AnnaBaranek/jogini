import './Header.css';

export const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    <li><a href="/">{props.domuText}</a></li>
                    <li><a href="/">{props.lekceText}</a></li>
                    <li><a href="/">{props.tymText}</a></li>
                    <li><a href="/">{props.udalostiText}</a></li>
                    <li><a href="/">{props.kontaktText}</a></li>
                </ul>
            </nav>
        </div>
    )
}