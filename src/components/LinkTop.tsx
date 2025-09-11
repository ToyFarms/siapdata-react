import { Link, useLocation, type LinkProps } from "react-router-dom";

interface SmartLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function LinkTop({ to, children, ...rest }: SmartLinkProps) {
  const location = useLocation();

  const handleClick = (_: React.MouseEvent<HTMLAnchorElement>) => {
    const targetPath = typeof to === "string" ? to : to.pathname;
    if (targetPath) {
      sessionStorage.setItem(targetPath, "0");
    }

    if (location.pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
