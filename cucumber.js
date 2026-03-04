const { configure } = require("@iamkenos/kyoko");

exports.default = configure({
  baseURL: "https://www.servicesaustralia.gov.au/",
  browserOptions: {
    instance: "chromium",
    headless: false,
    recordVideo: false,
    launchArgs: { args: ["--start-maximized"], slowMo: 1 * 1000 },
    browserContextArgs: { viewport: null },
  },
  debug: process.env.DEBUG === "true",
  tags: process.env.TAGS ?? "",
  timeout: 5 * 1000,
  parallel: +(process.env.PARALLEL ?? 2),
  snapshots: { images: { maxDiffPixelRatio: 0.5 } },
  paths: process.env.PATHS ? [process.env.PATHS] : undefined,
});
