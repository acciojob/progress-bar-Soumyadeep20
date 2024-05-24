//your JS code here. If required.
const circle=document.getElementsByClassName("inner-circle");
const line=document.getElementsByClassName("inner-line");
circle[0].style.borderColor="#00bbf0";
i=0;
document.getElementById("pre").style.visibility = "hidden";
	

function blue() {
	document.getElementById("pre").style.visibility = "visible";
	
	if(i<circle.length){
	i++
	circle[i].style.borderColor="#00bbf0";
	line[i-1].style.backgroundColor="#00bbf0";
	if(i==circle.length-1){
		document.getElementById("next").style.visibility = "hidden";
	}
	}
}
function gray() {
	if(i>0){
		circle[i].style.borderColor="lightgray";
		line[i-1].style.backgroundColor="lightgray";
		i--;
	if(i!=circle.length-1){
		document.getElementById("next").style.visibility = "visible";
	}
	if(i==0){
			document.getElementById("pre").style.visibility = "hidden";
	
	}
		
	}
	
	
}
