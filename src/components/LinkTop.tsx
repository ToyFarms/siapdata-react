import { Link, useLocation, type LinkProps } from "react-router-dom";

interface SmartLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function LinkTop({ to, children, ...rest }: SmartLinkProps) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetPath = typeof to === "string" ? to : to.pathname;

    if (location.pathname === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
