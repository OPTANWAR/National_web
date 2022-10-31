const namet=document.getElementsByTagName("a")
// console.log(namet.length);
//We can not use forEach method to iterate through HtmlCollection 
//simple for loop 
// for of loop 
// for Each

// array like object 
// for loop

// for (let i=0; i<=namet.length ;i++)
// {
//     //  console.log(namet[i]);
//     const  nav =namet[i];
//     nav.style.backgroundColor ="#fff"
//     nav.style.color="red";
//     nav.style.fontWeight="bold";
// }

// for Each loop
for (let nav  of namet)
{
    nav.style.backgroundColor ="#fff"
    nav.style.color="red";
    nav.style.fontWeight="bold";
}