import '../assets/styles/page-header.css';



export default function PageHeader({ title, subtitle, className }) {
    return (
        <header className={`page-header__container ${className}`}>
            <div className="page-header__cover">
                <h1 className="page-header__title">{title}</h1>
                {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
            </div>
        </header>
    );
}