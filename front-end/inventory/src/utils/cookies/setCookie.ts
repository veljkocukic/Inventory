import Cookies from 'js-cookie';

const setCookies = (cookiename:any,usrin:any)=>{
    Cookies.set(cookiename, usrin, {
        expires:1,
        secure:true,
        sameSite:'strict',
        path:'/'
    })
}

export default setCookies;