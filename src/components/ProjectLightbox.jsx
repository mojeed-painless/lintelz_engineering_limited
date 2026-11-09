import { useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { projects } from '../data';



export default function ProjectLightbox({ closeBox, open, currentProject }) {
    const project = useMemo(
        () => projects.find((p) => p.title === currentProject),
        [currentProject]
    );

    return (
        <Lightbox
            open={open}
            close={closeBox}
            slides={project?.gallery || []}
        />
    );
}