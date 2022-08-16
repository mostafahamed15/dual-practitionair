import React, { Suspense } from "react";

import {
  home,
  governmentHomePath,
  privateHomePath,
  createEditOrderPath,
  acceptOrderPath,
  governmentAcceptOrderPath,
  cancelOrderPath,
  rejectOrderPath,
  waitingOrderPath,
  renewOrderPath,
  practitionerDataPath,
  previewOrderPath,
} from "./Paths";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Home = React.lazy(() => import("../pages/home"));

const GovernmentHome = React.lazy(
  () => import("../pages/government-facility/government-home")
);
const GovernmentAcceptOrder = React.lazy(
  () => import("../pages/government-facility/accept-order")
);
const PrivateHome = React.lazy(
  () => import("../pages/private-facility/private-home")
);

const CreateEditOrder = React.lazy(
  () => import("../pages/government-facility/create-edit-order")
);

const AcceptOrder = React.lazy(
  () => import("../pages/private-facility/accept-order")
);

const RejectOrder = React.lazy(
  () => import("../pages/private-facility/reject-order")
);

const WaitingOrder = React.lazy(
  () => import("../pages/private-facility/waiting-order")
);

const RenewOrder = React.lazy(
  () => import("../pages/private-facility/renew-order")
);
const CancelOrder = React.lazy(
  () => import("../pages/private-facility/cancel-order")
);

const PreviewOrder = React.lazy(
  () => import("../pages/private-facility/preview-order")
);

const PractitionerData = React.lazy(
  () => import("../pages/private-facility/practitioner_data")
);

const withSuspense = (WrappedComponent: React.ComponentType) => {
  return (
    <Suspense fallback={<Spinner animation="border" />}>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element: JSX.Element) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export default function Routing() {
  return (
    <Suspense fallback={<Spinner animation="border" />}>
      <BrowserRouter>
        <Routes>
          <Route
            key="Home"
            path={home()}
            element={withSuspenseComponents(<Home />)}
          />
          <Route
            key="GovernmentHome"
            path={governmentHomePath()}
            element={withSuspenseComponents(<GovernmentHome />)}
          />
          <Route
            key="GovernmentAcceptOrder"
            path={governmentAcceptOrderPath()}
            element={withSuspenseComponents(<GovernmentAcceptOrder />)}
          />
          <Route
            key="PrivateHome"
            path={privateHomePath()}
            element={withSuspenseComponents(<PrivateHome />)}
          />
          <Route
            key="CreateEditOrder"
            path={createEditOrderPath()}
            element={withSuspenseComponents(<CreateEditOrder />)}
          />
          <Route
            key="AcceptOrder"
            path={acceptOrderPath()}
            element={withSuspenseComponents(<AcceptOrder />)}
          />
          <Route
            key="RejectOrder"
            path={rejectOrderPath()}
            element={withSuspenseComponents(<RejectOrder />)}
          />
            <Route
            key="WaitingOrder"
            path={waitingOrderPath()}
            element={withSuspenseComponents(<WaitingOrder/>)}
          />
           <Route
            key="RenewOrder"
            path={renewOrderPath()}
            element={withSuspenseComponents(<RenewOrder/>)}
          />
          <Route
            key="CancelOrder"
            path={cancelOrderPath()}
            element={withSuspenseComponents(<CancelOrder />)}
          />
          <Route
            key="PreviewOrder"
            path={previewOrderPath()}
            element={withSuspenseComponents(<PreviewOrder />)}
          />
          <Route
            key="PractitionerData"
            path={practitionerDataPath()}
            element={withSuspenseComponents(<PractitionerData />)}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
