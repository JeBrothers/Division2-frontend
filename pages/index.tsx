import type { NextPage } from "next";

import { useState } from "react";
import Dropdown from "./components/dropdown";
import Layout from "./components/layout";



const Home: NextPage = () => {
  const [view, setView] = useState(false);

  return (
    <Layout>
      <ul onClick={() => { setView(!view) }}>
        반가워요, nickname 님!{" "}
        {view ? '⌃' : '⌄'}
        {view && <Dropdown />}
      </ul>
    </Layout>
  );
};

export default Home;
