const categories = [
     {
    id: "आईस्क्रीम कुल्फी  ",
    name: "आईस्क्रीम कुल्फी    ",
    items: [
      { name: "कुल्फी", price: 12, image: "menu card image/Kulfi.png"},
      { name: "जीरा सोडा", price: 15, image: "menu card image/Jeera_Soda.png"},
      { name: "बटरस्कॉच", price: 30, image: "menu card image/butter ice.jpg"},
      { name: "चॉकलेट ", price: 30, image: "menu card image/chocolate ice.webp"},
      { name: "व्हॅनिला ", price: 30, image: "menu card image/vanilla ice.jpg"}

    ]
  },

  {
    id: "शेक   ",
    name: "शेक     ",
    items: [
      { name: "केसर-पिस्ता शेक", price: 65, image: "menu card image/kesar pista shake.webp"},
      { name: "पायनॅपल शेक ", price: 65, image: "menu card image/pineapple shake.jpg"},
      { name: "कोल्ड कॉफी ", price: 45, image: "menu card image/cold coffee.jpeg"},
      { name: "कोल्ड कॉफी आईस्क्रीम", price: 65, image: "menu card image/cold coffee ice.jpeg"},
      { name: "कोल्ड कॉफी चोको क्रॅश", price: 65, image: "menu card image/cold coffee choco.jpeg"},
      { name: "कोल्ड कॉफी आईस्क्रीम + क्रॅश", price: 75, image: "menu card image/cold coffee ice choco.jpeg"},
      { name: "चॉकलेट शेक ", price: 65, image: "menu card image/choco shake.jpeg"},
      { name: "चॉकलेट शेक चोको क्रॅश ", price: 85, image: "menu card image/choco shake.jpeg"},
      { name: "व्हॅनिला शेक ", price: 65, image: "menu card image/vaniila shake.jpg"},
      { name: "ओरियो फ्रिक शेक", price: 85, image: "menu card image/freak shake.jpg"},
      { name: "ओरियो फ्रिक शेक आईस्क्रीम ", price: 105, image: "menu card image/oreo freak shake.jpg"},
      { name: "ओरियो फ्रिक शेक चोको क्रॅश", price: 105, image: "menu card image/oreo freak shake.jpg"},
      { name: "ओरियो फ्रिक शेक KGF SPECIAL", price: 125, image: "menu card image/kgf special.jpeg"}

    ]
  },

   {
    id: "फ्रोझन प्रॉडक्ट्स  ",
    name: "फ्रोझन प्रॉडक्ट्स  ",
   items: [
      { name: "स्वीट कॉर्न (मका)-250 ग्रॅम", price: 50, image: "menu card image/Frozen_Sweet_Corn.png"},
      { name: "ग्रीन पीस (वाटाणा)-250 ग्रॅम", price: 50, image: "menu card image/Frozen_Green_Peas.png"},
      { name: "फ्रेंच फ्राईज-200 ग्रॅम", price: 50, image: "menu card image/Frozen_French_Fries.png"}

    ]
  },
   
   {
    id: "पनीर & व्हेज स्पेशल भाजी  ",
    name: "पनीर & व्हेज स्पेशल भाजी  ",
   items: [
      { name: "पनीर टिक्का मसाला ", price: 175, image: "menu card image/paneer tikka masala.jpeg"},
      { name: "पनीर बटर मसाला ", price: 175, image: "menu card image/paneer butter masala.jpeg"},
      { name: "पनीर वऱ्हाडी", price: 155, image: "menu card image/paeer varhadu.jpeg"},
      { name: "पनीर भुर्जी करी", price: 225, image: "menu card image/PaneerBharji.png"},
      { name: "शेव भाजी ", price: 125, image: "menu card image/shev bhaji.jpg"},
      { name: "शेव टमाटर  ", price: 125, image: "menu card image/ShevTamatar.png"},
      { name: "आलू मटर भाजी ", price: 105, image: "menu card image/aalu matar bhaji.jpg"},
      { name: "दाल फ्राय", price: 125, image: "menu card image/dal fry.jpeg"},
      { name: "दाल तडका ", price: 135, image: "menu card image/dal tadaka.jpeg"}

    ]
  },

      {
    id: "पिझ्झा",
    name: "पिझ्झा",
    items: [
      { name: "क्लासिक पनीर पिझ्झा ", price: 170, image: "menu card image/paneer pizza.jpeg"},
      { name: "क्लासिक कॉर्न पिझ्झा ", price: 160, image: "menu card image/corn pizza.jpg"},
      { name: "क्लासिक व्हेज पिझ्झा ", price: 150, image: "menu card image/veg pizza.jpg"},
      { name: "एक्सट्रा चिझ पनीर पिझ्झा ", price: 210, image: "menu card image/paneer pizza.jpeg"},
      { name: "एक्सट्रा चिझ कॉर्न पिझ्झा ", price: 200, image: "menu card image/corn pizza.jpg"},
      { name: "एक्सट्रा चिझ व्हेज पिझ्झा ", price: 190, image: "menu card image/veg pizza.jpg"},
      { name: "तंदूरी पनीर पिझ्झा ", price: 170, image: "menu card image/paneer pizza.jpeg"},
      { name: "तंदूरी कॉर्न पिझ्झा ", price: 160, image: "menu card image/corn pizza.jpg"},
      { name: "तंदूरी व्हेज पिझ्झा ", price: 150, image: "menu card image/veg pizza.jpg"},
      { name: "शेजवान पनीर पिझ्झा ", price: 170, image: "menu card image/paneer pizza.jpeg"},
      { name: "शेजवान कॉर्न पिझ्झा ", price: 160, image: "menu card image/corn pizza.jpg"},
      { name: "शेजवान व्हेज पिझ्झा ", price: 150, image: "menu card image/veg pizza.jpg"}

    ]
  },

  {
    id: "मोमोज ",
    name: "मोमोज ",
   items: [ 
      { name: "स्टीम मोमोज ", price: 65, image: "menu card image/steam momo.jpg"},
      { name: "फ्राईड मोमोज ", price: 75, image: "menu card image/fried momo.jpg"},
      { name: "चीझ स्टीम मोमोज ", price: 95, image: "menu card image/cheese steam momo.webp"},
      { name: "चीझ फ्राईड मोमोज ", price: 105, image: "menu card image/chesse fried momo.webp"},
      { name: "कुरकुरे मोमोज ", price: 105, image: "menu card image/kurkure momo.jpg"}

    ]
  },

   {
    id: "रोल ",
    name: "रोल ",
  items: [
      { name: "व्हेज रोल ", price: 65, image: "menu card image/veg roll.jpg"},
      { name: "चीझ व्हेज रोल ", price: 85, image: "menu card image/veg cheese roll.jpeg"},
      { name: "पनीर रोल ", price: 75, image: "menu card image/paneer roll.jpg"},
      { name: "चीझ पनीर रोल ", price: 95, image: "menu card image/paneer roll.jpg"},
      { name: "कॉर्न रोल ", price: 85, image: "menu card image/corn roll.jpg"},
      { name: "चीझ कॉर्न रोल ", price: 105, image: "menu card image/corn roll.jpg"},
      { name: "चायनीज रोल ", price: 95, image: "menu card image/chinese roll.jpg"},
      { name: "चीझ चायनीज रोल ", price: 115, image: "menu card image/chinese roll.jpg"},
      { name: "पनीर टिक्का रोल ", price: 105, image: "menu card image/paneer tikka roll.jpg"},
      { name: "चीझ पनीर टिक्का रोल ", price: 125, image: "menu card image/paneer tikka roll.jpg"}

    ]
  },

  {
    id: "फ्रेंच फ्राईज ",
    name: "फ्रेंच फ्राईज ",
    items: [
      { name: "सॉल्टेड फ्रेंच फ्राईज ", price: 75, image: "menu card image/salted fries.webp"},
      { name: "पेरी पेरी  फ्रेंच फ्राईज ", price: 85, image: "menu card image/peri peri fries.webp"}

    ]
  },

   {
    id: "टोर्नेडो ",
    name: "टोर्नेडो ",
    items: [
      { name: "प्लेन टोर्नेडो  ", price: 65, image: "menu card image/peri peri tornado.jpeg"},
      { name: "पेरी पेरी टोर्नेडो ", price: 75, image: "menu card image/peri peri tornado.jpeg"},
      { name: "प्लेन चीझ टोर्नेडो ", price: 85, image: "menu card image/peri peri tornado.jpeg"},
      { name: "चीझ पेरी पेरी टोर्नेडो ", price: 95, image: "menu card image/peri peri tornado.jpeg"},
      { name: "कुरकुरे टोर्नेडो ", price: 105, image: "menu card image/peri peri tornado.jpeg"}

    ]
  },

  
  {
    id: "छोले भटुरे ",
    name: "छोले भटुरे ",
   items: [
      { name: "छोले भटुरे ", price: 115, image: "menu card image/chhole bhature.jpg"},
      { name: "छोले कुलचे ", price: 115, image: "menu card image/chhole kulche.jpg"},
      { name: "छोले पनीर भटुरे ", price: 125, image: "menu card image/chhole bhature.jpg"},
      { name: "छोले पनीर कुलचे ", price: 125, image: "menu card image/chhole kulche.jpg"}

    ]
  },
 
   
  {
    id: "चायनीज स्नॅक्स ",
    name: "चायनीज स्नॅक्स ",
    items: [
      { name: "मंचुरियन ", price: 85, image: "menu card image/manchurian.webp"},
      { name: "व्हेज लॉलीपॉप ", price: 95, image: "menu card image/lolipop.jpeg"},
      { name: "पनीर पकोडा ", price: 105, image: "menu card image/paneer pakoda.webp"},
      { name: "चायनीज भेळ ", price: 105, image: "menu card image/chinese bhel.jpg"},
      { name: "सोयाबीन  चिल्ली  ", price: 105, image: "menu card image/soyabean chilli.jpeg"},
      { name: "पनीर चिल्ली", price: 115, image: "menu card image/paneer chilli.jpg"},
      { name: "मिक्स व्हेज क्रिस्पी ", price: 115, image: "menu card image/mix veg cripsy.jpg"},
      { name: "कॉकटेल ", price: 125, image: "menu card image/cocktail rice.jpg"},
      { name: "सोया ६५", price: 115, image: "menu card image/soyabean chilli.jpeg"},
      { name: "क्रिस्पी पनीर  थ्रेड ", price: 125, image: "menu card image/paneer thread.jpeg"}

    ]
  },
  {
    id: "नूडल्स ",
    name: "नूडल्स ",
    items: [
      { name: "नूडल्स ", price: 75, image: "menu card image/hakka noodles.jpg"},
      { name: "हक्का नूडल्स ", price: 85, image: "menu card image/hakka noodles.webp"},
      { name: "शेजवान  नूडल्स ", price: 85, image: "menu card image/schezwan noodles.jpg"},
      { name: "मंचुरियन नूडल्स ", price: 95, image: "menu card image/manchurian noodles.jpg"},
      { name: "ट्रिपल नूडल्स ", price: 105, image: "menu card image/tripal noodles.jpg"},
      { name: "चिली गार्लिक नूडल्स ", price: 105, image: "menu card image/chilli garlic noodles.jpeg"},
      { name: "शेजवान ट्रिपल नूडल्स ", price: 115, image: "menu card image/tripal noodles.jpg"}

    ]
  },
  {
    id: "फ्राईड राईस ",
    name: "फ्राईड राईस ",
    items: [
      { name: "व्हेज फ्राईड राईस ", price: 85, image: "menu card image/Schezwan tripal rice.webp"},
      { name: "मसाला राईस ", price: 85, image: "menu card image/Masala ri.jpg"},
      { name: "लेमन राईस ", price: 85, image: "menu card image/lemon rice.jpg"},
      { name: "मंचुरीयन  राईस ", price: 95, image: "menu card image/manchu rice.jpeg"},
      { name: "पनीर फ्राईड राईस ", price: 105, image: "menu card image/veg pulav.jpeg"},
      { name: "ट्रिपल राईस ", price: 105, image: "menu card image/tripal rice.jpg"},
      { name: "सिंगापूर राईस ", price: 105, image: "menu card image/singapor fried.jpg"},
      { name: "शेजवान ट्रिपल राईस ", price: 115, image: "menu card image/Schezwan tripal rice.webp"},
      { name: "पनीर व्हेज पुलाव ", price: 125, image: "menu card image/cocktail rice.jpg"},
      { name: "मटर पनीर राईस ", price: 125, image: "menu card image/masala rice.jpeg"},
      { name: "पनीर बुर्जी जिरा राईस ", price: 155, image: "menu card image/paneer bhurji rice.jpg"}

    ]
  },

   {
    id: "सँडविच ",
    name: "सँडविच  ",
    items: [
      { name: "व्हेज सँडविच ", price: 45, image: "menu card image/veg sandwich.jpg"},
      { name: "व्हेज चीज सँडविच ", price: 65, image: "menu card image/veg cheese sandwich.jpg"},
      { name: "व्हेज डबल चीज सँडविच ", price: 85, image: "menu card image/veg cheese sandwich.jpg"},
      { name: "जम्बो व्हेज सँडविच ", price: 65, image: "menu card image/veg jumbo sandwich.jpg"},
      { name: "जम्बो व्हेज चीज सँडविच ", price: 85, image: "menu card image/jumbo cheese sandwich.jpeg"},
      { name: "जम्बो व्हेज डबल चीज सँडविच ", price: 105, image: "menu card image/jumbo cheese sandwich.jpeg"},
      { name: "कॉर्न सँडविच ", price: 65, image: "menu card image/corn sandwich.jpg"},
      { name: "चीज कॉर्न सँडविच ", price: 85, image: "menu card image/corn sandwich.jpg"},
      { name: "डबल चीज कॉर्न सँडविच ", price: 105, image: "menu card image/veg cheese sandwich.jpg"},
      { name: "आलू सँडविच ", price: 55, image: "menu card image/aalu sandwich.jpg"},
      { name: "आलू चीज सँडविच ", price: 75, image: "menu card image/cheese-aloosandwich.webp"},
      { name: "आलू डबल चीज सँडविच ", price: 95, image: "menu card image/cheese-aloosandwich.webp"},
      { name: "पनीर सँडविच ", price: 85, image: "menu card image/paneer sandwich.jpg"},
      { name: "चीज पनीर सँडविच ", price: 105, image: "menu card image/jumbo cheese sandwich.jpeg"},
      { name: "डबल चीज पनीर सँडविच ", price: 125, image: "menu card image/jumbo cheese sandwich.jpeg"},
      { name: "चॉकलेट सँडविच ", price: 75, image: "menu card image/chocolate sandwich.jpg"},
      { name: "चॉकलेट बॉम्ब सँडविच ", price: 105, image: "menu card image/chocolate sandwich.jpg"}

    ]
  },

  {
    id: "चीझ बर्स्ट सँडविच  ",
    name: "चीझ बर्स्ट सँडविच   ",
    items: [
      { name: "चीझ बर्स्ट व्हेज सँडविच ", price: 105, image: "menu card image/cheese burst sandwich.jpg"},
      { name: "चीझ बर्स्ट कॉर्न सँडविच ", price: 105, image: "menu card image/cheese burst sandwich.jpg"},
      { name: "चीझ बर्स्ट आलू सँडविच ", price: 105, image: "menu card image/cheese burst sandwich.jpg"},
      { name: "चीझ बर्स्ट पनीर सँडविच ", price: 125, image: "menu card image/cheese burst sandwich.jpg"}

    ]
  },

  {
    id: "नाचोज ",
    name: "नाचोज  ",
    items: [
      { name: "चटपटा मसाला नाचोज ", price: 55, image: "menu card image/chatpata masala nachos.webp"},
      { name: "पेरी पेरी नाचोज", price: 65, image: "menu card image/chatpata masala nachos.webp"},
      { name: "चीज नाचोज ", price: 75, image: "menu card image/nachos.jpeg"},
      { name: "चीज पेरी पेरी नाचोज ", price: 85, image: "menu card image/nachos.jpeg"},   
      { name: "चीज लोडेड नाचोज ", price: 105, image: "menu card image/nachos.jpeg"}

    ]
  },

  {
    id: "मॅगी  ",
    name: "मॅगी  ",
    items: [
      { name: "मसाला मॅगी", price: 55, image: "menu card image/maggi.jpg"},
      { name: "शेजवान मॅगी ", price: 55, image: "menu card image/maggi.jpg"},
      { name: "चीज कॉर्न मॅगी ", price: 65, image: "menu card image/corn maggi.png"},
      { name: "पनीर मॅगी ", price: 65, image: "menu card image/paneer maggi.jpg"},
      { name: "चीज पनीर मॅगी ", price: 85, image: "menu card image/cheese maggi.avif"}

    ]
  },

  {
    id: "पाव सेक्शन  ",
    name: "पाव सेक्शन   ",
    items: [
      { name: "मिसळ पाव", price: 75, image: "menu card image/misal pav.webp"},
      { name: "पाव भाजी", price: 65, image: "menu card image/pav bhaji.jpg"},
      { name: "चीज पाव भाजी", price: 85, image: "menu card image/pav bhaji dosa.jpeg"},
      { name: "एक्सट्रा पाव 2", price: 15, image: "menu card image/PavPair.png"},
      { name: "चीज पाव ", price: 55, image: "menu card image/cheese pav.jpg"}
    ]
  },

  {
    id: "चाट भंडार   ",
    name: "चाट भंडार   ",
    items: [
      { name: "फ्राईड आलू टिक्की चाट ", price: 55, image: "menu card image/fried aalu tikki chat.jpg"},
      { name: "रगडा पॅटिस", price: 65, image: "menu card image/ragda patties.jpg"},
      { name: "भेळ", price: 45, image: "menu card image/bhel.jpeg"},
      { name: "आलू पोंगा", price: 35, image: "menu card image/aalu ponga.jpg"},
      { name: "शेव पुरी ", price: 35, image: "menu card image/sev-puri.jpg"},
      { name: "दही पुरी", price: 35, image: "menu card image/dahi puri.jpg"},
      { name: "S P D P", price: 35, image: "menu card image/s p d p.jpg"}

    ]
  },

  {
    id: "साऊथ इंडियन   ",
    name: "साऊथ इंडियन    ",
    items: [
      { name: "मसाला  डोसा ", price: 55, image: "menu card image/sponge do.jpeg"},
      { name: "स्पंज डोसा ", price: 55, image: "menu card image/sponge do.jpeg"},
      { name: "कटपीस डोसा ", price: 65, image: "menu card image/sponge do.jpeg"},
      { name: "शेजवान डोसा ", price: 75, image: "menu card image/sponge do.jpeg"},   
      { name: "पावभाजी डोसा ", price: 85, image: "menu card image/pav bhaji dosa.jpeg"},
      { name: "कॉर्न डोसा ", price: 95, image: "menu card image/pav bhaji dosa.jpeg"},
      { name: "पनीर मसाला डोसा ", price: 105, image: "menu card image/pav bhaji dosa.jpeg"},   
      { name: "टोमॅटो उत्तपा ", price: 55, image: "menu card image/tomato utthapa.jpeg"},
      { name: "ओनियन उत्तपा", price: 55, image: "menu card image/onion utthapa.jpeg"},
      { name: "टोमॅटो ओनियन उत्तपा", price: 65, image: "menu card image/mix utthapa.jpeg"},
      { name: "आप्पे ", price: 55, image: "menu card image/aape.jpg"}

    ]
  },

 {
    id: "स्वीट & सुप",
    name: "स्वीट & सुप ",
    items: [
      { name: "श्रीखंड ", price: 40, image: "menu card image/shikhand.jpeg"},
       { name: "मंचाव सुप ", price: 90, image: "menu card image/Manchao_Soup.png"}

    ]
  },

    {
    id: "इतर ",
    name: "इतर ",
    items: [
      { name: "हॉट कॉफी ", price: 20, image: "menu card image/Hot_Coffee.png"},
      { name: "पाणी बॉटल ", price: 20, image: "menu card image/Water_Bottle.png"}

    ]
  },


  
  {
    id: "जेवणाचा मेनू ",
    name: "जेवणाचा मेनू ",
   items: [
      { name: "संपूर्ण पनीर थाळी", price: 245, image: "menu card image/thali.webp"},
      { name: "संपूर्ण व्हेज थाळी", price: 205, image: "menu card image/thali.webp"},
      { name: "मिनी व्हेज थाळी", price: 135, image: "menu card image/thali.webp"},
      { name: "श्रीखंड पुरी ", price: 85, image: "menu card image/shrikhand puri.jpg"},
      { name: "दाल खिचडी", price: 155, image: "menu card image/dal khichadi.webp"},
      { name: "नामदेव राईस", price: 165, image: "menu card image/namdev rice.jpeg"},
      { name: "पनीर व्हेज पुलाव ", price: 125, image: "menu card image/veg pulav.jpeg"},
      { name: "प्लेन राईस ", price: 85, image: "menu card image/steam rice.jpeg"},
      { name: "जीरा राईस", price: 105, image: "menu card image/steam rice.jpeg"},
      { name: "पनीर टिक्का मसाला ", price: 175, image: "menu card image/paneer tikka masala.jpeg"},
      { name: "पनीर बटर मसाला ", price: 175, image: "menu card image/paneer butter masala.jpeg"},
      { name: "पनीर वऱ्हाडी", price: 155, image: "menu card image/paeer varhadu.jpeg"},
      { name: "शेव भाजी ", price: 125, image: "menu card image/shev bhaji.jpg"},
      { name: "आलू मटर भाजी ", price: 105, image: "menu card image/aalu matar bhaji.jpg"},
      { name: "दाल फ्राय", price: 125, image: "menu card image/dal fry.jpeg"},
      { name: "दाल तडका ", price: 135, image: "menu card image/dal tadaka.jpeg"},
      { name: "फुलका ", price: 12, image: "menu card image/fhulka.jpeg"},
      { name: "पुरी", price: 25, image: "menu card image/puri.jpeg"},
      { name: "श्रीखंड ", price: 40, image: "menu card image/shikhand.jpeg"},
      { name: "मसाला पापड", price: 30, image: "menu card image/masala papad.jpeg"},
      { name: "रोस्टेड पापड ", price: 20, image: "menu card image/roasted papad.jpeg"}

    ]
  }
];

