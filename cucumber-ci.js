const { configure } = require("@iamkenos/kyoko");

exports.default = configure({
  baseURL: "https://www.servicesaustralia.gov.au/",
  browserOptions: {
    instance: "chromium",
    headless: true,
    recordVideo: true,
  },
  timeout: 5 * 1000,
  parallel: 10,
});
