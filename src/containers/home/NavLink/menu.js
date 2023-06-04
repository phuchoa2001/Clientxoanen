
const Navlinkmenu = [
    {
        name: "Trang Chủ"  , 
        to : '/' , 
        exact: true 
    } ,
    {
      name: "Tin tức"  , 
      to : '/blog/page/1' , 
      exact: false 
    } ,  
    {
      name: "Cắt Icon"  , 
      to : '/cuticon' , 
      exact: false 
    }, 
    {
      name: 'Đăng Nhập'  , 
      to : '/login' , 
      exact: false 
    }
]

export default Navlinkmenu;