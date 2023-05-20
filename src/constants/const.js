
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function  getActiveOrders(orders, users) {
  return orders.filter(order => {
    if(users.find(u => u.id == order.user_id)) {
      return order;
    } 
  });
}

export function toFixed(str, n) {
  return parseFloat(str).toFixed(n);
}

export function getLocalDateFormat(str) {
  let res = str.replace("Z", "");
  if(str.indexOf('.') == -1){
    return res;
  }
  return res.substring(0, str.indexOf('.'));
}
  