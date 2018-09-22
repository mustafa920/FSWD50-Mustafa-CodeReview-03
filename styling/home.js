var mydata = JSON.parse(teamMembers);
for (var i = 0; i<mydata.length ; i++) {
	 document.getElementById("demo1").innerHTML+="<h3 id='name'>"+ mydata[i].name +"</h3><p>" ;
     document.getElementById("demo").innerHTML+= "<div>" + mydata[i].email + "</div>" ;
      document.getElementById("demo2").innerHTML+="<div><img src='"+mydata[i].image+"'width='250' height='350'></div>";
};
  