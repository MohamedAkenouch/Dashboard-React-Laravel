
const style={
    border:"none",
    color:"#033362",
    fontSize:"14px",
    fontWeight:'lighter'
  }
  
  const columns = [
      {
        name: 'title',
        header: <h3 style={{fontWeight: '700'}}>Title</h3>,
        defaultFlex: 2,
        headerProps: { style: style }
      }
      ,
      {
        name: 'description',
        header: <h3 style={{fontWeight: '700'}}>Description</h3>,
        defaultFlex: 10,
        headerProps: { style: style },
      }
      
      ,
      {
        name: 'lastUpdated',
        header: <h3 style={{fontWeight: '700'}}>Last Updated</h3>,
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