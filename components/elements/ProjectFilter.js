import ProjectItem from "@/components/elements/ProjectItem";
import projectData from "../../util/project.json";

export default function ProjectFilter({ col }) {
  return (
    <>
      <section className="inner-project-area section-pb-140">
        <div className="container">
          <div className="project-item-wrap">
            <div className="row">
              {projectData.map((item, i) => (
                <ProjectItem item={item} col={col} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
