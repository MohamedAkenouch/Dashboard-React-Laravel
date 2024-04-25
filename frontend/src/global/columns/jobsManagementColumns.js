const style = {
  border: "none",
  color: "#033362",
  fontSize: "14px",
  fontWeight: "lighter",
};

const columns = [
  {
    name: "pos",
    header: <h3 style={{ fontWeight: "700" }}>pos</h3>,
    defaultFlex: 0.7,
    headerProps: { style: style },
  },
  {
    name: "jobPosition",
    header: <h3 style={{ fontWeight: "700" }}>Job Position</h3>,
    defaultFlex: 1.5,
    headerProps: { style: style },
  },
  {
    name: "location",
    header: <h3 style={{ fontWeight: "700" }}>Location</h3>,
    defaultFlex: 6,
    headerProps: { style: style },
  },
  {
    name: "lastUpdate",
    header: <h3 style={{ fontWeight: "700" }}>Last Update</h3>,
    defaultFlex: 1.5,
    headerProps: { style: style },
  },
  {
    name: "status",
    header: <h3 style={{ fontWeight: "700" }}>Status</h3>,
    defaultFlex: 1,
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
