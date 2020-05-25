import queryString from 'query-string';

const buildUrl = ({ url, query }) => (
  queryString.stringifyUrl({ url, query })
);

const getSearchParams = () => (
  queryString.parse(window.location.search)
);

const getHashParams = () => (
  queryString.parse(window.location.hash)
);

const getHashParamsValue = key => (
  getHashParams()[key]
);

const getRequest = async ({ url, headers, query }) => {
    const formedUrl = buildUrl({ url, query });

    const response = await fetch(formedUrl, { headers });
    return await response.json();
}

export {
  buildUrl,
  getSearchParams,
  getHashParams,
  getHashParamsValue,
  getRequest,
};
