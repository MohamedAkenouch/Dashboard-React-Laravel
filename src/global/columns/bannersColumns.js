
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
        name: 'image',
        header: <h3 style={{fontWeight: '700'}}>Image</h3>,
        defaultFlex: 1.5,
        headerProps: { style: style },
      }
      ,
      {
        name: 'text',
        header: <h3 style={{fontWeight: '700'}}>Text</h3>,
        defaultFlex: 2.5,
        headerProps: { style: style }
      }
      ,
      {
        name: 'category_id',
        header: <h3 style={{fontWeight: '700'}}>Category ID</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
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