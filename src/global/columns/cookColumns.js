const style = {
  border: "none",
  color: "#0388CC",
  fontSize: "13px",
  fontWeight: "lighter",
};

const columns = [
  {
    name: "image",
    header: <h3 style={{ fontWeight: "700" }}></h3>,
    defaultFlex: 0.7,
    headerProps: { style: style },
  },
  {
    name: "name",
    header: <h3 style={{ fontWeight: "700" }}>Name / Code</h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "category",
    header: <h3 style={{ fontWeight: "700" }}>Category</h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "standards",
    header: <h3 style={{ fontWeight: "700" }}>Standards <span className="font-arabic font-[400]"> المكونات</span></h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "video",
    header: <h3 style={{ fontWeight: "700" }}>Video URL</h3>,
    defaultFlex: 1,
    headerProps: { style: style },
  },
  {
    name: "lastUpdated",
    header: <h3 style={{ fontWeight: "700" }}>Last Update</h3>,
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
