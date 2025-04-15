const { getProcessLog } = require("../utils/logger");
const { LOGOUT_LINKS } = require("../constants/navigation");

const getLogoutView = (_req, res) => {
  res.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
};

const killApplication = (_req, res) => {
  getProcessLog();
  process.exit();
};

module.exports = {
  killApplication,
  getLogoutView,
};