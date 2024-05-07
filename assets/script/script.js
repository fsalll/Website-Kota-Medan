const ScrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
};

document.querySelector("button").onclick = ScrollToTop;


// // prompt 

// alert("untuk saat ini pilihan 'bahasa apa yang anda kuasai' hanya tersedia dalam bahasa inggris");
// const firstName = prompt("siapa nama depan anda ?");
// const lastName = prompt("siapa nama belakang anda ?");
// const language = prompt("bahasa apa yang anda kuasai saat ini ? ")

// let user = {
//     namee:{
//         first: firstName,
//         last: lastName,
//     },
//     lang:language
// }

// if(language==="english"){
//     alert("nice to meet you! " + firstName + " " + lastName);
// }else{
//     alert("senang bertemu dengan mu! " + firstName + " " + lastName);
// }