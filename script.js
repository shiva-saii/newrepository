const btn=document.getElementById('btn');
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const names=document.getElementById('name').value;
    alert(`thank you for registering ${names}`);
})