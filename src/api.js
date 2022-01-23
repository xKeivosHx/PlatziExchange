const SERVER_URL = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${SERVER_URL}/assets?limit=20`, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAsset(coinName) {
  return fetch(`${SERVER_URL}/assets/${coinName}`, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAssetHistory(coinName) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);

  const start = now.getTime();

  return fetch(
    `${SERVER_URL}/assets/${coinName}/history?interval=h1&start=${start}&end=${end}`,
    {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

function getMarkets(coin) {
  return fetch(`${SERVER_URL}/assets/${coin}/markets?limit=5`, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
  return fetch(`${SERVER_URL}/exchanges/${id}`, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
