import { hot } from "react-hot-loader/root";
import React, { Fragment, useState } from "react";
import Header from "./components/layouts/Header";
import Container from "./components/layouts/Container";
import Footer from "./components/layouts/Footer";
import MenuContext from "./contexts/Menu.context";
import Modal from "./components/layouts/Modal";

const App = () => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState("sports");
  const [searchBar, setSearchBar] = useState(false);
  const [rightMenu, setRightMenu] = useState(false);
  const [interMenu, setinterMenu] = useState("inter-tab-1");
  const [detailMenu, setdetailMenu] = useState(false);
  const [betslipMenu, setbetslipMenu] = useState(false);
  const context = {
    state: {
      menu,
      subMenu,
      searchBar,
      rightMenu,
      interMenu,
      detailMenu,
      betslipMenu,
    },
    actions: {
      setMenu,
      setSubMenu,
      setSearchBar,
      setRightMenu,
      setinterMenu,
      setdetailMenu,
      setbetslipMenu,
    },
  };
  return (
    <MenuContext.Provider value={context}>
      <Fragment>
        <Header />
        <Container />
        <Footer />
        <Modal />
      </Fragment>
    </MenuContext.Provider>
  );
};

export default hot(App);
