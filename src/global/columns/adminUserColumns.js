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
        defaultFlex: 0.6,
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
        name: 'role',
        header: <h3 style={{fontWeight: '700'}}>Role</h3>,
        defaultFlex: 1.5,
        headerProps: { style: style }
      }
      ,
      {
        name: 'registred',
        header: <h3 style={{fontWeight: '700'}}>Registred</h3>,
        defaultFlex: 1.5,
        headerProps: { style: style }
      }
      ,
      {
        name: 'actions',
        header: <h3 style={{fontWeight: '700'}}></h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
    ]
  
    export default columns