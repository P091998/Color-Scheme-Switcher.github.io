let grey=document.getElementById('grey');
let white=document.getElementById('white');
let blue=document.getElementById('blue');
let yellow=document.getElementById('yellow');

grey.addEventListener('click',changeGrey);

function changeGrey()
{
    document.body.style.backgroundColor ='grey';
}

white.addEventListener('click',changeWhite);

function changeWhite()
{
    document.body.style.backgroundColor ='white';
}

blue.addEventListener('click',changeBlue);

function changeBlue()
{
    document.body.style.backgroundColor ='blue';
}

yellow.addEventListener('click',changeYellow);

function changeYellow()
{
    document.body.style.backgroundColor ='yellow';
}


//or

// let btn=document.querySelectorAll('.button');
// let body=document.querySelector('body');

// btn.forEach(function(bt){
//     bt.addEventListener('click',function(e){
//         body.style.backgroundColor=e.target.id;
//     })
// })


//or

// let btn=document.querySelectorAll('.button');
// let body=document.querySelector('body');

// btn.forEach(function(bt){
//     bt.addEventListener('click',function(e){
//         if(e.target.id=='grey')
//     {
//         document.body.style.backgroundColor ='grey';
//     }
//     else if(e.target.id=='white')
//     {
//         document.body.style.backgroundColor ='white';
//     }
//     else if(e.target.id=='blue')
//     {
//         document.body.style.backgroundColor ='blue';
//     }
//     else if(e.target.id=='yellow')
//     {
//         document.body.style.backgroundColor ='yellow';
//     }
//     })
// })