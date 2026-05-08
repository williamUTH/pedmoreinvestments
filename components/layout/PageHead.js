import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle
            ? headTitle
            : "Pedmore Investments - Strategic Property Investment and Consultancy"}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
