import env from '../env.json' assert {type: "json"};

const screenshotUrl = env.screenshotURL
const screenshotToken = env.screenshotToken

export const getScreenshot = async (website) => {
  
    const base = `https://${screenshotUrl}`;
    const query = `?token=${screenshotToken}&url=${website}&width=${window.screen.width}&height=${window.screen.height}`;

    const response = await fetch(base + query);
    const data = await response.json();
    const username = localStorage.getItem('username')

    return { screenshot: data.screenshot, url: data.url, user: username };

}
