// 设置cookies
function setCookie(key,value){
    if(date instanceof Date){// instanceof是否俩个属于同一个类型
        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    }else{
        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    }
}

// setCookie(c_name,c_pwd){
//     window.document.cookie = 'userName'+"="+c_name
//     window.document.cookie = 'userPwd'+"="+c_pwd
// },
// getCookie:function(){
//     if(document.cookie.length > 0){
//         var arr = document.cookie.split(';')
//         for(var i=0;i<arr.length;i++){
//             var arr2 = arr[i].split('=')
//             if(arr2[0]=='userName'){
//                 this.ruleForm.userName=arr2[1]
//             }else if(arr2[0]=='userPwd'){
//                 this.ruleForm.password=arr2[1];
//             }
//         }
//     }
// }
