import { useLocation } from "react-router-dom";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div>
      Page <code>{pathname.slice(1)}</code> not found
    </div>
  );
};

export default NotFound;
