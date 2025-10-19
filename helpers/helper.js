function stringifyObject(object) {
  for (const [key, value] of Object.entries(object)) {
    if (typeof value === 'boolean') {
      if (value) object[key] = 1;
      else object[key] = 0;
    }
    if (typeof value === 'object') {
      return value.toString();
    }
  }
  /*
    const json = JSON.stringify(object, (key, value) => {
        if (typeof value === 'boolean') {
            if (value) return value = 1
            else return value = 0
        }
        return value
    })
    */
  return object;
}

function mountingObject(json) {
  const object = JSON.parse(json, (key, value) => {
    if (typeof value === 'number') {
      if (value === 1) return value = true;
      return value = false;
    }
    return value;
  });
  return object;
}

module.exports = {
  stringifyObject,
};
