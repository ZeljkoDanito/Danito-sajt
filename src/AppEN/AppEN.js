import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "../Styles/AppLang/AppLang.css";
import ScrollToTop from "../ScrollToTop";

import NavFirst from "./Komponente/NavBar/NavFirst/NavFirst";
import NavSecond from "./Komponente/NavBar/NavSecond/NavSecond";
import NavProduct from "./Komponente/NavBar/NavProducts/NavProducts";

import LandingPage from "./Strane/LandingPage/LandingPage";
import Galerija from "./Strane/Galerija/Galerija";
import Proizvodi from "./Strane/Proizvodi/Proizvodi";
import TipsPage from "./Strane/TipsPage/TipsPage";
import Kontakt from "./Strane/Kontakt/Kontakt";

function AppEN() {
  const [scroll, setScroll] = useState(0);
  const [navRightOpen, setNavRightOpen] = useState(false);

  const [pathTo, setPathTo] = useState("false");
  const [pageName, setPageName] = useState("");

  const [pathToTipsPage, setPathToTipsPage] = useState("");
  const [tipsData, setTipsData] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div className="AppLang">
      <Router>
        <ScrollToTop />
        <NavFirst />
        <div className="AppLang__containerFirst">
          <NavProduct
            setData={setData}
            setPageName={setPageName}
            pathTo={pathTo}
            setPathTo={setPathTo}
            navRightOpen={navRightOpen}
          />
          <div className="AppLang__right">
            <NavSecond navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen} />
            <Switch>
              <Route path={pathTo}>
                <Proizvodi data={data} pageName={pageName} scroll={scroll} />
              </Route>
              <Route path="/EN/galerija">
                <Galerija />
              </Route>
              <Route path="/EN/TipsPage">
                <TipsPage scroll={scroll} tipsData={tipsData} />
              </Route>
              <Route path="/EN/contact">
                <Kontakt scroll={scroll} />
              </Route>
              <Route path="/EN">
                <LandingPage setTipsData={setTipsData} setPathToTipsPage={setPathToTipsPage} scroll={scroll} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AppEN;
