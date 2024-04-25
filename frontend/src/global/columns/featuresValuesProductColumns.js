
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
        name: 'feature',
        header: <h3 style={{fontWeight: '700'}}>Feature</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'valueName',
        header: <h3 style={{fontWeight: '700'}}>Value Name</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'value',
        header: <h3 style={{fontWeight: '700'}}>Value</h3>,
        defaultFlex: 1,
        headerProps: { style: style },
        // cellClass: "textWrap"
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
        name: 'actions',
        header: <h3 style={{fontWeight: '700', marginBottom: '4', marginTop: '4'}}></h3>,
        defaultFlex: 1,
        headerProps: { style: styleDelete }
      }
    ]
  
    export default columns