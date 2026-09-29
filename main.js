let exploreStores = document.getElementById("explorestores");

if (exploreStores) {
    exploreStores.addEventListener("click", function() {
        featuredstores.scrollIntoView({ behavior: "smooth" });
    });
}
let bookbtn = document.getElementById("bookbtn");
if(bookbtn){
    bookbtn.addEventListener("click",function(){
        window.location.href=("contactpage.html");
    })
}
let viewStoreBtns = document.querySelectorAll(".viewstorebtn");

viewStoreBtns.forEach(button => {
    button.addEventListener("click", function () {
        let url = button.dataset.url;
        window.open(url, "_blank");
    });
});
let sendmessage=document.getElementById("sendmessage");
let fullname=document.getElementById("fullname");
let email=document.getElementById("email");
let subject=document.getElementById("subject");
let message=document.getElementById("message");
let formmessage=document.getElementById("formmessage");
sendmessage.addEventListener("click",function(){
    if(fullname.value ==="" || email.value==="" || subject.value==="" || message.value === ""){
        formmessage.textContent="Please fill all fields";
    }
    else{
       formmessage.textContent="Thank you! Form validation completed successfully.";
    }
    
})
