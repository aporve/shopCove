const cardContainer = document.getElementById('card-container'); 
const cardSection = document.getElementById('cart-section'); 
const navBtn = document.querySelectorAll('.nav-options button');
const cartBtn = document.getElementById('cart-btn');
const homeBtn = document.getElementById('home-btn');
const logo = document.querySelector('.logo');
const heading1 = document.querySelector('.card-container-heading1');

const cartItem = document.getElementById('cart-items');
const cartItemValue = document.getElementById('cart-item-value');
let initialCartItem = 0;
let initialCartValue = 1;
let totalCartItems = 0;
let subTotal = 0;

// console.log(cartBtn)

function disableFooter(){
  let footerDOM = document.getElementById('footer');
  footerDOM.classList.add('hide');
}

function enableFooter(){
  let footerDOM = document.getElementById('footer');
  footerDOM.classList.remove('hide');
}


homeBtn.addEventListener('click', function() {
  cardContainer.classList.remove('hide');
  cardSection.classList.add('hide');

  homeBtn.classList.add('active')
  cartBtn.classList.remove('active')
  heading1.classList.remove('hide')  
  enableFooter();
});

logo.addEventListener('click', function() {
  cardContainer.classList.remove('hide');
  cardSection.classList.add('hide');

  homeBtn.classList.add('active')
  cartBtn.classList.remove('active')
  heading1.classList.remove('hide')  
  enableFooter();
   
});

function addProductTocheckout() {
  cardContainer.classList.remove('hide');
  cardSection.classList.add('hide');

  homeBtn.classList.add('active');
  cartBtn.classList.remove('active');
  heading1.classList.remove('hide');  
}

cartBtn.addEventListener('click', function() {
  cardContainer.classList.add('hide');
  cardSection.classList.remove('hide')
  
  homeBtn.classList.remove('active')
  cartBtn.classList.add('active')
  heading1.classList.add('hide')  
  disableFooter()


});

if(subTotal == 0) {
  let ProceedToBuyBOM = document.querySelector('.buy-now');
  ProceedToBuyBOM.classList.add('hide')
}



