 
export function getMenuItem(path, menudata) {
  if (!Array.isArray(menudata)) {
    return null;
  }
  let result   = null;
  for (let item of menudata) {
    if (item.children && Array.isArray(item.children)) {
      for (let i = 0; i < item.children.length; i++) {
        if (path.indexOf(item.children[i].path) > -1 ) {
           result =  item.children[i];
           return result;
        }
      }
    }
  }
  return result;
};
export function getSpecialItemsByPath(path, menudata,specialList) {
  let item = getMenuItem(path, menudata);
  if (!item) return;
  let { id} = item;
  let result = specialList.filter((i) => {
    return id.indexOf(i.id) > -1;
  });
  return result;
}
