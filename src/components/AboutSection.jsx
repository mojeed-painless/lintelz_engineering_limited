import SectionHeader from '../components/SectionHeader';
import '../assets/styles/about.css';

export default function AboutSection({ id, title, icon: Icon, children}) {
    return(
        <section className="container goal__container" id={id}>
            <div className="goal__content">
                {title ? <SectionHeader title={title} className="goal__header"/> : ""}

                <div className="goal__body">
                    <div className="goal__left">
                        <Icon />
                    </div>

                    <div className="goal__right">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}