let product = {
    "products": [
      {
        "sku": "EL001",
        "productName": "Smartphone X",
        "price": 700,
        "description": "Latest model smartphone with 128GB storage and 6.1-inch OLED display.",
        "category": "Mobile Phones",
        "brand": "TechBrand",
        "stock": 25,
        "rating": 4.5,
        "images": './iphone.jpg',
        "features": {
          "screen_size": "6.1 inches",
          "battery": "3500mAh",
          "camera": "12MP dual-camera",
          "storage": "128GB",
          "processor": "Octa-core"
        }
      },
      {
        "sku": "EL002",
        "productName": "Laptop Pro 15",
        "price": 1299,
        "description": "High-performance laptop with 16GB RAM and 512GB SSD.",
        "category": "Laptops",
        "brand": "LaptopMaster",
        "stock": 10,
        "rating": 4.8,
        "images": ["laptop-pro15-front.jpg", "laptop-pro15-keyboard.jpg"],
        "features": {
          "screen_size": "15.6 inches",
          "battery": "5000mAh",
          "processor": "Intel i7",
          "storage": "512GB SSD",
          "ram": "16GB"
        }
      },
      {
        "sku": "EL003",
        "productName": "4K Smart TV",
        "price": 799,
        "description": "55-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
        "category": "Televisions",
        "brand": "VisionTech",
        "stock": 40,
        "rating": 4.7,
        "images": ["4k-smart-tv-front.jpg", "4k-smart-tv-remote.jpg"],
        "features": {
          "screen_size": "55 inches",
          "resolution": "3840x2160",
          "connectivity": "WiFi, Bluetooth",
          "smart_features": "Built-in Netflix, YouTube",
          "ports": "3x HDMI, 2x USB"
        }
      },
      {
        "sku": "EL004",
        "productName": "Bluetooth Headphones",
        "price": 1499,
        "description": "Wireless over-ear headphones with noise-canceling technology.",
        "category": "Headphones",
        "brand": "AudioPlus",
        "stock": 60,
        "rating": 4.6,
        "images": ["bluetooth-headphones-front.jpg", "bluetooth-headphones-side.jpg"],
        "features": {
          "battery_life": "30 hours",
          "connectivity": "Bluetooth 5.0",
          "noise_cancellation": "Active",
          "weight": "250g"
        }
      },
      {
        "sku": "EL005",
        "productName": "Smartwatch Z",
        "price": 2990,
        "description": "Waterproof smartwatch with heart rate monitor and GPS tracking.",
        "category": "Wearables",
        "brand": "WearTech",
        "stock": 100,
        "rating": 4.3,
        "images": ["smartwatch-z-front.jpg", "smartwatch-z-back.jpg"],
        "features": {
          "battery_life": "7 days",
          "connectivity": "Bluetooth, WiFi",
          "water_resistant": "Yes",
          "health_features": "Heart rate, Sleep tracking",
          "gps": "Built-in"
        }
      },
      {
        "sku": "EL006",
        "productName": "Wireless Mouse M3",
        "price": 2900,
        "description": "Ergonomic wireless mouse with adjustable DPI and USB receiver.",
        "category": "Computer Accessories",
        "brand": "ClickMaster",
        "stock": 200,
        "rating": 4.1,
        "images": ["wireless-mouse-m3-front.jpg", "wireless-mouse-m3-side.jpg"],
        "features": {
          "battery_life": "1 year",
          "connectivity": "2.4GHz wireless",
          "dpi": "800/1200/1600",
          "weight": "90g"
        }
      },
      {
        "sku": "EL007",
        "productName": "Gaming Console X",
        "price": 4990,
        "description": "Next-gen gaming console with 1TB storage and 4K support.",
        "category": "Gaming Consoles",
        "brand": "GamePro",
        "stock": 50,
        "rating": 4.9,
        "images": ["gaming-console-x-front.jpg", "gaming-console-x-controller.jpg"],
        "features": {
          "storage": "1TB",
          "resolution": "4K UHD",
          "connectivity": "WiFi, Bluetooth",
          "controllers_included": "2"
        }
      },
      {
        "sku": "EL008",
        "productName": "Digital Camera Pro",
        "price": 89900,
        "description": "24.2MP DSLR camera with 4K video recording and 18-55mm lens.",
        "category": "Cameras",
        "brand": "PhotoMaster",
        "stock": 15,
        "rating": 4.8,
        "images": ["digital-camera-pro-front.jpg", "digital-camera-pro-lens.jpg"],
        "features": {
          "megapixels": "24.2MP",
          "lens": "18-55mm",
          "video_resolution": "4K",
          "connectivity": "WiFi, Bluetooth"
        }
      },
      {
        "sku": "EL009",
        "productName": "Wireless Speaker X1",
        "price": 9900,
        "description": "Portable wireless speaker with 20W output and waterproof design.",
        "category": "Speakers",
        "brand": "SoundMax",
        "stock": 120,
        "rating": 4.4,
        "images": ["wireless-speaker-x1-front.jpg", "wireless-speaker-x1-back.jpg"],
        "features": {
          "battery_life": "15 hours",
          "connectivity": "Bluetooth 5.0",
          "waterproof": "Yes, IPX7",
          "output_power": "20W"
        }
      },
      {
        "sku": "EL010",
        "productName": "Tablet Pro 10.5",
        "price": 49000,
        "description": "10.5-inch tablet with 256GB storage and pen support.",
        "category": "Tablets",
        "brand": "TabletMaster",
        "stock": 70,
        "rating": 4.7,
        "images": ["tablet-pro-10.5-front.jpg", "tablet-pro-10.5-back.jpg"],
        "features": {
          "screen_size": "10.5 inches",
          "storage": "256GB",
          "battery": "7500mAh",
          "connectivity": "WiFi, Bluetooth",
          "stylus_support": "Yes"
        }
      },
      {
        "sku": "EL011",
        "productName": "Smart Refrigerator 300L",
        "price": 119900,
        "description": "300L smart refrigerator with touch screen and Wi-Fi connectivity.",
        "category": "Home Appliances",
        "brand": "CoolTech",
        "stock": 5,
        "rating": 4.8,
        "images": ["smart-refrigerator-300l-front.jpg", "smart-refrigerator-300l-interior.jpg"],
        "features": {
          "capacity": "300L",
          "smart_features": "Touchscreen, Wi-Fi",
          "energy_efficiency": "A++",
          "connectivity": "Wi-Fi",
          "warranty": "2 years"
        }
      },
      {
        "sku": "EL012",
        "productName": "Robot Vacuum Cleaner",
        "price": 24900,
        "description": "Smart robot vacuum cleaner with auto-charging and mapping features.",
        "category": "Home Appliances",
        "brand": "CleanBot",
        "stock": 80,
        "rating": 4.5,
        "images": ["robot-vacuum-cleaner-front.jpg", "robot-vacuum-cleaner-back.jpg"],
        "features": {
          "battery_life": "120 mins",
          "smart_features": "Auto-charging, Room mapping",
          "connectivity": "Wi-Fi, App control",
          "cleaning_modes": "Auto, Spot, Edge"
        }
      },
      {
        "sku": "EL013",
        "productName": "Action Camera Pro",
        "price": 19902,
        "description": "Waterproof action camera with 4K video recording and 12MP stills.",
        "category": "Cameras",
        "brand": "ActionCam",
        "stock": 45,
        "rating": 4.6,
        "images": ["action-camera-pro-front.jpg", "action-camera-pro-side.jpg"],
        "features": {
          "video_resolution": "4K",
          "megapixels": "12MP",
          "waterproof": "Yes, 30m",
          "battery_life": "90 mins"
        }
      },
      {
        "sku": "EL014",
        "productName": "Noise-Canceling Earbuds",
        "price": 12936,
        "description": "Wireless earbuds with active noise cancellation and 20-hour battery life.",
        "category": "Earbuds",
        "brand": "SoundPlus",
        "stock": 110,
        "rating": 4.7,
        "images": ["noise-canceling-earbuds-front.jpg", "noise-canceling-earbuds-case.jpg"],
        "features": {
          "battery_life": "20 hours",
          "connectivity": "Bluetooth 5.0",
          "noise_cancellation": "Active",
          "charging_case": "Yes"
        }
      },
      {
        "sku": "EL015",
        "productName": "Gaming Laptop 17",
        "price": 17990,
        "description": "High-performance gaming laptop with 32GB RAM and RTX 3080 GPU.",
        "category": "Laptops",
        "brand": "GameMax",
        "stock": 15,
        "rating": 4.9,
        "images": ["gaming-laptop-17-front.jpg", "gaming-laptop-17-keyboard.jpg"],
        "features": {
          "screen_size": "17.3 inches",
          "processor": "Intel i9",
          "gpu": "NVIDIA RTX 3080",
          "ram": "32GB",
          "storage": "1TB SSD"
        }
      }
    ]
  }

