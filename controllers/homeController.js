const { MENU_LINKS } = require("../constants/navigation");


const getHomeView = (_req, res) => {
  res.render("home.ejs", {headTitle: "Shop - Home", path: "/", activeLinkPath: "/", menuLinks: MENU_LINKS,});
};


module.exports = {
  getHomeView,
};