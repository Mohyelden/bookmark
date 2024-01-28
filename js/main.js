var sitename=document.getElementById("sitename");
var siteurl=document.getElementById("siteurl");


var websitelist=[];
if(localStorage.getItem("websites")!=null){
    websitelist=JSON.parse(localStorage.getItem("websites"));
    displaydata();
}
function addwebsite(){
   if(validationsitename()==true&&validationsiteurl()==true){
    var website={
        name:sitename.value,
        url:siteurl.value
      };
    websitelist.push(website);
    localStorage.setItem("websites",JSON.stringify(websitelist));
    clearwebsite();
    displaydata();
   }
   else if(validationsitename()==false||validationsiteurl()==false){
    showerormessage();
   }
   else{
    showerormessage();

   }
}
function clearwebsite(){
    sitename.value="";
    siteurl.value="";
}
function displaydata() {
    var cartona = '';
    for (var i = 0; i < websitelist.length; i++) {
        cartona += ` <tr>
            <td>${i}</td>
            <td>${websitelist[i].name}</td>
            <td><a href="${websitelist[i].url}"><button class="visit"><i class=" p-1 fa-solid fa-eye"></i>Visit</button></a></td>
            <td><button onclick="deletewebsite(${i})" class="delete">
                <i class="fa-solid fa-trash"></i> Delete
            </button></td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartona;
}

function deletewebsite(elementnumber){
    
websitelist.splice(elementnumber,1);
localStorage.setItem("websites",JSON.stringify(websitelist));

displaydata();
}
function closeerrormessage(){
    document.getElementById("closebtn").classList.add("d-none");
    document.getElementById("layer").classList.add("d-none");

    
}


function validationsitename(){
    var text=sitename.value;
    var regexsitename=/^.{3,}$/
    if(regexsitename.test(text)==true){
        document.getElementById("sitename").classList.add("is-valid");
        document.getElementById("sitename").classList.remove("is-invalid");
       
        return true;
    }
    else{
        document.getElementById("sitename").classList.add("is-invalid");
        document.getElementById("sitename").classList.remove("is-valid");
        return false;
    }
}

function validationsiteurl(){
    var text=siteurl.value;
    var regexsiteurl=/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/
    if(regexsiteurl.test(text)==true){
        document.getElementById("siteurl").classList.add("is-valid");
        document.getElementById("siteurl").classList.remove("is-invalid");
       
        return true;
    }
    else{
        document.getElementById("siteurl").classList.add("is-invalid");
        document.getElementById("siteurl").classList.remove("is-valid");
        return false;
    }
}

function showerormessage() {
    var isNameValid = validationsitename();
    var isUrlValid = validationsiteurl();

    if (!isNameValid || !isUrlValid) {
        document.getElementById("closebtn").classList.remove("d-none");
        document.getElementById("layer").classList.remove("d-none");
    }
}
