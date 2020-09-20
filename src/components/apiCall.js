const optionsForGet = () => {
  return {
    headers: { 'Content-Type': 'application/json' },
  };
};

const optionsForPost = (body) => {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    method: 'POST',
  };
};

const getOptions = (body, method) => {
  if (method === 'GET') return optionsForGet();
  return optionsForPost(body);
};

const fetchReq = async (url, body, method = 'GET') => {
  const res = await fetch(url, getOptions(body, method));
  return await res.json();
};

const apiCall = (action) => {
  switch (action.type) {
    case 'SIGNUP':
      return fetchReq('/signup', action.body, 'POST');
    case 'SIGNIN':
      return fetchReq(`/signin`, action.body, 'POST');
    default:
      return fetchReq('/');
  }
};

export default apiCall;
