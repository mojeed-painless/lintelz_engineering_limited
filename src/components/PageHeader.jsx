import '../assets/styles/page-header.css';



export default function PageHeader({ title, subtitle, className, children }) {
    return (
        <header className={`page-header__container ${className}`}>
            <div className="page-header__cover">
                <div className="page-header__left">
                    <h1 className="page-header__title">{title}</h1>
                    {subtitle && <small className="page-header__subtitle">{subtitle}</small>}
                </div>

                <div className="page-header__right">
                    {children}
                </div>
            </div>
        </header>
    );
}