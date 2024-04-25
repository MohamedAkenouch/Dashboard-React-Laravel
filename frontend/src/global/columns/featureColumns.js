
const style={
  border:"none",
  color:"#033362",
  fontSize:"14px",
  fontWeight:'lighter'
}

const columns = [
    {
      name: 'id',
      header: <h3 style={{fontWeight: '700'}}>ID</h3>,
      defaultFlex: 1,
      headerProps: { style: style }
    }
    ,
    {
      name: 'key',
      header: <h3 style={{fontWeight: '700'}}>Key</h3>,
      defaultFlex: 1,
      headerProps: { style: style }
    }
    ,
    {
      name: 'name',
      header: <h3 style={{fontWeight: '700'}}>Name</h3>,
      defaultFlex: 1,
      headerProps: { style: style }
    }
    ,
    {
      name: 'values',
      header: <h3 style={{fontWeight: '700'}}>Nuber of values</h3>,
      defaultFlex: 1,
      headerProps: { style: style },
      // cellClass: "textWrap"
    }
    ,
    {
      name: 'actions',
      header: <h3 style={{fontWeight: '700'}}></h3>,
      defaultFlex: 0.5,
      headerProps: { style: style }
    }
    ,
    {
      name: 'delete',
      header: <h3 style={{fontWeight: '700'}}></h3>,
      defaultFlex: 1,
      headerProps: { style: style },
      // cellClass: "textWrap"
    }
  ]

  export default columns