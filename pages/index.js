import Layout from "@/components/layout/Layout";
import Banner6 from "@/components/sections/Banner6";
import Counter from "@/components/sections/Counter";
import Mission from "@/components/sections/Mission";
import Newsletter from "@/components/sections/Newsletter";
import Serviceareas from "@/components/sections/Serviceareas";
import Project3 from "@/components/sections/Project3";
import Services2 from "@/components/sections/Services2";
import Team from "@/components/sections/Team";
import Testimonial2 from "@/components/sections/Testimonial2";

export default function Home7() {
  return (
    <>
      <Layout headerStyle={7}>
        <Banner6 />
        <Counter />
        <Mission />
        <Project3 />
        <Testimonial2 />
        <Services2 />
        <Team />
        <Serviceareas />
        <Newsletter />
      </Layout>
    </>
  );
}
