document.getElementById("slider").addEventListener("input",(e)=>{
    document.getElementById("value").innerHTML=`$${e.target.value}`
})