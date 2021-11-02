import axios from 'axios'

const bannerList = {
  success: true,
  code: 200,
  data: [
    { imageUrl: 'http://img.desktx.com/d/file/wallpaper/scenery/20170303/dfe53a7300794009a029131a062836d5.jpg' },
    { imageUrl: 'http://img.desktx.com/d/file/wallpaper/scenery/20170303/dfe53a7300794009a029131a062836d5.jpg' },
    { imageUrl: 'http://img.desktx.com/d/file/wallpaper/scenery/20170303/dfe53a7300794009a029131a062836d5.jpg' },
    { imageUrl: 'http://img.desktx.com/d/file/wallpaper/scenery/20170303/dfe53a7300794009a029131a062836d5.jpg' },
    { imageUrl: 'http://img.desktx.com/d/file/wallpaper/scenery/20170303/dfe53a7300794009a029131a062836d5.jpg' },
    { imageUrl: 'http://img.desktx.com/d/file/wallpaper/scenery/20170303/dfe53a7300794009a029131a062836d5.jpg' }
  ]
}
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get (url) {
    if (url === '/banner') {
      return new Promise((resolve) => {
        resolve(bannerList)
      })
    }
  }
}
