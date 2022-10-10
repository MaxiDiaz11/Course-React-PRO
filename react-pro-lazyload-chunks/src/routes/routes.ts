import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-Lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Routes {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Routes[];
}

export const routes: Routes[] = [
  {
    path: "/lazyload",
    Component: lazy(
      () =>
        import(
          /*webpackChunkName: "LazyLayout"*/ "../01-Lazyload/layout/LazyLayout"
        )
    ),
    name: "LazyLoad Nested",
  },
  {
    path: "/noLazy",
    Component: NoLazy,
    name: "NoLazyComponent",
  },
];