// console.log(product.products.length)

let productData = product.products;


for(product of productData) {

  

  const cardData = document.createElement('div')
  cardData.classList= 'card';
  cardData.innerHTML = `<div class="product-details">
                <div class="product-img">
                      <img src="./laptop.jpg" >
                </div>
                <div class="card-description">
                    <h3 class="product-name"><span class="product-brand">${product.brand}</span> ${product.productName}   </h3>
                    <p class="product-description"> ${product.description}</p>
                    <p>Left <span class="product-stock">${product.stock}</span></p>
                    <div class="product-price">
                        <p class="price"> <span class="rs">₹</span>${product.price}</p>
                    </div>
                    <div class="add">
                        <button class="add-to-cart" id=${product.sku} onClick="addToCart(this.id)"><a href="#">Add to cart</a></button>
                    </div>
                </div>
            </div>
        `;



  cardContainer.appendChild(cardData);   
  
}






// Cart Section

function addToCart(skuData) {
  console.log('skuData from addToCart',skuData);


  // 
  let ProceedToBuyBOM = document.getElementById('buy-now');
  ProceedToBuyBOM.classList.remove('hide')
  let addProductToBuyBOM = document.getElementById('add-product');
  addProductToBuyBOM.classList.add('hide')

  initialCartItem+=1;
  cartItem.innerHTML = initialCartItem;


  let currentProduct ;
  for(product of productData) {
    if(product.sku == skuData) {
      // console.log(product)
      currentProduct = product;
    }
  }


  let cartSectionContainer = document.getElementById('cart-section-container');
  let addNewCart = true
  // console.log(cartSectionContainer.innerHTML)

  let cartData = document.querySelectorAll(`.carts`);  

  for(cart of cartData) {
    console.log('carts->>>>>>>>',cart);
    let DataCustom = cart.getAttribute('data-custom');
    if(DataCustom == skuData) {
      addNewCart = false;
      // alert('Data is already Present');
      console.log(document.getElementById(`cart-item-value-${skuData}`));
      let CurrectCartItemValue = document.getElementById(`cart-item-value-${skuData}`).value;
      console.log('CurrectCartItemValue---->',CurrectCartItemValue);
      let currentValue = Number(CurrectCartItemValue);
      currentValue+=1;
      console.log('**********', currentValue)
      document.getElementById(`cart-item-value-${skuData}`).setAttribute('data-custom-value', `${currentValue}`)
      document.getElementById(`cart-item-value-${skuData}`).value = currentValue;

      totalCartItems+=1;
      let totalCartsItemDOM = document.getElementById('total-carts-item');
      totalCartsItemDOM.innerHTML = totalCartItems

      console.log(cart)
    }else  {
      // alert('Data is not Present')
      addNewCart = true;
    }
  }

  console.log('addNewCart--->', addNewCart)
if(addNewCart == true) {


  try {
     // Cart Total Items
  totalCartItems+=1;
  let totalCartsItemDOM = document.getElementById('total-carts-item');
  totalCartsItemDOM.innerHTML = totalCartItems

  

  const cardData = document.createElement('div')
  cardData.classList= 'carts';
  cardData.setAttribute('data-custom', `${skuData}`)   

  cardData.innerHTML = `
  <div class="cart-product-img">
    <img src="./laptop.jpg" >
  </div>
  <div class="cart-product-details">
      <h2 class="cart-product-name">${currentProduct.productName}</h2>
      <p class="cart-product-description">${currentProduct.description}</p>
      <p class="cart-product-price" ><span class="rs">₹</span><span id="cart-product-price-${skuData}">${currentProduct.price}</span></p>
      <div class="cart-product-actions">
          <button  onClick="deleteItem(${skuData})">Delete</button>

          <div class="cart-quantity">
              <button onClick="subItem(${skuData})">-</button>
              <input type="text" onChange="changedValue(${skuData})" value="1" id="cart-item-value-${skuData}">
              <button onClick="addItem(${skuData})">+</button>
          </div>

          <button class="cart-buy-now" disabled>No offer</button>

      </div>
  </div>`

  cartSectionContainer.appendChild(cardData) ;

  

  }catch(e) {
    console.error('Error----',e)
  }
 
}
  // Sub total 
  let subtotalDom=document.getElementById('sub-total');
  subTotal+=currentProduct.price;
  subtotalDom.innerHTML = subTotal;

}

