import SectionHeader from '../components/SectionHeader';
import '../assets/styles/service-section.css';

export default function ServiceSection({ id, title, image, children }) {
    return(
        <section className="container service__container" id={id}>
            <div className="service__content">
                {title ? <SectionHeader title={title} className="service__header"/> : ""}

                <div className="service__body">
                    <div className="service__left">
                        <img src={image} alt={title} />
                    </div>

                    <div className="service__right">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}