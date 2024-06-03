import type { FC } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

import './App.scss';

import { Router } from "@providers/Router.provider";

declare global {
  interface Window { IS_DEVELOPMENT: boolean }
}

const App: FC = () => <Router />;

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Unable to find root element");
}

const root = createRoot(rootElement);
root.render(<App />);
