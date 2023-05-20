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
      name: 'phone',
      header: <h3 style={{fontWeight: '700'}}>Phone</h3>,
      defaultFlex: 1.5,
      headerProps: { style: style }
    }
    ,
    {
      name: 'email',
      header: <h3 style={{fontWeight: '700'}}>Name / Email</h3>,
      defaultFlex: 3,
      headerProps: { style: style }
    }
    ,
    {
      name: 'products',
      header: <h3 style={{fontWeight: '700'}}>Products</h3>,
      defaultFlex: 1.5,
      headerProps: { style: style }
    }
    ,
    {
      name: 'adress',
      header: <h3 style={{fontWeight: '700'}}>Adress</h3>,
      defaultFlex: 2,
      headerProps: { style: style }
    }
    ,
    {
      name: 'time',
      header: <h3 style={{fontWeight: '700'}}>Time</h3>,
      defaultFlex: 1.5,
      headerProps: { style: style }
    }
    ,
    {
      name: 'date',
      header: <h3 style={{fontWeight: '700'}}>Date</h3>,
      defaultFlex: 1.5,
      headerProps: { style: style }
    }
    ,
    {
      name: 'total',
      header: <h3 style={{fontWeight: '700'}}>Total</h3>,
      defaultFlex: 1.5,
      headerProps: { style: style }
    }
    ,
    {
      name: 'status',
      header: <h3 style={{fontWeight: '700'}}>Status</h3>,
      defaultFlex: 1.5,
      headerProps: { style: style }
    }
    ,
    {
      name: 'view',
      header: <h3 style={{fontWeight: '700'}}></h3>,
      defaultFlex: 1,
      headerProps: { style: style }
    }
  ]

  export default columns