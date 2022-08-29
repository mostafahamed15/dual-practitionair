import { Breadcrumb } from "react-bootstrap";
import Breadcrumbs from "../bread-crumbs";

interface subHeaderProps {
  breadCrumbs: {
    path: string;
    name: string;
  }[];
}

export default function SubHeader({ breadCrumbs }: subHeaderProps) {
  return (
    <Breadcrumb className="px-4 py-2 bg-primary">
      {breadCrumbs &&
        breadCrumbs.map((breadCrumb, index) => (
          <Breadcrumbs props={breadCrumb} />
        ))}
    </Breadcrumb>
  );
}
