---
title: "Wireless Noise-Canceling Headphones"
date: 2024-02-15
draft: false
featured: true
image: "/images/headphones.jpg"
summary: "Premium over-ear wireless headphones with advanced noise-canceling technology and exceptional sound quality"
price: 249.99
seller:
  name: "TechNova Electronics"
  contact:
    telephone: "+1 (555) 123-4567"
    email: "support@technova.com"
---

<style>
    
.container {
    position: relative;
}

.container .card {
    position: relative;
    width: 320px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
}

.container .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1BBFE9;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
}

.container .card:hover:before {
    clip-path: circle(300px at 80% -20%);
}

.container .card:after {
    content: "Nike";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);

}

.container .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: 100%;
    height: 100%;
    transition: .5s;
}

.container .card:hover .imgBx {
    top: 0%;
    transform: translateY(-25%);
    /* bug  */
}

.container .card .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    width: 270px;
}

.container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
}

.container .card:hover .contentBx {
    height: 210px;
}

.container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: .5s;
    opacity: 0;
    visibility: hidden;
}

.container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: .5s;
}

.container .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: .6s;
}

.container .card .contentBx .size h3,
.container .card .contentBx .color h3 {
    color: white;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.container .card .contentBx .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: .5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
}

.container .card .contentBx .size span:hover {  /* other bug */
    background: #B90000;
}

.container .card .contentBx .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.container .card .contentBx .color span:nth-child(2) {
     background: #1BBFE9;
}

.container .card .contentBx .color span:nth-child(3) {
     background: #1B2FE9;
}

.container .card .contentBx .color span:nth-child(4) {
     background: #080481;
}

.container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: .5s;
}

.container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: .7s;
} 
</style>

 <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" alt="nike-air-shoe">
            </div>
            <div class="contentBx">
                <h2>Nike Shoes</h2>
                <div class="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <div class="color">
                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#">Buy Now</a>
            </div>
        </div>
    </div>


## Product Description

Premium over-ear wireless headphones with advanced noise-canceling technology and exceptional sound quality. Designed for audiophiles and professionals who demand superior sound performance.

### Key Features

- Bluetooth 5.2 connectivity
- 40-hour battery life
- Active noise cancellation
- Comfortable memory foam ear cushions