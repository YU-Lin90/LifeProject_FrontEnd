const siteName = window.location.hostname;
const backEndPort = 3011;
const siteAddress = {
  siteName: siteName,
  backEndPort: backEndPort,
  fullAddress: `http://${siteName}:${backEndPort}/`,
};
export default siteAddress;
