// import { LazyPage1, LazyPage2, LazyPage3 } from "./../01-Lazyload/pages";

import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Routes {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Routes[];
}

const LazyPage1 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage-1"*/ "../01-Lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage-2"*/ "../01-Lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage-3"*/ "../01-Lazyload/pages/LazyPage3")
);

export const routes: Routes[] = [
  {
    path: "/lazy1",
    Component: LazyPage1,
    name: "LazyPage-1",
  },
  {
    path: "/lazy2",
    Component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "LazyPage-3",
  },
];
