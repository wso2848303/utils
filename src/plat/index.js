export default {
  isWeiXin: () => {
    return !!window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
  },
  isMobile: () => {
    return !!navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
  }
};
