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
        name: 'name',
        header: <h3 style={{fontWeight: '700'}}>Name / Code</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'category',
        header: <h3 style={{fontWeight: '700'}}>Category</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'sku',
        header: <h3 style={{fontWeight: '700'}}>SKU</h3>,
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
        name: 'lastUpdated',
        header: <h3 style={{fontWeight: '700'}}>Last Update</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'inStock',
        header: <h3 style={{fontWeight: '700'}}>In Stock</h3>,
        defaultFlex: 1,
        headerProps: { style: style }
      }
      ,
      {
        name: 'status',
        header: <h3 style={{fontWeight: '700'}}>Status</h3>,
        defaultFlex: 0.8,
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