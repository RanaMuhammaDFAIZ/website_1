// class passward{
//     constructor(){
//         console.log("wellcome to passward generator")
//     }

//     genaratepassward(len){
//         let char = "abcdefghijklmnopqrstuvwxyz";
//         let number = "0123456789";
//         let special = "!@#$%^&*()_+() ";
//     };
//     if(let<3){
// console.log("your passward is too short")
//     }

//     else{
        
// }
// }
// class Password {
//     constructor() {
//       console.log("Welcome to Password Generator")
//       this.pass = ""
//     }
//     generatePassword(len) {
//       let chars = "abcdefghijklmnopqrstuvwxyz"
//       let numbers = "1234567890"
//       let special = "!@#$%^&*()"
//       if (len < 3) {
//         console.log("Your password should be atleast 3 characters long")
//       }
//       else {
//         let i = 0
//         while (i < len) {
//           this.pass += chars[Math.floor(Math.random() * chars.length)]
//           this.pass += numbers[Math.floor(Math.random() * numbers.length)]
//           this.pass += special[Math.floor(Math.random() * special.length)]
//           i += 3
//         }
//         this.pass = this.pass.substr(0, len)
//         return this.pass
//       }
//     }
//   }
  
//   let p = new Password()
//   console.log(p.generatePassword(1))
  
// class passward{
//     constructor(){
//         this .uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         this .lowercase="abcdefghijklmnopqrstuvwxyz";
//         this .number="0123456789";
//         this .special="!@#$%^&*()_+";
//     }
//     funuypassward(){
//         let arr=["password","incorrect","12345678","iforgot","secret","MyPreciousssPasssword","MyName","Chitu_Hacker","nothing","user","maiNahiBatunga","Sorry","1$perhour","admin","passwordIs1234"];
// let pass=arr[Math.floor(Math.random()*arr.length)];
// return pass;
//     }
//     weakpassward(){
//         let arr=[this.uppercase,this.lowercase];
//         let pass="";
//         for(let i=0;i<arr.length;i++){
// let ra1=Math.floor(Math.random()*arr.length);
// let ra2=Math.floor(Math.random()*arr[ra1].length)

//         }
//         strongPassword(){
//             let arr= [this.upcl,this.lwcl,this.symb]
//         let pass= ""
//         for(let i= 0;i<15;i++){
//           let Ran1= Math.floor(Math.random()*arr.length)
//           let Ran2= Math.floor(Math.random()*arr[Ran1].length)
          
//           pass= pass+arr[Ran1][Ran2]
//         }
//         return pass
//         }
//       superStrongPassword(){
//             let arr= [this.upcl,this.lwcl,this.num,this.symb]
//         let pass= ""
//         for(let i= 0;i<25;i++){
//           let Ran1= Math.floor(Math.random()*arr.length)
//           let Ran2= Math.floor(Math.random()*arr[Ran1].length)
          
//           pass= pass+arr[Ran1][Ran2]
//         }
//         return pass
//     }
// }
// }
class password {
    constructor() {
      this.upcl= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          this.lwcl= "abcdefghijklmnopqrstuvwxyz";
          this.num= "1234567890";
          this.symb= "$_@&?!#/><\[]";
    }
      funnyPassword(){
          let arr= ["password","incorrect","12345678","iforgot","secret","MyPreciousssPasssword","MyName","Chitu_Hacker","nothing","user","maiNahiBatunga","Sorry","1$perhour","admin","passwordIs1234"]
      let pass= arr[Math.floor(Math.random()*arr.length)]
      return pass
      }
      
      weakPassword(){
          let arr= [this.upcl,this.lwcl]
      let pass= ""
      for(let i= 0;i<8;i++){
        let Ran1= Math.floor(Math.random()*arr.length)
        let Ran2= Math.floor(Math.random()*arr[Ran1].length)
        
        pass= pass+arr[Ran1][Ran2]
      }
      return pass
      }
      
      strongPassword(){
          let arr= [this.upcl,this.lwcl,this.symb]
      let pass= ""
      for(let i= 0;i<15;i++){
        let Ran1= Math.floor(Math.random()*arr.length)
        let Ran2= Math.floor(Math.random()*arr[Ran1].length)
        
        pass= pass+arr[Ran1][Ran2]
      }
      return pass
      }
    superStrongPassword(){
          let arr= [this.upcl,this.lwcl,this.num,this.symb]
      let pass= ""
      for(let i= 0;i<25;i++){
        let Ran1= Math.floor(Math.random()*arr.length)
        let Ran2= Math.floor(Math.random()*arr[Ran1].length)
        
        pass= pass+arr[Ran1][Ran2]
      }
      return pass
    }
  }
  
  
                  
  let disp = document.getElementById("disp");
  let radio = document.getElementsByClassName("redio");
  let btn = document.getElementById("btn");
  let copy = document.getElementById("copy");
  //output.innerHTML = slider.value;
  
  let a= new password()
  
  btn.addEventListener("click",()=>{
      let b;
      if(radio[0].checked){
          b= a.funnyPassword()
      }
      else if(radio[1].checked){
          b= a.weakPassword()
      }
      else if(radio[2].checked){
          b= a.strongPassword()
      }
      else if(radio[3].checked){
          b= a.superStrongPassword()
      }
  disp.value= b
  })
  
  const toastLiveExample = document.getElementById('liveToast')
  const toast = new bootstrap.Toast(toastLiveExample)
  
  copy.addEventListener("click",()=>{
      if(disp.value!= ""){
  disp.select()
    disp.setSelectionRange(0, 33);
    document.execCommand("copy")
    navigator.clipboard.writeText(disp.value)
      toast.show()
      }
  })