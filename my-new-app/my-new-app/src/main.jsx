import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// import { App } from "./App.jsx";
import DashboardClassComponent from "./DashboardClassComponent.jsx";
import Practice from "./Practice.jsx";
import JSXBasics from "./JSXBasics.jsx";
// import IncDec from "./IncDec.jsx";
// import { div, h2 } from "framer-motion/client";
import LaptopComponent from "./LaptopComponent.jsx";
import CarComponent from "./CarComponent.jsx";
import React from "react";
import InlineCSS from "./InlineCSS.jsx";
import ExternalCSS from "./ExternalCSS.jsx";
import CSSModule from "./CSSModule.jsx";
import TailwindEx from "../TailwindEx.jsx";
import Example from "../Avatar.jsx";
import EventHandling from "../EvenHandling.jsx";
import EventHandling1 from "./EventHandling1.jsx";
import StateClassComp from "./StateClassComp.jsx";
import UseStateEx from "../UseStateEx.jsx";
import UseEffectEx from "../UseEffectEx.jsx";
import WithoutUseContext from "./UseContext/WithoutUseContext.jsx";
import ProviderComponent from "./UseContext/ProviderComponent.jsx";
import ModeProvider from "./UseContext/ModeProvider.jsx";
import UseMemoExample from "./UseMemo/UseMemoEX.jsx";
import UseReducerExample from "./UseReduser/UseReduserEX.jsx";
import UncontrolledComponent from "./FormHandling/UncontrolledComponent.jsx";
import FormValidation from "./FormHandling/FormValidation.jsx";
import HTTPFetchMethod from "./HTTP_Methods/HTTPFetchMethod.jsx";
import HTTPFetchMethod2 from "./HTTP_Methods/HTTPFetchMethod2.jsx";
import HTTPAxiosMethod from "./HTTP_Methods/HTTPAxiosMethod.jsx";
import ParentRouting from "./Routing/parentrouting.jsx";
import Task from "./Routing/Task.jsx";
import UserProfile from "./etp.jsx";

function Laptop() {
  return <h2>This is my Laptop functional component</h2>;
}

class University extends React.Component {
  render() {
    return (
      <div>
        <h2>This is University class component</h2>
      </div>
    );
  }
}

class Computer extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Component Inside the component</h1>
        <University />
      </div>
    );
  }
}
const config = {
  ver: "new",
  launch: 2025,
  access: "browser",
};
const check = ["sathish", "santhosh", "nkdsd"];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <DashboardClassComponent />
    <Practice />
    <DashboardClassComponent />

    <JSXBasics /> */}
    {/* <Box /> */}
    {/* <University />
    <Computer /> */}
    {/* <IncDec /> */}
    {/* <LaptopComponent
      brand="HP"
      color="Grey"
      year={2025}
      con={config}
      check={check}
    /> */}
    {/* <CarComponent model={2025} /> */}
    {/* <InlineCSS />
    <ExternalCSS /> */}
    {/* <CSSModule />
    <TailwindEx />
    <Example />
    <EventHandling />
    <EventHandling1 />
    <StateClassComp />
    <UseStateEx /> */}
    {/* <UseEffectEx /> */}
    {/* <WithoutUseContext />
    <ProviderComponent />
    <ModeProvider />
    <UseMemoExample />
    <UseReducerExample /> */}
    {/* <UncontrolledComponent /> */}
    {/* <FormValidation /> */}
    {/* <HTTPFetchMethod /> */}
    {/* <HTTPFetchMethod2 /> */}
    {/* <HTTPAxiosMethod /> */}
    <ParentRouting />
    {/* <Task /> */}
    {/* <UserProfile name="John Doe" age={25} isPremium={true} /> */}
  </StrictMode>
);
