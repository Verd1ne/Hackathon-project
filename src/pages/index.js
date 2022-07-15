import React from "react";
import Layout from "../components/Layout";
import { Toast } from "@capacitor/toast";

const HomePage = () => {
  const displayNativeToast = async () => {
    await Toast.show({
      text: "Hello world",
    });
  };

  return (
    <Layout>
      <h1 className="underline font-bold">gatsby-starter-capacitor</h1>
      <button onClick={displayNativeToast}>Display native toast!</button>
    </Layout>
  );
}
export default HomePage;
