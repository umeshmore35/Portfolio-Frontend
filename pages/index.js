import axios from "axios";
import Head from "next/head";
import Details from "../component/Detail";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Page from "../component/Page";
import Project from "../component/Project";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Umesh More</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header />
      <Page />
      {props.profile.map((data) => {
        return <Details key={data.userId} {...data} />;
      })}
      <Project />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    let { data } = await axios.get(process.env.URL);
    return {
      props: {
        profile: data,
      },
    };
  } catch (e) {
    console.log(e);
    return e;
  }
};
