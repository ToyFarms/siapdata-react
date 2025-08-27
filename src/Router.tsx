import { BrowserRouter, HashRouter } from "react-router-dom";

const isGithubPages = import.meta.env.VITE_DEPLOY_TARGET === "gh-pages";

export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return isGithubPages ? (
    <HashRouter>{children}</HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
}
