import ProjectFilter from "@/components/elements/ProjectFilter";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ProjectTwo() {
  return (
    <>
      <Layout headerStyle={7}>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Portfolio</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Portfolio
                      </li>
                    </ol>
                  </nav>
                  <p className="mt-4">
                    See a selection of our portfolio of completed and ongoing
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectFilter col="col-lg-4 col-md-6" />
      </Layout>
    </>
  );
}
