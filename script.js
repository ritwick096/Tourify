const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    console.log(fd);
    // for(item of fd) {
    //     console.log(item)
    // }

    const obj = Object.fromEntries(fd);
    // console.log(obj);

    const json = JSON.stringify(obj);
    console.log(json);
    localStorage.setItem('form', json);

    // window.location.href = "abc.html";
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}



// function displayMenu() {
//   const menu = document.getElementById("menu");
//   menu.classList.add("menuitems1");
// }



// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     let rev1 = document.querySelector("#rev1");
//     rev1.classList.remove('rev1');
//     rev1.classList.add('rev1zoom');
//   } 
//   else {
//     let rev1 = document.querySelector("#rev1");
//     rev1.classList.remove('rev1zoom');
//     rev1.classList.add('rev1');
//   }
// }

// var x = window.matchMedia("(max-width: 860px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes