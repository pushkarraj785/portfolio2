function showabout() { document.getElementById("about").style.display="block";
document.getElementById("home").style.display="none";
document.getElementById("skills").style.display="none";
document.getElementById("cv").style.display="none";
document.getElementById("contact").style.display="none";
document.getElementById("hire_me").style.display="none";
document.getElementById("about-button").classList.add("active");
document.getElementById("home-button").classList.remove("active");
document.getElementById("skills-button").classList.remove("active");
document.getElementById("cv-button").classList.remove("active");
document.getElementById("contact-button").classList.remove("active");
 }

function showhome() {document.getElementById("about").style.display="none";
document.getElementById("home").style.display="block";
document.getElementById("skills").style.display="none";
document.getElementById("cv").style.display="none";
document.getElementById("contact").style.display="none";
document.getElementById("hire_me").style.display="none";
document.getElementById("about-button").classList.remove("active");
document.getElementById("home-button").classList.add("active");
document.getElementById("skills-button").classList.remove("active");
document.getElementById("cv-button").classList.remove("active");
document.getElementById("contact-button").classList.remove("active");
}

function showhireme() {document.getElementById("about").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("skills").style.display="none";
document.getElementById("cv").style.display="none";
document.getElementById("contact").style.display="none";
document.getElementById("hire_me").style.display="block";
document.getElementById("about-button").classList.remove("active");
document.getElementById("home-button").classList.remove("active");
document.getElementById("skills-button").classList.remove("active");
document.getElementById("cv-button").classList.remove("active");
document.getElementById("contact-button").classList.remove("active");   
}

function showskills() {document.getElementById("about").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("skills").style.display="block";
document.getElementById("cv").style.display="none";
document.getElementById("contact").style.display="none";
document.getElementById("hire_me").style.display="none";
document.getElementById("about-button").classList.remove("active");
document.getElementById("home-button").classList.remove("active");
document.getElementById("skills-button").classList.add("active");
document.getElementById("cv-button").classList.remove("active");
document.getElementById("contact-button").classList.remove("active");
}

function showcv() {document.getElementById("about").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("skills").style.display="none";
document.getElementById("cv").style.display="block";
document.getElementById("contact").style.display="none";
document.getElementById("hire_me").style.display="none";
document.getElementById("about-button").classList.remove("active");
document.getElementById("home-button").classList.remove("active");
document.getElementById("skills-button").classList.remove("active");
document.getElementById("cv-button").classList.add("active");
document.getElementById("contact-button").classList.remove("active");
}
function showcontact() {document.getElementById("about").style.display="none";
document.getElementById("home").style.display="none";
document.getElementById("skills").style.display="none";
document.getElementById("cv").style.display="none";
document.getElementById("contact").style.display="block";
document.getElementById("hire_me").style.display="none";
document.getElementById("about-button").classList.remove("active");
document.getElementById("home-button").classList.remove("active");
document.getElementById("skills-button").classList.remove("active");
document.getElementById("cv-button").classList.remove("active");
document.getElementById("contact-button").classList.add("active");
    
}