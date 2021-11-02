// 基础模板
/****
    export function getMenuList(){
     return new Promise((resolve, reject) =>{
        http({
            url:API.getMenuList,
            method: 'GET',
        }).then(({ data, status })=>{
             if (status != 200) {
                    //请求失败
                } else {
                    //请求成功
                    // 取得首字母，按字母先分类
                    resolve(data);
                }
        }).catch(error => {
                //请求失败
        })
     })
}
 */
// import API from '../api'
// import http from './http2'

// 定义接口

// 这个接口
// export function loginUser<T>(data?:any) {
//         http<T>({
//                 url: API.LOGIN,
//                 method: 'GET',
//                 data: data
//             })
// }
// //我需要控制的是，返回的数据，
// export function foodData<T,U>(data:U){
//     const obj = {
//         url:API.getMenuList,
//         method:'GET',
//         data:data
//     }
//     return  http<T>(obj)

// }

// 定义统一的 interface 接口，http 泛型 和 页面内赋值参数的使用
export interface MenuListProps {
    name: string;
    menuList: object[];
    status: number;
    storeNo: string;
    type: number
}

export interface httpMenuProps {
    list: MenuListProps[]
}

export interface artistList {
    cat: number,
    initial?: string
}
export interface loginInfo {
    phone: string,
    password: string
}
