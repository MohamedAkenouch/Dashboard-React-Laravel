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
        defaultFlex: 0.5,
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
        name: 'cooksByCategories',
        header: <h3 style={{fontWeight: '700'}}>Cooks By Categories</h3>,
        defaultFlex: 3,
        headerProps: { style: style }
      },
      {
        name: 'cooks',
        header: <h3 style={{fontWeight: '700'}}>Cooks</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'lastUpdated',
        header: <h3 style={{fontWeight: '700'}}>Last Update</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'view',
        header: <h3 style={{fontWeight: '700'}}></h3>,
        defaultFlex: 0.5,
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