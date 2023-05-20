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
        defaultFlex: 0.5,
        headerProps: { style: style }
      }
      ,
      {
          name: 'offerName',
          header: <h3 style={{fontWeight: '700'}}>Offer Name</h3>,
          defaultFlex: 1.2,
          headerProps: { style: style }
        }
        ,
        {
          name: 'products',
          header: <h3 style={{fontWeight: '700'}}>Products</h3>,
          defaultFlex: 2,
          headerProps: { style: style }
        }
      ,
      {
        name: 'value',
        header: <h3 style={{fontWeight: '700'}}>Value</h3>,
        defaultFlex: 0.7,
        headerProps: { style: style }
      }
      ,
      {
        name: 'creationDate',
        header: <h3 style={{fontWeight: '700'}}>Creation Date</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'expirationDate',
        header: <h3 style={{fontWeight: '700'}}>Expiration Date</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'status',
        header: <h3 style={{fontWeight: '700'}}>Status</h3>,
        defaultFlex: 0.6,
        headerProps: { style: style }
      }
      ,
      {
        name: 'view',
        header: <h3 style={{fontWeight: '700'}}></h3>,
        defaultFlex: 0.5,
        headerProps: { style: style }
      }
    ]
  
    export default columns