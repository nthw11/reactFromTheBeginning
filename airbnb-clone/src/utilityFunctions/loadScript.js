/* eslint-disable import/no-anonymous-default-export */
export default (scriptUrl) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptUrl;
    script.onload = () => {
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
