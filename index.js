const url = "http://localhost:3000/students";

let data =  async ()=>{
    let mydata = await fetch(url).then(
        console.log(mydata.json())
    );
   
}
console.log(data)