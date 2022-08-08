var getacctitle = document.getElementsByClassName("acctitle");   // HTMl collection
// console.log(getacctitle[2]);
var getacccontent =  document.querySelectorAll(".acccontent");     // NodeList

// x = replace idx
for(var x = 0; x < getacctitle.length; x++ ){
        // console.log(x);

        getacctitle[x].addEventListener('click', function(e){
                // console.log(e.target);   // need event type.
                // console.log(this);  // no need even type.

                this.classList.toggle("active");  // this = target element.
                var getContent = this.nextElementSibling;  // .acccontent
                // console.log(getContent);

                if(getContent.style.height){
                        getContent.style.height=null; // beaware can't set 0.

                }else{
                        // getContent.style.height="50px";
                        // console.log(getContent);

                        getContent.style.height = getContent.scrollHeight + "px";
                }
        });

        if(getacctitle[x].classList.contains("active")){
                getacccontent[x].style.height = getacccontent[x].scrollHeight + "px";
        }

}