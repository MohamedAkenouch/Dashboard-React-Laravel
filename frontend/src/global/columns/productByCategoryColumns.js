const style={
    border:"none",
    color:"#0388CC",
    fontSize:"13px",
    fontWeight:'lighter'
  }
  
  const columns = [
      {
        name: 'image',
        header: <h3 style={{fontWeight: '700'}}></h3>,
        defaultFlex: 0.7,
        headerProps: { style: style }
      }
      ,
      {
        name: 'id',
        header: <h3 style={{fontWeight: '700'}}>ID</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'name',
        header: <h3 style={{fontWeight: '700'}}>Name / Code</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'price',
        header: <h3 style={{fontWeight: '700'}}>Price</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      },
      {
        name: 'description',
        header: <h3 style={{fontWeight: '700'}}>Description</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'actions',
        header: <h3 style={{fontWeight: '700'}}></h3>,
        defaultFlex: 0.5,
        headerProps: { style: style }
      }
    ]
  
    export default columns