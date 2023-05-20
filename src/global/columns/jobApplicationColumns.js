const style={
    border:"none",
    color:"#033362",
    fontSize:"14px",
    fontWeight:'lighter'
  }
  
  const columns = [
      {
        name: 'pos',
        header: <h3 style={{fontWeight: '700'}}>pos</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
          name: 'name',
          header: <h3 style={{fontWeight: '700'}}>Name</h3>,
          defaultFlex: 1.5,
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
          name: 'age',
          header: <h3 style={{fontWeight: '700'}}>Age</h3>,
          defaultFlex: 1,
          headerProps: { style: style }
        }
      ,
        {
          name: 'phone',
          header: <h3 style={{fontWeight: '700'}}>Phone Number</h3>,
          defaultFlex: 1.5,
          headerProps: { style: style }
        }
      ,
      {
        name: 'jobPosition',
        header: <h3 style={{fontWeight: '700'}}>Job Position</h3>,
        defaultFlex: 1.5,
        headerProps: { style: style }
      }
      ,
      {
        name: 'applicationDate',
        header: <h3 style={{fontWeight: '700'}}>Application Date</h3>,
        defaultFlex: 1.6,
        headerProps: { style: style }
      }
      ,
      {
        name: 'status',
        header: <h3 style={{fontWeight: '700'}}>Status</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'view',
        header: <h3 style={{fontWeight: '700'}}></h3>,
        defaultFlex: 0.7,
        headerProps: { style: style }
      }
    ]
  
    export default columns