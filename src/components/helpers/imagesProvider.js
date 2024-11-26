const url = 'http://localhost:3001/images';

export function fetchData(options, additionalPath = '') {
  const path = url + additionalPath;
  return fetch(path, options).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(resp);
  });
}

export function addData(data) {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetchData(options);
}

export function removeData(id) {
  const options = {
    method: 'DELETE',
  };
  return fetchData(options, `/${id}`);
}
