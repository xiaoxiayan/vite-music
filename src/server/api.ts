// 配置 发送请求需要的API接口，根据文档
import { httpMenuProps } from './appServe'

const apiList = {
  LOGIN: '/api/login/loginUsr',
  getMenuList: '/api/foodDetail/getItemDetail',
  // 歌手分类列表
  artistList: '/aaa/artist/list',
  bannerList: '/aaa/banner'
}

// typeof 获取 apiList 的变量类型， 然后 keyof 在获取 这个变量的 key值
// 然后定义 一个 type
export type apiKeyType = keyof typeof apiList;

// interface apiCommon{
//     code :number;
// }
// interface getMenuListProps {
//     name: string;
//     menuList: object[];
//     status: number;
//     storeNo: string;
//     type: number
// }

export interface apiKeyDataType {
    'LOGIN': {
       code: number;
       data : {
            name: string;
            age: number;
       }
    },
    'getMenuList': {
        code: number;
        data:httpMenuProps
    },
   'artistList': {
       code:number;
       data: {
        artists:[]
       }
   },
   'bannerList': {
       code:number,
       banners:[]
   }

}

export default apiList
