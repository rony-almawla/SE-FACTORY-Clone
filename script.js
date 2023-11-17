

var leftSection = document.querySelector('.leftSection');

        setTimeout(function () {
            leftSection.classList.remove('green-bg');
            leftSection.classList.add('purple-bg');
        }, 2000);

        setTimeout(function () {
            leftSection.classList.remove('purple-bg');
            leftSection.classList.add('pink-bg');
        }, 4000);
    


        
function openCourse(courseName) {
    let i;
    let x = document.getElementsByClassName("course");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(courseName).style.display = "block";  
  }

  
  document.addEventListener('DOMContentLoaded', function() {
  
    let hireContactButton = document.getElementById("hire-contact-button");
		let contactSubject = document.getElementById("contact_subject");
    document.getElementById("FCS").checked = true;

		
		hireContactButton.addEventListener("click", function() {
			
			contactSubject.value = "talent";
		});
  });

  function showTestimonial(testimonialNumber) {

    document.querySelectorAll(".testimonials").forEach(function (testimonial) {
      testimonial.style.display = "none";
    });

    document.getElementById("testimonial" + testimonialNumber).style.display = "block";
  }