const cart = {};

function renderMenu() {
  const container = document.getElementById("menuContainer");
  container.innerHTML = "";

  categories.forEach(cat => {
    const row = document.createElement("div");
    row.className = "mb-4";
    // add a safe id for category section so chips can scroll to it
    row.id = makeSlug(cat.id) + '-section';

    row.innerHTML = `
      <h4>${cat.name}</h4>
      <div class="d-flex overflow-auto" id="${makeSlug(cat.id)}-carousel">
        ${cat.items.map((item, i) => `
          <div class="food-card me-3 p-2 border rounded text-center" style="width: 150px;">
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100px; object-fit: cover;" />
            <p><strong>${item.name}</strong><br>₹${item.price}</p>
            <div class="quantity">
              <button onclick="decrease('${cat.id + i}')">-</button>
              <span id="${cat.id + i}">0</span>
              <button onclick="increase('${cat.id + i}')">+</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(row);
  });
}

// create a safe slug from category id/title
function makeSlug(text) {
  return String(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    // keep Unicode letters and numbers from all languages, plus dashes/underscores
    .replace(/[^(\p{L}\p{N}_\-)]+/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Render category chips/buttons below the carousel
function renderCategoryChips() {
  const container = document.getElementById('categoryChips');
  if (!container) return;
  container.innerHTML = '';

  const chipsRow = document.createElement('div');
  chipsRow.className = 'category-chips d-flex flex-wrap align-items-center';

  categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip btn btn-sm btn-outline-secondary me-2 mb-2';
    chip.textContent = cat.name;
    const targetId = makeSlug(cat.id) + '-section';
    chip.addEventListener('click', () => scrollToSection(targetId));
    chipsRow.appendChild(chip);
  });

  container.appendChild(chipsRow);
}

function increase(id) {
  cart[id] = (cart[id] || 0) + 1;
  document.getElementById(id).textContent = cart[id];
  updateTotal();
}

function decrease(id) {
  if (cart[id]) {
    cart[id]--;
    document.getElementById(id).textContent = cart[id];
    updateTotal();
  }
}

function updateTotal() {
  let total = 0;
  let cartList = "";

  Object.keys(cart).forEach(id => {
    if (cart[id] > 0) {
      categories.forEach(cat => {
        cat.items.forEach((item, i) => {
          const itemId = cat.id + i;
          if (id === itemId) {
            const amount = item.price * cart[id];
            cartList += `<p>${item.name} ${item.price}  x ${cart[id]} = ₹${amount}</p>`;
            total += amount;
          }
        });
      });
    }
  });

  document.getElementById('cartItems').innerHTML = cartList || "<p>Your cart is empty.</p>";
  document.getElementById('totalAmount').textContent = `Total: ₹${total}`;
}

document.getElementById("viewCartBtn").addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("cartModal"));
  modal.show();
});

document.getElementById("whatsappBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const whatsappNumber = "919403201043";
  let message = "🛒 *New Order to Khaugiri Foods*:\n\n";
  let total = 0;
  let hasItems = false;

  Object.keys(cart).forEach(id => {
    if (cart[id] > 0) {
      categories.forEach(cat => {
        cat.items.forEach((item, i) => {
          const itemId = cat.id + i;
          if (id === itemId) {
            const amount = item.price * cart[id];
            message += `• ${item.name} ${item.price} x ${cart[id]} = ₹${amount}\n`;
            total += amount;
            hasItems = true;
          }
        });
      });
    }
  });

  if (!hasItems) {
    alert("Your cart is empty!");
    return;
  }

  message += `\n💰 *Total: ₹${total}*\n\n📦 Thanks for ordering from KGF. Keep ordering.`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

window.onload = function () {
  renderMenu();
  renderCategoryChips();
  // attach search listener only if the search input exists (we hid it)
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.addEventListener('input', filterMenu);
};

// Update CSS var controlling header offset (navbar + chips + safety)
function updateHeaderOffset() {
  const navbar = document.querySelector('.custom-navbar');
  const chips = document.getElementById('categoryChips');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;
  const chipsHeight = chips ? chips.offsetHeight : 0;
  const offset = navbarHeight + chipsHeight + 20; // safety buffer
  document.documentElement.style.setProperty('--header-offset', offset + 'px');
}

window.addEventListener('resize', updateHeaderOffset);

// Collapse navbar and carousel when scrolling past carousel; show mini header and fix chips
(function setupCollapseBehavior() {
  const carousel = document.getElementById('offerCarousel');
  const miniHeader = document.getElementById('miniHeader');
  const chips = document.getElementById('categoryChips');
  const menuContainer = document.getElementById('menuContainer');
  const miniBtn = document.getElementById('miniViewCartBtn');
  let collapsePoint = carousel ? carousel.offsetTop + carousel.offsetHeight - 50 : 150;

  if (miniBtn) miniBtn.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
  });

  function updateCollapse() {
    if (window.pageYOffset > collapsePoint) {
      if (!document.body.classList.contains('collapsed')) {
        document.body.classList.add('collapsed');
        // adjust menu container padding to chips height + mini header
        if (chips && menuContainer) {
          const chipsH = chips.offsetHeight;
          const miniH = miniHeader ? miniHeader.offsetHeight : 56;
          menuContainer.style.paddingTop = (chipsH + miniH + 20) + 'px';
        }
        updateHeaderOffset();
      }
    } else {
      if (document.body.classList.contains('collapsed')) {
        document.body.classList.remove('collapsed');
        if (menuContainer) menuContainer.style.paddingTop = '';
        updateHeaderOffset();
      }
    }
  }

  window.addEventListener('scroll', updateCollapse);
  window.addEventListener('resize', () => {
    if (!document.body.classList.contains('collapsed') && carousel) {
      collapsePoint = carousel.offsetTop + carousel.offsetHeight - 50;
    }
  });
  // run once
  setTimeout(updateCollapse, 300);
})();

