const style={
    border:"none",
    color:"#033362",
    fontSize:"14px",
    fontWeight:'lighter'
  }

const columns = [
  {
    name: "id",
    header: <h3 style={{ fontWeight: "700" }}>ID</h3>,
    defaultFlex: 0.5,
    headerProps: { style: style },
  },
  {
    name: "fullname",
    header: <h3 style={{ fontWeight: "700" }}>Full Name</h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "email",
    header: <h3 style={{ fontWeight: "700" }}>Email</h3>,
    defaultFlex: 1.5,
    headerProps: { style: style },
  },
  {
    name: "phone",
    header: <h3 style={{ fontWeight: "700" }}>Phone</h3>,
    defaultFlex: 0.8,
    headerProps: { style: style },
  },
  {
    name: "subject",
    header: <h3 style={{ fontWeight: "700" }}>Subject</h3>,
    defaultFlex: 1.2,
    headerProps: { style: style },
  },
  {
    name: "content",
    header: <h3 style={{ fontWeight: "700" }}>Content</h3>,
    defaultFlex: 3,
    headerProps: { style: style },
  },
  {
    name: "date",
    header: <h3 style={{ fontWeight: "700" }}>Date</h3>,
    defaultFlex: 0.8,
    headerProps: { style: style },
  },
  {
    name: "reply",
    header: <h3 style={{ fontWeight: "700" }}>Reply</h3>,
    defaultFlex: 0.6,
    headerProps: { style: style },
  },
];

export default columns;
