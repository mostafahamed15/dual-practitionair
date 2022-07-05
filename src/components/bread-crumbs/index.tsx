import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";

interface BreadcrumbsProps {
  props: {
    path: string;
    name: string;
  };
}

export default function Breadcrumbs({ props }: BreadcrumbsProps) {
  return props.path === "" ? (
    <span className="text-white font-weight-bold">{props.name}</span>
  ) : (
    <Breadcrumb.Item className={Styles.item} active>
      <Link
        to={props.path}
        className="text-white text-decoration-none font-weight-bold"
      >
        {props.name}
      </Link>
    </Breadcrumb.Item>
  );
}
