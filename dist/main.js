(()=>{"use strict";function e(){const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("main");const n=document.createElement("img"),i=document.createElement("div");n.src="images/finedining.jpg",i.classList.add("about"),i.innerHTML="Get lost in the tranquility of the sea while tantalizing <br> your senses with the finest cuisine",t.appendChild(n),t.appendChild(i),e.appendChild(t)}!function(){const e=document.querySelector(".header"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");t.classList.add("title"),n.classList.add("title2"),i.classList.add("navMenu"),a.classList.add("navContact"),t.textContent="Poseidon",n.textContent="Dinner Cruises",i.textContent="Menu",a.textContent="Sailings",e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a)}(),e();const t=document.querySelector(".container");document.querySelector(".navMenu").addEventListener("click",(()=>{t.innerHTML="",function(){const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("mainmenu");const n=document.createElement("img"),i=document.createElement("div"),a=document.createElement("img"),d=document.createElement("div"),s=document.createElement("img"),c=document.createElement("img"),r=document.createElement("div");n.src="images/salad.jpeg",a.src="images/surfandturf.jpg",s.src="images/scallops.jpg",c.src="images/chocolatebar.jpg",n.classList.add("menuimg","menuimg1"),a.classList.add("menuimg","menuimg2"),s.classList.add("menuimg","menuimg3"),c.classList.add("menuimg","menuimg5"),i.classList.add("menudesc","menudesc1"),d.classList.add("menudesc","menudesc2"),r.classList.add("menudesc","menudesc5"),i.innerHTML="Start with a fragrant salad <br> created with crisp spring greens,<br>                               petite pansies, and a variety <br> of just picked veggies ",d.innerHTML=" Choose between our Angus beef tenderloin topped with a full lobster <br>                                 or feast on fresh scallops just harvested from our local farms",r.innerHTML="Finish with this delectable chocolate bar<br> and a sipping ice wine <br>                                 while you relax on our deck and enjoy the sunset",t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(d),t.appendChild(s),t.appendChild(c),t.appendChild(r),e.appendChild(t)}()})),document.querySelector(".navContact").addEventListener("click",(()=>{t.innerHTML="",function(){const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("mainsail");const n=document.createElement("img"),i=document.createElement("p"),a=document.createElement("iframe");n.classList.add("stpeteimg"),i.classList.add("message"),a.classList.add("map"),n.src="images/stpetenight.jpg",a.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14120.687174785955!2d-82.62618506879569!3d27.773680327259182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ea927d40f%3A0x10581ffdf1959098!2sSt.%20Petersburg%20Municipal%20Marina!5e0!3m2!1sen!2sus!4v1629725220875!5m2!1sen!2sus",i.innerHTML="We sail from beautiful downtown St Petersburg, Florida<br>                          Call us for sailing dates and times. <br>                           We can't wait for you to join us.",t.appendChild(n),t.appendChild(i),t.appendChild(a),e.appendChild(t)}()})),document.querySelector(".title").addEventListener("click",(()=>{t.innerHTML="",e()}))})();