// Back-to-top button behavior
(function setupBackToTop() {
  const back = document.getElementById('backToTop');
  if (!back) return;

  function update() {
    if (window.pageYOffset > 300) {
      back.classList.remove('d-none');
      back.classList.add('show');
    } else {
      back.classList.add('d-none');
      back.classList.remove('show');
    }
  }

  back.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // After smooth scroll reaches top, ensure collapsed state is removed
    const menuContainer = document.getElementById('menuContainer');
    const cancelAfter = 2500; // ms fallback
    const start = Date.now();
    const iv = setInterval(() => {
      if (window.pageYOffset <= 10 || Date.now() - start > cancelAfter) {
        if (document.body.classList.contains('collapsed')) {
          document.body.classList.remove('collapsed');
        }
        if (menuContainer) menuContainer.style.paddingTop = '';
        clearInterval(iv);
      }
    }, 100);
  });

  window.addEventListener('scroll', update);
  // initial state
  setTimeout(update, 200);
})();

// Scroll to a section with offset for fixed navbar
function scrollToSection(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  // Compute exact scroll position so heading appears below any fixed elements
  const navbar = document.querySelector('.custom-navbar');
  const chips = document.getElementById('categoryChips');
  const navbarVisible = navbar && getComputedStyle(navbar).display !== 'none';
  const navbarHeight = navbarVisible ? navbar.offsetHeight : 0;

  let chipsHeight = 0;
  if (chips) {
    const cs = getComputedStyle(chips);
    // chips are effectively fixed when body.collapsed or CSS position fixed
    if (document.body.classList.contains('collapsed') || cs.position === 'fixed') {
      chipsHeight = chips.offsetHeight;
    }
  }

  const extraGap = 8; // small safety gap
  const rect = el.getBoundingClientRect();
  const absoluteTop = rect.top + window.pageYOffset;
  const offset = navbarHeight + chipsHeight + extraGap;
  const targetY = Math.max(0, absoluteTop - offset);
  window.scrollTo({ top: targetY, behavior: 'smooth' });
}

