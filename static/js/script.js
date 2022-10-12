function grt(){
  window.location.reload();
}

function greet(){
  
   let cod = document.getElementById("cod").value
//    console.log(a);
document.getElementById("cdd").innerHTML = ("Country Code:"+ cod)
let ab = fetch('https://restcountries.com/v2/callingcode/'+ cod )
  .then((response) => response.json()) 
  .then((data) => {
   return data[0].flag }) 

  .then((bb) => {
      let img = new Image();
      img.src = bb
      flag.appendChild(img);
   }) 
  .catch(() => {
    let img = new Image();
    img.src ='https://thiscatdoesnotexist.com/'
    flag.appendChild(img);
    
  });
  
  // const printFlag = async () => {
  //   const ac = await ab;
  //   console.log(ac);
  
  //   function addimage() {
  //     var img = new Image();
  //     img.src = ac
  //     flag.appendChild(img);
  //   }

  //   addimage();
  // }
  // printFlag();
 
}
