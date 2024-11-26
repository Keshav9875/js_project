
const baseurl="https://api.github.com/users/";
const getSearchBtn=document.querySelector(".search_btn");
const getInputEle=document.querySelector(".input_text");
const getprofilecontainerele=document.querySelector(".profilecontainer");
const loadingele=document.querySelector(".loading");




getSearchBtn.addEventListener('click',async ()=>{
    const username=getInputEle.value.trim();
    try{
        if(username){
            const fetchurl=`${baseurl}${username}`;
            const res = await fetch(fetchurl);
            
            if(!res.ok){
                if(res.status===404){
                    loadingele.innerHTML="";
                    getprofilecontainerele.classList.add("errorcontainer");
                    getprofilecontainerele.innerHTML = "<h1>User not found! Please enter a valid username...</h1>";

                } 
                else{
                    loadingele.innerHTML="";
                    getprofilecontainerele.classList.add("errorcontainer");
                    getprofilecontainerele.innerHTML="<h1>An error occured! please try again later</h1>"
                }
            }
            else{
                const data= await res.json();
                // console.log(data);
                if(getprofilecontainerele.classList.contains('errorcontainer')){
                    getprofilecontainerele.classList.remove('errorcontainer');
                   
                }
                    loadingele.innerHTML="";
                    getprofilecontainerele.innerHTML=cardFunc(data);
                
              
            }

            
        }
        else{
            loadingele.innerHTML="";
            getprofilecontainerele.classList.add("errorcontainer");
            getprofilecontainerele.innerHTML="<h1>please! Enter a valid username</h1>";

        }
    }
    catch(error){
        loadingele.innerHTML="";
        getprofilecontainerele.classList.add("errorcontainer");
        getprofilecontainerele.innerHTML="<h1>An error occur during fetch</h1>"+`<br><h1>${error}</h1>`;
    }
    
 
});


const cardFunc=(data)=>{
    const dummy_html_url="https://github.com/topics/home-page";
    const dummy_img_url="https://placehold.co/80x80/png";
    return `<div class="cardcontainer">
        <div class="cardheader">
          <div class="avatar">
            <img
              src="${data.avatar_url??dummy_img_url}"
              class="avatar_img"
              alt="profile_picture"
            />
            <div class="avatarnamecontainer">
              <h3 class="name_avatar">${data.name ? data.name : "No Name Available"}</h3>
              <h3 class="avatar_username">${data.login?data.login:"No Login Name"}</h3>
            </div>
          </div>
          <div class="profile_container">
           <a href="${data.html_url?data.html_url:dummy_html_url}" target="_blank">
            <button class="profile_btn">check profile</button>
           </a>
          </div>

          </div>

          <div class="aboutcontainer">
            <h1>About</h1>
            <p>${data.bio?data.bio:"No Bio Available"}</p>
          </div>

          <div class="follower_container">
            <div class="follower">
                <h3>Followers</h3>
                <p>${data.followers}</p>
            </div>

            <div class="followings">
                <h3>Followings</h3>
                <p>${data.following}</p>
            </div>

            <div class="repos">
                <h3>Repos</h3>
                <p>${data.public_repos}</p>
            </div>

            
          </div>
        </div>
      </div>`;
}