function changedValue(skuData) {
  let id = skuData.getAttribute('id');
  console.log('skuData', id);
  let cartData = document.querySelectorAll(`.carts`);

  for(cart of cartData) {
    let attribute = cart.getAttribute('data-custom')
    if(attribute == id) {

      let oldDataSet = document.getElementById(`cart-item-value-${attribute}`).getAttribute('data-custom-value');
      console.log('^^^^^^^^^^^^^^^',oldDataSet )

      if(oldDataSet == null) {
        oldDataSet = 1
      }


      let currentCartItemValue = document.getElementById(`cart-item-value-${attribute}`);
      currentCartItemValue.setAttribute('data-custom-value', `${currentCartItemValue.value}`) 
      console.log('value--->', currentCartItemValue.value)
      console.log('Typeof--->', typeof(currentCartItemValue.value))
     console.log('cart~~~~~~~~~~>', cart)
      

      let price;
      for(product of productData) {
        if(product.sku == attribute) {
          console.log(product)
          price = product.price
        }

      }

      let cartProductPriceId = document.getElementById(`cart-product-price-${attribute}`);
      console.log(price)
      let totalPrice = price*currentCartItemValue.value;
      console.log(totalPrice)
      let oldPrice =  price*oldDataSet;

      cartProductPriceId.innerHTML = Math.round(totalPrice);

      // Cart Total Items
      totalCartItems = totalCartItems + (Number(currentCartItemValue.value) - oldDataSet);
      let totalCartsItemDOM = document.getElementById('total-carts-item');
      totalCartsItemDOM.innerHTML = totalCartItems

      initialCartItem = initialCartItem + (Number(currentCartItemValue.value) - oldDataSet);
      cartItem.innerHTML = initialCartItem;

      let subtotalDom=document.getElementById('sub-total');
      subTotal= subTotal + (totalPrice - oldPrice);
      subtotalDom.innerHTML = subTotal;




    }
  }

}

