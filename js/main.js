//============ go up
let goUp = document.querySelector(".go-up");
window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 600) {
        goUp.style.right = '50px';
    }
    else {
        goUp.style.right = '-50px';
    }
    goUp.addEventListener("click", ()=> {
        window.scrollTo({top: 0,})
    })
})

//============== light & dark mood
let mod = document.querySelector(".header .mod");
let serP = document.querySelectorAll(".serv-info p");
let titleH = document.querySelectorAll(".title h3");
mod.addEventListener("click", ()=> {
    // console.log(mod);
    if(mod.className === "mod fa-regular fa-moon fs-200") {
        mod.setAttribute("class", 'mod fa-regular fa-sun fs-200');
        document.body.setAttribute("class","dark")
        serP.forEach(p => {
            p.style.cssText = `color: gray; margin-top: 5px;`;
        })
        titleH.forEach(h => {
            h.style.cssText = `color: gray; margin-top: 5px;`;
        })
    } else {
        mod.setAttribute("class","mod fa-regular fa-moon fs-200");
        document.body.setAttribute("class","light")
    }
})

//============= bar link
let bar = document.querySelector(".header .bar");
bar.addEventListener("click",()=> {
    let headerLinks = document.querySelector(".link ul");
    // console.log(headerLinks)
    headerLinks.classList.add('showBar');
    let closeNavLink = document.createElement('div');
    closeNavLink.className = 'closeNavLink';
    closeNavLink.addEventListener("click", ()=> {
        headerLinks.classList.remove('showBar');
    })
    let close = document.createTextNode("X")
    closeNavLink.appendChild(close);
    headerLinks.appendChild(closeNavLink);
})

//================ cart content
let shop = document.querySelector(".head-login .shop");
let cart = document.querySelector(".head-login .cart-box");
// console.log(shop.dataset.number)

shop.addEventListener("click", ()=> {
    cart.classList.toggle("show-cart");
})

let closeCart = document.querySelector(".shop-box i");
closeCart.addEventListener("click", ()=> {
    cart.classList.remove("show-cart");
})

let addButton = document.querySelectorAll('.best-seller .add');
let cartEmpty = document.querySelector('.cart-info');
let cartPro = document.querySelector('.cart-product');
let delMessage;
let removeShacke;

addButton.forEach(add => {
    add.addEventListener("click",(e)=> {            
        cartPro.appendChild(e.target.parentElement.parentElement.cloneNode(true));
        cartEmpty.style.display = 'none';
        // shop.dataset.number = +shop.dataset.number + 1;
        shop.dataset.number = cartPro.childElementCount; 
        shop.classList.add('shacke');
        clearTimeout(removeShacke);
        removeShacke = setTimeout(()=>{
            shop.classList.remove('shacke');
        },500);

        let xMark = document.createElement('span');
        xMark.className = "x-mark";
        let x = document.createTextNode('x');
        xMark.appendChild(x);
        let bestPro = document.querySelectorAll('.cart-product .best-product');
        bestPro.forEach(b => {
            b.appendChild(xMark);
        })

        let message = document.querySelector(".add-message");
        message.classList.add('show-message');
        clearTimeout(delMessage);
        delMessage = setTimeout(()=>{
            message.classList.remove('show-message');
        },3000);
        let type = document.querySelector(".add-message .type");
        type.replaceChildren(e.target.parentElement.firstElementChild.cloneNode(true));

        document.addEventListener("click", (e)=> {
            if(e.target.className === "x-mark") {
                e.target.parentElement.remove(); 
                shop.dataset.number = cartPro.childElementCount;
                // console.log(cartPro.childElementCount);
                if(cartPro.childElementCount === 0) {
                    cartEmpty.style.display = "block";
                }
            }
        })    
    })
}) 

document.addEventListener("click", (e)=> {
    if(e.target.classList.contains('beat-1') === true) {
        location.href = 'product-1.html';
    }
    if(e.target.classList.contains('rocky') === true) {
        location.href = 'product-2.html';
    }
    if(e.target.classList.contains('game') === true) {
        location.href = 'product-3.html';
    }
    if(e.target.classList.contains('tablet') === true) {
        location.href = 'product-4.html';
    }
    if(e.target.classList.contains('beat-2') === true) {
        location.href = 'product-5.html';
    }
    if(e.target.classList.contains('beat-3') === true) {
        location.href = 'product-6.html';
    }
    if(e.target.classList.contains('beat-4') === true) {
        location.href = 'product-7.html';
    }
    if(e.target.classList.contains('watch') === true) {
        location.href = 'product-8.html';
    }
})

//==================show categorie
let showCate = document.querySelector(".show-cate");
let cate = document.querySelectorAll(".categories li");

showCate.addEventListener("click",()=> {
    showCate.classList.toggle("rotate");
    cate.forEach(cate => {
        cate.classList.toggle("opacity");
    })
})

//=================== filter
let filterBox = document.querySelectorAll(".filter span");
filterBox.forEach(filter => {
    filter.addEventListener("click", (e)=> {
        filterBox.forEach(f => f.classList.remove("active")); 
        e.target.classList.add("active");
        if(e.target.dataset.filter === "review") {
            document.querySelector(".review-content").style.display = "block";
            document.querySelector(".dis-content").style.display = "none";
        } else {
            document.querySelector(".review-content").style.display = "none";
            document.querySelector(".dis-content").style.display = "block";
        }
    })
})