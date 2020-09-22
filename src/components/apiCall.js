const optionsForGet = (headers) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  return {
    headers: {
      ...defaultHeaders,
      ...headers
    },
  };
};

const optionsForPost = (body, headers) => {
  const headersForReq = optionsForGet(headers);
  return {
    ...headersForReq,
    body: JSON.stringify(body),
    method: 'POST',
  };
};

const getOptions = (body, method, headers) => {
  if (method === 'GET') return optionsForGet(headers);
  return optionsForPost(body, headers);
};

const fetchReq = async (url, body, method, headers) => {
  const res = await fetch(url, getOptions(body, method, headers));
  return await res.json();
};

const apiCall = (action) => {
  switch (action.type) {
    case 'SIGNUP':
      return fetchReq('/signup', action.body, 'POST');
    case 'SIGNIN':
      return fetchReq('/signin', action.body, 'POST');
    case 'CREATE_POST':
      return fetchReq('/createPost', action.body, 'POST', action.headers);
    case 'ALL_POST':
      return fetchReq('/allPost', action.body, 'GET', action.headers);
    default:
      return new Promise((resolve, reject) => reject());
  }
};

export default apiCall;