function subItem(skuData) {
  let id = skuData.getAttribute('id');
  let currentCart;

  let cartData = document.querySelectorAll(`.carts`);
  for(cart of cartData) {
    let attribute = cart.getAttribute('data-custom')
    
    if(attribute == id) {
      currentCart = cart;
      let currentCartItemValue = document.getElementById(`cart-item-value-${attribute}`);
      
      let currentValue = currentCartItemValue.value;
      currentValue = Number(currentValue);
      if(currentValue !==1) {
        currentValue-=1;

        let price;
        for(product of productData) {
          if(product.sku == attribute) {
            console.log(product)
            price = product.price
          }
  
        }


        let cartProductPriceId = document.getElementById(`cart-product-price-${attribute}`);
        let currentprice = cartProductPriceId.innerHTML
        console.log(price)
        console.log(currentValue)
        let totalPrice = currentprice-price;
        console.log(totalPrice)
  
        cartProductPriceId.innerHTML = Math.round(totalPrice);


        // Cart Total Items
        if(totalCartItems !==1) {
          totalCartItems-=1;
          let totalCartsItemDOM = document.getElementById('total-carts-item');
          totalCartsItemDOM.innerHTML = totalCartItems

           
        }

       // Update SubTotal Cart Data
       let subtotalDom=document.getElementById('sub-total');
       subTotal-=price;
       subtotalDom.innerHTML = subTotal;


       initialCartItem-=1;
       cartItem.innerHTML = initialCartItem;

      }
      currentCartItemValue.value = currentValue;
      currentCartItemValue.setAttribute('data-custom-value', `${currentValue}`)  



      

    }
  }
}


function addItem(skuData) {
  console.log(skuData)
  let id = skuData.getAttribute('id');
  console.log('id-->', id)
  let currentCart;

  let cartData = document.querySelectorAll(`.carts`);     
 
  
  for(cart of cartData) {
    console.log(cart)
    let attribute = cart.getAttribute('data-custom')
    
    if(attribute == id) {
      console.log(attribute)
      currentCart = cart;
      

      let currentValue
      let currentCartItemValue = document.getElementById(`cart-item-value-${attribute}`);
      let dataCustomValue = currentCartItemValue.getAttribute('data-custom-value');
      console.log('dataCustomValue', dataCustomValue)
      console.log(typeof(dataCustomValue))
      if(dataCustomValue) {
        
        currentValue = dataCustomValue;
        currentValue = Number(currentValue);
        console.log(typeof(currentValue));
        currentValue+=1;
        currentCartItemValue.value = currentValue;
        currentCartItemValue.setAttribute('data-custom-value', `${currentValue}`)   
      }else {
        
        console.log('currentCartItemValue#######', currentCartItemValue)
        currentValue = currentCartItemValue.value;
        currentValue = Number(currentValue);
        currentValue+=1;
        currentCartItemValue.value = currentValue;
        currentCartItemValue.setAttribute('data-custom-value', `${currentValue}`)   
      }

      


      let price;
      for(product of productData) {
        if(product.sku == attribute) {
          console.log(product)
          price = product.price
        }

      }

      let cartProductPriceId = document.getElementById(`cart-product-price-${attribute}`);
      console.log(price)
      console.log(currentValue)
      let totalPrice = price*currentValue;
      console.log(totalPrice)


      cartProductPriceId.innerHTML = Math.round(totalPrice);



      // Cart Total Items
      totalCartItems+=1;
      let totalCartsItemDOM = document.getElementById('total-carts-item');
      totalCartsItemDOM.innerHTML = totalCartItems

      initialCartItem+=1;
      cartItem.innerHTML = initialCartItem;

      // Update SubTotal Cart Data
      let subtotalDom=document.getElementById('sub-total');
      subTotal+=price;
      subtotalDom.innerHTML = subTotal;

    }
  }

  
   
}

