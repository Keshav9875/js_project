let str="";
const buttons=document.querySelectorAll('button');
const inputele=document.querySelector('#input_text');
const arr=Array.from(buttons);


arr.forEach((btn)=>{
     btn.addEventListener('click',()=>{
            const value=btn.textContent;
            

            if(value==='AC'){
                str="";
                
            }
            else if(value==='DEL'){
                   
                    str=str.substring(0,str.length-1);  
                   
            }
            else if(value==='='){
               
                try{
                    str=eval(str).toString();
                
                }
                catch(error){
                    str="";
                    console.error("An error occurred:", error);
                }
                
            }
            else{
                str+=value;
            }

            if(str!==""){
                inputele.classList.add('typing');
            }
            else{
                inputele.classList.remove('typing');
            }
          

            inputele.value=str;
     })
})