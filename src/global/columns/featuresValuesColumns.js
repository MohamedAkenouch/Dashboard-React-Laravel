
const style={
    border:"none",
    color:"#033362",
    fontSize:"14px",
    fontWeight:'lighter'
  } 

  const styleDelete={
    border:"none",
    color:"#033362",
    fontSize:"14px",
    fontWeight:'lighter',
    height: '90'
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
        name: 'value',
        header: <h3 style={{fontWeight: '700'}}>Value</h3>,
        defaultFlex: 1.5,
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
        name: 'price',
        header: <h3 style={{fontWeight: '700'}}>Price</h3>,
        defaultFlex: 1,
        headerProps: { style: style },
        // cellClass: "textWrap"
      }
      ,
      {
        name: 'feature',
        header: <h3 style={{fontWeight: '700'}}>Feature</h3>,
        defaultFlex: 1,
        headerProps: { style: style },
        // cellClass: "textWrap"
      }
      
      ,
      {
        name: 'edit',
        header: <h3 style={{fontWeight: '700', marginBottom: '4', marginTop: '4'}}></h3>,
        defaultFlex: 1,
        headerProps: { style: styleDelete }
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