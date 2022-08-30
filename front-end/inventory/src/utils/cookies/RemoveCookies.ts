import Cookies from 'js-cookie';

const removeCookies = (cookiename:any)=>{
     Cookies.remove(cookiename)
}

export default removeCookies;