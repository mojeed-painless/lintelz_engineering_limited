import PageHeader from "../components/PageHeader";
import Construction from "../components/Construction";
import '../assets/styles/about.css'

export default function About() {
    return (
        <>
            <PageHeader 
                title="About Us" 
                subtitle="Learn more about our company and mission."
                className="about__page-header" 
            />

            <Construction />



            {/* <section className="container">
                <div className="border__container">
                    <div className="border__item border__item1"></div>
                    <div className="border__item border__item2"></div>
                    <div className="border__item border__item3"></div>
                </div>
            </section> */}
            
        </>
    )
}