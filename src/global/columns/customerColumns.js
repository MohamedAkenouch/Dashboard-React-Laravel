const style={
    border:"none",
    color:"#033362",
    fontSize:"14px",
    fontWeight:'lighter'
  }
const styleDelete={
  border:"none",
  color:"#033362",
  fontSize:"11px",
  fontWeight:'lighter',
  height: '60'
}  
  const columns = [
      {
        name: 'id',
        header: <h3 style={{fontWeight: '700'}}>ID</h3>,
        defaultFlex: 0.7,
        headerProps: { style: style }
      }
      ,
      {
        name: 'name',
        header: <h3 style={{fontWeight: '700'}}>Name</h3>,
        defaultFlex: 2,
        headerProps: { style: style }
      }
      ,
      {
          name: 'email',
          header: <h3 style={{fontWeight: '700'}}>Email</h3>,
          defaultFlex: 3,
          headerProps: { style: style }
        }
        ,
        {
          name: 'phone',
          header: <h3 style={{fontWeight: '700'}}>Phone Number</h3>,
          defaultFlex: 2,
          headerProps: { style: style }
        }
      ,
      {
        name: 'date',
        header: <h3 style={{fontWeight: '700'}}>Date</h3>,
        defaultFlex: 2,
        headerProps: { style: style }
      }
      ,
      {
        name: 'time',
        header: <h3 style={{fontWeight: '700'}}>Time</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'actions',
        header: <h3 style={{fontWeight: '700', marginBottom: '4', marginTop: '4'}}></h3>,
        defaultFlex: 1,
        headerProps: { style: styleDelete }
      }
    ]
  
    export default columns