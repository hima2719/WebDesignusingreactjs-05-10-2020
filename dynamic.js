
// XMlHttpRequest(AJAX Call)
function getJson(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function() {
 if (xhr.readyState === 4 && xhr.status ===200) {
       callback(xhr.responseText);
 }
}
xhr.send();
}
// function calling
getJson("./data.json",function(text){
 var d=JSON.parse(text);
 console.log(d);
 basics(d.details);
 Friends_details(d.Friends);
});


var main = document.querySelector(".main-div");

function basics(s){

var n=document.createElement("h1");
n.textContent=s.name;
n.classList.add("my-name");
main.appendChild(n);

var n1=document.createElement("h1");
n.textContent=s.email;
n.classList.add("E-mail");
main.appendChild(n1);


var n2=document.createElement("h1");
n.textContent=s.mobile;
n.classList.add("Number");
main.appendChild(n2);
var d1=document.createElement("div");
main.appendChild(d1);
var h2=document.createElement("h1");
h2.textContent="Hobbies of person";
d1.appendChild(h2);
h2.appendChild(document.createElement("hr"));

var ul=document.createElement("ul");
for (var i = 0; i < s.hobbies.lenghth; i++) {
     var li = document.createElement("li");
     li.textContent=s.hobbies[i];
     ul.appendChild(li);
}
d1.appendChild(ul);
}

function Friends_details(f){
	var h=document.createElement("h1");
	h.textContent="Student details in viet";
	main.appendChild(h);
	h.appendChild(document.createElement("hr"));
	var table=document.createElement("table");
	var row="";

	for(var i in f){
		row +="<tr><td>"+f[i].name+"</td><td>"+f[i].email+"</td><td>"+f[i].Number+"</td></tr>";

	}
    
    table.innerHTML=row;
    main.appendChild(table);
}