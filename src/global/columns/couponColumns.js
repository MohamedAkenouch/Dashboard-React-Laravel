const style = {
  border: "none",
  color: "#033362",
  fontSize: "14px",
  fontWeight: "lighter",
};

const columns = [
  {
    name: "couponCode",
    header: <h3 style={{ fontWeight: "700" }}>Coupon Code</h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "type",
    header: <h3 style={{ fontWeight: "700" }}>Type</h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "value",
    header: <h3 style={{ fontWeight: "700" }}>Value</h3>,
    defaultFlex: 0.7,
    headerProps: { style: style },
  },
  {
    name: "products",
    header: <h3 style={{ fontWeight: "700" }}>Products</h3>,
    defaultFlex: 3,
    headerProps: { style: style },
  },
  {
    name: "creationDate",
    header: <h3 style={{ fontWeight: "700" }}>Creation Date</h3>,
    defaultFlex: 1.1,
    headerProps: { style: style },
  },
  {
    name: "expirationDate",
    header: <h3 style={{ fontWeight: "700" }}>Expiration Date</h3>,
    defaultFlex: 1.1,
    headerProps: { style: style },
  },
  {
    name: "status",
    header: <h3 style={{ fontWeight: "700" }}>Status</h3>,
    defaultFlex: 0.7,
    headerProps: { style: style },
  },
  {
    name: "view",
    header: <h3 style={{ fontWeight: "700" }}></h3>,
    defaultFlex: 0.5,
    headerProps: { style: style },
  },
];

export default columns;
