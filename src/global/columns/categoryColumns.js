const style = {
  border: "none",
  color: "#0388CC",
  fontSize: "13px",
  fontWeight: "lighter",
};
const styleDelete={
  border:"none",
  color:"#033362",
  fontSize:"14px",
  fontWeight:'lighter',
  height: '90'
}

const columns = [
  {
    name: "image",
    header: <h3 style={{ fontWeight: "400" }}></h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "id",
    header: <h3 style={{ fontWeight: "400" }}>ID</h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "name",
    header: <h3 style={{ fontWeight: "400" }}>Name</h3>,
    defaultFlex: 2,
    headerProps: { style: style },
  },

  {
    name: "products",
    header: <h3 style={{ fontWeight: "400" }}>Products</h3>,
    defaultFlex: 1.5,
    headerProps: { style: style },
  },

  {
    name: "view",
    header: <h3 style={{ fontWeight: "400" }}></h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: 'actions',
    header: <h3 style={{fontWeight: '700', marginBottom: '4', marginTop: '4'}}></h3>,
    defaultFlex: 1,
    headerProps: { style: styleDelete }
  }
];

export default columns;
