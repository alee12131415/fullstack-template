/** @type {import("jest").Config} */
module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy",
  },
  // maxWorkers: 1,
};;