function deleteItem(skuData) {
  let id = skuData.getAttribute('id');

  let cartSectionContainer = document.getElementById('cart-section-container');
  let cartData = document.querySelectorAll(`.carts`);    
  
  for(cart of cartData) {
    let dataCustomAttribute = cart.getAttribute('data-custom')
    if(dataCustomAttribute == id) {
      let price = document.getElementById(`cart-product-price-${id}`).innerHTML

      let itemValue = document.getElementById(`cart-item-value-${id}`).getAttribute('data-custom-value');
      // console.log(`cart-item-value-${id}`)

      if(itemValue == null) {
        itemValue = 1;
      }

      totalCartItems = totalCartItems- itemValue;
      let totalCartsItemDOM = document.getElementById('total-carts-item');
      totalCartsItemDOM.innerHTML = totalCartItems;


      let subtotalDom=document.getElementById('sub-total');
      subTotal = subTotal-price;
      subtotalDom.innerHTML = subTotal;

      // totalCartItems-=1;
      // let totalCartsItemDOM = document.getElementById('total-carts-item');
      // totalCartsItemDOM.innerHTML = totalCartItems

      // cart.classList.add('hide');
      cartSectionContainer.removeChild(cart);

      if(subTotal == 0) {
        let ProceedToBuyBOM = document.querySelector('.buy-now');
        ProceedToBuyBOM.classList.add('hide')

        let addProductToBuyBOM = document.getElementById('add-product');
        addProductToBuyBOM.classList.remove('hide')

      }

      initialCartItem = initialCartItem - itemValue;
      // console.log(initialCartItem)
      cartItem.innerHTML = initialCartItem;


    }
   
  }
   
}



function proceedTocheckout() {
  let cartSectionContainer = document.getElementById('cart-section-container');
  // console.log(cartSectionContainer.innerHTML)


  let checkoutScreen = document.getElementById('checkout');
  checkoutScreen.classList.remove('hide');
  checkoutScreen.classList.add('high-opacity')

  let cartSection = document.getElementById('cart-section-container'); 
  cartSection.classList.add('low-opacity');

}

let close = document.querySelector('#close').addEventListener('click', ()=> {
  let checkoutScreen = document.getElementById('checkout');
  checkoutScreen.classList.add('hide')
   checkoutScreen.classList.remove('high-opacity');

  let cartSection = document.getElementById('cart-section-container'); 
  cartSection.classList.remove('low-opacity');

})






















// This JSON includes the following fields for each product:

// sku: Stock Keeping Unit, a unique identifier.
// productName: productName of the product.
// price: Product price.
// description: Brief description of the product.
// category: Product category (e.g., Mobile Phones, Laptops, etc.).
// brand: Brand of the product.
// stock: Number of items in stock.
// rating: Customer rating out of 5.
// images: Array of image fileproductNames (could be URLs in a real-world app).
// features: Specific features of the product (e.g., battery life, screen size, etc.).
  