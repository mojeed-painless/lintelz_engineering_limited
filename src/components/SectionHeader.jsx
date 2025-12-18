import '../assets/styles/section-header.css';

export default function SectionHeader({ title, className }) {
    return (
        <>
            <h2 className={`section-header__title ${className}`}>{title}</h2>
        </>
    )
}