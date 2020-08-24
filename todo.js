if(!localStorage.total){
      localStorage.setItem("total",0);
    }    
    var pk=Number(localStorage.getItem("total"));
   
    function addfunc(){      

      document.getElementById("help").innerHTML="";
      var ipvalue,li,span,att;
      ipvalue=document.getElementById("inp").value;

      if(ipvalue==""){
        document.getElementById("alerter").innerHTML="you have not added any task!";
        return;
      }
      document.getElementById("alerter").innerHTML="";

      li=document.createElement("LI");
      li.innerHTML=ipvalue;
      span=document.createElement("SPAN");
      att = document.createAttribute("class");       
      att.value = "fa fa-close";                         
      span.setAttributeNode(att);
      // span.style.fontSize="24px";
      span.setAttribute("id",String(pk));

      span.addEventListener("click", deletefunc);
      li.appendChild(span);
      li.addEventListener("click", underlinerfunc);
      document.getElementById("ull").appendChild(li);   
      document.getElementById("inp").value="";

      localStorage.setItem(String(pk),ipvalue);
      localStorage.setItem(String(pk)+"c","0");
      pk++;
      localStorage.setItem("total",String(pk));
    }

    function deletefunc(){      
      var temp=this.getAttribute("id");
      localStorage.removeItem(temp);
      this.parentElement.remove();           
    }

    function underlinerfunc(){
      if(this.hasAttribute("class")){
        this.removeAttribute("class");

        var sp=this.getElementsByTagName('span');
        var ip=sp[0].id;
        localStorage.setItem(ip+"c","0");
        // console.log(localStorage.getItem(ip+"c"));
      }
      else{
        var att = document.createAttribute("class");       
        att.value = "checked";                           
        this.setAttributeNode(att);     

        var sp=this.getElementsByTagName('span');
        var ip=sp[0].id;
        localStorage.setItem(ip+"c","1");
        // console.log(localStorage.getItem(ip+"c"));
      }  
      
    }

    function submitby(){
      if(event.keyCode == 13){
        var but=document.getElementById("subbtn");
        but.click();
      }
    }

    function extracter(){
      if(pk!=0){
        var j=0;
        for(j=0;j<pk;j++){
        var ipvalue,li,span,att;
        ipvalue=localStorage.getItem(String(j));

        if(ipvalue==null){continue;}

        li=document.createElement("LI");
        li.innerHTML=ipvalue;
        span=document.createElement("SPAN");
        att = document.createAttribute("class");       
        att.value = "fa fa-close";                         
        span.setAttributeNode(att);
        // span.style.fontSize="24px";

        span.addEventListener("click", deletefunc);
        span.setAttribute("id",String(j));

        li.appendChild(span);
        li.addEventListener("click", underlinerfunc);

        if(localStorage.getItem(String(j)+"c") == "1"){
          li.setAttribute("class","checked");
        }

        document.getElementById("ull").appendChild(li);   
        document.getElementById("inp").value="";

        }
      }
      else{
        document.getElementById("help").innerHTML=
        "Guide:<br><br>"+
        "Todo-list a time management implementation.<br> To add a todo in the list type in the input box at the top.<br>Click on the task to mark it complete.<br>"+
        "To delete a task click on 'x' button at right corner.<br>To delete the whole list click on the leftmost top corner and then click on clear all.";
      }

    }

    function cleancompleted(){
        var j=0;
        for(j=0;j<pk;j++){          
          if(localStorage.getItem(String(j)+"c") == "1"){
            localStorage.removeItem(String(j));
            localStorage.removeItem(String(j)+"c");
          }
        }
        location.reload();
    }

    function cleanall(){
      localStorage.clear();
      location.reload();
    }
    
    function opener(){
      var z=document.getElementById("sidebar");
      if(z.style.display=="block"){
        z.style.display="none";
      }
      else{
        z.style.display="block"
      }
    }
