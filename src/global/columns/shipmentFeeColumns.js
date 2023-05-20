const style = {
    border: "none",
    color: "#0F3F62",
    fontSize: "13px",
    fontWeight: "lighter",
  };
  
  const columns = [
    {
      name: "id",
      header: <h3 style={{ fontWeight: "700" }}>ID</h3>,
      defaultFlex: 1,
      headerProps: { style: style },
    },
    {
      name: "locationName",
      header: <h3 style={{ fontWeight: "700" }}>Location Name</h3>,
      defaultFlex: 1,
      headerProps: { style: style },
    },
    {
      name: "location",
      header: <h3 style={{ fontWeight: "700" }}>Location</h3>,
      defaultFlex: 1,
      headerProps: { style: style },
    },
    {
      name: "additionalFee",
      header: <h3 style={{ fontWeight: "700" }}>Additional Fee</h3>,
      defaultFlex: 1,
      headerProps: { style: style },
    },
    {
      name: "creationDate",
      header: <h3 style={{ fontWeight: "700" }}>Creation Date</h3>,
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
  