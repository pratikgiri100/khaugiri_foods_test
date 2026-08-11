const categories = [
  {
    id: "फ्रोझन प्रॉडक्ट्स",
    name: "फ्रोझन प्रॉडक्ट्स",
    items: [
      { name: "स्वीट कॉर्न (मका)-250 ग्रॅम", price: 50, image: "menu card image/Frozen_Sweet_Corn.png" },
      { name: "ग्रीन पीस (वाटाणा)-250 ग्रॅम", price: 50, image: "menu card image/Frozen_Green_Peas.png" },
      { name: "फ्रेंच फ्राईज-200 ग्रॅम", price: 50, image: "menu card image/Frozen_French_Fries.png" }
    ]
  },
  {
    id: "पनीर & व्हेज स्पेशल भाजी",
    name: "पनीर & व्हेज स्पेशल भाजी",
    items: [
      { name: "पनीर टिक्का मसाला", price: 175, image: "menu card image/paneer tikka masala.jpeg" },
      { name: "पनीर बटर मसाला", price: 175, image: "menu card image/paneer butter masala.jpeg" },
      { name: "पनीर वऱ्हाडी", price: 155, image: "menu card image/paeer varhadu.jpeg" },
      { name: "पनीर भुर्जी करी", price: 225, image: "menu card image/PaneerBharji.png" },
      { name: "शेव भाजी", price: 125, image: "menu card image/shev bhaji.jpg" },
      { name: "शेव टमाटर", price: 125, image: "menu card image/ShevTamatar.png" },
      { name: "आलू मटर भाजी", price: 105, image: "menu card image/aalu matar bhaji.jpg" },
      { name: "दाल फ्राय", price: 125, image: "menu card image/dal fry.jpeg" },
      { name: "दाल तडका", price: 135, image: "menu card image/dal tadaka.jpeg" }
    ]
  },
  {
    id: "पिझ्झा",
    name: "पिझ्झा",
    items: [
      { name: "क्लासिक पनीर पिझ्झा", price: 170, image: "menu card image/paneer pizza.jpeg" },
      { name: "क्लासिक कॉर्न पिझ्झा", price: 160, image: "menu card image/corn pizza.jpg" },
      { name: "क्लासिक व्हेज पिझ्झा", price: 150, image: "menu card image/veg pizza.jpg" },
      { name: "एक्सट्रा चिझ पनीर पिझ्झा", price: 210, image: "menu card image/paneer pizza.jpeg" },
      { name: "एक्सट्रा चिझ कॉर्न पिझ्झा", price: 200, image: "menu card image/corn pizza.jpg" },
      { name: "एक्सट्रा चिझ व्हेज पिझ्झा", price: 190, image: "menu card image/veg pizza.jpg" },
      { name: "तंदूरी पनीर पिझ्झा", price: 170, image: "menu card image/paneer pizza.jpeg" },
      { name: "तंदूरी कॉर्न पिझ्झा", price: 160, image: "menu card image/corn pizza.jpg" },
      { name: "तंदूरी व्हेज पिझ्झा", price: 150, image: "menu card image/veg pizza.jpg" },
      { name: "शेजवान पनीर पिझ्झा", price: 170, image: "menu card image/paneer pizza.jpeg" },
      { name: "शेजवान कॉर्न पिझ्झा", price: 160, image: "menu card image/corn pizza.jpg" },
      { name: "शेजवान व्हेज पिझ्झा", price: 150, image: "menu card image/veg pizza.jpg" }
    ]
  },
  {
    id: "मोमोज",
    name: "मोमोज",
    items: [
      { name: "स्टीम मोमोज", price: 65, image: "menu card image/steam momo.jpg" },
      { name: "फ्राईड मोमोज", price: 75, image: "menu card image/fried momo.jpg" },
      { name: "चीझ स्टीम मोमोज", price: 95, image: "menu card image/cheese steam momo.webp" },
      { name: "चीझ फ्राईड मोमोज", price: 105, image: "menu card image/chesse fried momo.webp" },
      { name: "कुरकुरे मोमोज", price: 105, image: "menu card image/kurkure momo.jpg" }
    ]
  },
  {
    id: "रोल",
    name: "रोल",
    items: [
      { name: "व्हेज रोल", price: 65, image: "menu card image/veg roll.jpg" },
      { name: "चीझ व्हेज रोल", price: 85, image: "menu card image/veg cheese roll.jpeg" },
      { name: "पनीर रोल", price: 75, image: "menu card image/paneer roll.jpg" },
      { name: "चीझ पनीर रोल", price: 95, image: "menu card image/paneer roll.jpg" },
      { name: "कॉर्न रोल", price: 85, image: "menu card image/corn roll.jpg" },
      { name: "चीझ कॉर्न रोल", price: 105, image: "menu card image/corn roll.jpg" },
      { name: "चायनीज रोल", price: 95, image: "menu card image/chinese roll.jpg" },
      { name: "चीझ चायनीज रोल", price: 115, image: "menu card image/chinese roll.jpg" },
      { name: "पनीर टिक्का रोल", price: 105, image: "menu card image/paneer tikka roll.jpg" },
      { name: "चीझ पनीर टिक्का रोल", price: 125, image: "menu card image/paneer tikka roll.jpg" }
    ]
  },
  {
    id: "फ्रेंच फ्राईज",
    name: "फ्रेंच फ्राईज",
    items: [
      { name: "सॉल्टेड फ्रेंच फ्राईज", price: 75, image: "menu card image/salted fries.webp" },
      { name: "पेरी पेरी फ्रेंच फ्राईज", price: 85, image: "menu card image/peri peri fries.webp" }
    ]
  },
  {
    id: "टोर्नेडो",
    name: "टोर्नेडो",
    items: [
      { name: "प्लेन टोर्नेडो", price: 65, image: "menu card image/peri peri tornado.jpeg" },
      { name: "पेरी पेरी टोर्नेडो", price: 75, image: "menu card image/peri peri tornado.jpeg" },
      { name: "प्लेन चीझ टोर्नेडो", price: 85, image: "menu card image/peri peri tornado.jpeg" },
      { name: "चीझ पेरी पेरी टोर्नेडो", price: 95, image: "menu card image/peri peri tornado.jpeg" },
      { name: "कुरकुरे टोर्नेडो", price: 105, image: "menu card image/peri peri tornado.jpeg" }
    ]
  },
  {
    id: "छोले भटुरे",
    name: "छोले भटुरे",
    items: [
      { name: "छोले भटुरे", price: 115, image: "menu card image/chhole bhature.jpg" },
      { name: "छोले कुलचे", price: 115, image: "menu card image/chhole kulche.jpg" },
      { name: "छोले पनीर भटुरे", price: 125, image: "menu card image/chhole bhature.jpg" },
      { name: "छोले पनीर कुलचे", price: 125, image: "menu card image/chhole kulche.jpg" }
    ]
  },
  {
    id: "चायनीज स्नॅक्स",
    name: "चायनीज स्नॅक्स",
    items: [
      { name: "मंचुरियन", price: 85, image: "menu card image/manchurian.webp" },
      { name: "व्हेज लॉलीपॉप", price: 95, image: "menu card image/lolipop.jpeg" },
      { name: "पनीर पकोडा", price: 105, image: "menu card image/paneer pakoda.webp" },
      { name: "चायनीज भेळ", price: 105, image: "menu card image/chinese bhel.jpg" },
      { name: "सोयाबीन चिल्ली", price: 105, image: "menu card image/soyabean chilli.jpeg" },
      { name: "पनीर चिल्ली", price: 115, image: "menu card image/paneer chilli.jpg" },
      { name: "मिक्स व्हेज क्रिस्पी", price: 115, image: "menu card image/mix veg cripsy.jpg" },
      { name: "कॉकटेल", price: 125, image: "menu card image/cocktail rice.jpg" },
      { name: "सोया ६५", price: 115, image: "menu card image/soyabean chilli.jpeg" },
      { name: "क्रिस्पी पनीर थ्रेड", price: 125, image: "menu card image/paneer thread.jpeg" }
    ]
  },
  {
    id: "नूडल्स",
    name: "नूडल्स",
    items: [
      { name: "नूडल्स", price: 75, image: "menu card image/hakka noodles.jpg" },
      { name: "हक्का नूडल्स", price: 85, image: "menu card image/hakka noodles.webp" },
      { name: "शेजवान नूडल्स", price: 85, image: "menu card image/schezwan noodles.jpg" },
      { name: "मंचुरियन नूडल्स", price: 95, image: "menu card image/manchurian noodles.jpg" },
      { name: "ट्रिपल नूडल्स", price: 105, image: "menu card image/tripal noodles.jpg" },
      { name: "चिली गार्लिक नूडल्स", price: 105, image: "menu card image/chilli garlic noodles.jpeg" },
      { name: "शेजवान ट्रिपल नूडल्स", price: 115, image: "menu card image/tripal noodles.jpg" }
    ]
  },
  {
    id: "फ्राईड राईस",
    name: "फ्राईड राईस",
    items: [
      { name: "व्हेज फ्राईड राईस", price: 85, image: "menu card image/Schezwan tripal rice.webp" },
      { name: "मसाला राईस", price: 85, image: "menu card image/Masala ri.jpg" },
      { name: "लेमन राईस", price: 85, image: "menu card image/lemon rice.jpg" },
      { name: "मंचुरीयन राईस", price: 95, image: "menu card image/manchu rice.jpeg" },
      { name: "पनीर फ्राईड राईस", price: 105, image: "menu card image/veg pulav.jpeg" },
      { name: "ट्रिपल राईस", price: 105, image: "menu card image/tripal rice.jpg" },
      { name: "सिंगापूर राईस", price: 105, image: "menu card image/singapor fried.jpg" },
      { name: "शेजवान ट्रिपल राईस", price: 115, image: "menu card image/Schezwan tripal rice.webp" },
      { name: "पनीर व्हेज पुलाव", price: 125, image: "menu card image/cocktail rice.jpg" },
      { name: "मटर पनीर राईस", price: 125, image: "menu card image/masala rice.jpeg" },
      { name: "पनीर बुर्जी जिरा राईस", price: 155, image: "menu card image/paneer bhurji rice.jpg" }
    ]
  },
  {
    id: "सँडविच",
    name: "सँडविच",
    items: [
      { name: "व्हेज सँडविच", price: 45, image: "menu card image/veg sandwich.jpg" },
      { name: "व्हेज चीज सँडविच", price: 65, image: "menu card image/veg cheese sandwich.jpg" },
      { name: "व्हेज डबल चीज सँडविच", price: 85, image: "menu card image/veg cheese sandwich.jpg" },
      { name: "जम्बो व्हेज सँडविच", price: 65, image: "menu card image/veg jumbo sandwich.jpg" },
      { name: "जम्बो व्हेज चीज सँडविच", price: 85, image: "menu card image/jumbo cheese sandwich.jpeg" },
      { name: "जम्बो व्हेज डबल चीज सँडविच", price: 105, image: "menu card image/jumbo cheese sandwich.jpeg" },
      { name: "कॉर्न सँडविच", price: 65, image: "menu card image/corn sandwich.jpg" },
      { name: "चीज कॉर्न सँडविच", price: 85, image: "menu card image/corn sandwich.jpg" },
      { name: "डबल चीज कॉर्न सँडविच", price: 105, image: "menu card image/veg cheese sandwich.jpg" },
      { name: "आलू सँडविच", price: 55, image: "menu card image/aalu sandwich.jpg" },
      { name: "आलू चीज सँडविच", price: 75, image: "menu card image/cheese-aloosandwich.webp" },
      { name: "आलू डबल चीज सँडविच", price: 95, image: "menu card image/cheese-aloosandwich.webp" },
      { name: "पनीर सँडविच", price: 85, image: "menu card image/paneer sandwich.jpg" },
      { name: "चीज पनीर सँडविच", price: 105, image: "menu card image/jumbo cheese sandwich.jpeg" },
      { name: "डबल चीज पनीर सँडविच", price: 125, image: "menu card image/jumbo cheese sandwich.jpeg" },
      { name: "चॉकलेट सँडविच", price: 75, image: "menu card image/chocolate sandwich.jpg" },
      { name: "चॉकलेट बॉम्ब सँडविच", price: 105, image: "menu card image/chocolate sandwich.jpg" }
    ]
  },
  {
    id: "चीझ बर्स्ट सँडविच",
    name: "चीझ बर्स्ट सँडविच",
    items: [
      { name: "चीझ बर्स्ट व्हेज सँडविच", price: 105, image: "menu card image/cheese burst sandwich.jpg" },
      { name: "चीझ बर्स्ट कॉर्न सँडविच", price: 105, image: "menu card image/cheese burst sandwich.jpg" },
      { name: "चीझ बर्स्ट आलू सँडविच", price: 105, image: "menu card image/cheese burst sandwich.jpg" },
      { name: "चीझ बर्स्ट पनीर सँडविच", price: 125, image: "menu card image/cheese burst sandwich.jpg" }
    ]
  },
  {
    id: "नाचोज",
    name: "नाचोज",
    items: [
      { name: "चटपटा मसाला नाचोज", price: 55, image: "menu card image/chatpata masala nachos.webp" },
      { name: "पेरी पेरी नाचोज", price: 65, image: "menu card image/chatpata masala nachos.webp" },
      { name: "चीज नाचोज", price: 75, image: "menu card image/nachos.jpeg" },
      { name: "चीज पेरी पेरी नाचोज", price: 85, image: "menu card image/nachos.jpeg" },
      { name: "चीज लोडेड नाचोज", price: 105, image: "menu card image/nachos.jpeg" }
    ]
  },
  {
    id: "मॅगी",
    name: "मॅगी",
    items: [
      { name: "मसाला मॅगी", price: 55, image: "menu card image/maggi.jpg" },
      { name: "शेजवान मॅगी", price: 55, image: "menu card image/maggi.jpg" },
      { name: "चीज कॉर्न मॅगी", price: 65, image: "menu card image/corn maggi.png" },
      { name: "पनीर मॅगी", price: 65, image: "menu card image/paneer maggi.jpg" },
      { name: "चीज पनीर मॅगी", price: 85, image: "menu card image/cheese maggi.avif" }
    ]
  },
  {
    id: "पाव सेक्शन",
    name: "पाव सेक्शन",
    items: [
      { name: "मिसळ पाव", price: 75, image: "menu card image/misal pav.webp" },
      { name: "पाव भाजी", price: 65, image: "menu card image/pav bhaji.jpg" },
      { name: "चीज पाव भाजी", price: 85, image: "menu card image/pav bhaji dosa.jpeg" },
      { name: "एक्सट्रा पाव 2", price: 15, image: "menu card image/PavPair.png" },
      { name: "चीज पाव", price: 55, image: "menu card image/cheese pav.jpg" }
    ]
  },
  {
    id: "चाट भंडार",
    name: "चाट भंडार",
    items: [
      { name: "फ्राईड आलू टिक्की चाट", price: 55, image: "menu card image/fried aalu tikki chat.jpg" },
      { name: "रगडा पॅटिस", price: 65, image: "menu card image/ragda patties.jpg" },
      { name: "भेळ", price: 45, image: "menu card image/bhel.jpeg" },
      { name: "आलू पोंगा", price: 35, image: "menu card image/aalu ponga.jpg" },
      { name: "शेव पुरी", price: 35, image: "menu card image/sev-puri.jpg" },
      { name: "दही पुरी", price: 35, image: "menu card image/dahi puri.jpg" },
      { name: "S P D P", price: 35, image: "menu card image/s p d p.jpg" }
    ]
  },
  {
    id: "साऊथ इंडियन",
    name: "साऊथ इंडियन",
    items: [
      { name: "मसाला डोसा", price: 55, image: "menu card image/sponge do.jpeg" },
      { name: "स्पंज डोसा", price: 55, image: "menu card image/sponge do.jpeg" },
      { name: "कटपीस डोसा", price: 65, image: "menu card image/sponge do.jpeg" },
      { name: "शेजवान डोसा", price: 75, image: "menu card image/sponge do.jpeg" },
      { name: "पावभाजी डोसा", price: 85, image: "menu card image/pav bhaji dosa.jpeg" },
      { name: "कॉर्न डोसा", price: 95, image: "menu card image/pav bhaji dosa.jpeg" },
      { name: "पनीर मसाला डोसा", price: 105, image: "menu card image/pav bhaji dosa.jpeg" },
      { name: "टोमॅटो उत्तपा", price: 55, image: "menu card image/tomato utthapa.jpeg" },
      { name: "ओनियन उत्तपा", price: 55, image: "menu card image/onion utthapa.jpeg" },
      { name: "टोमॅटो ओनियन उत्तपा", price: 65, image: "menu card image/mix utthapa.jpeg" },
      { name: "आप्पे", price: 55, image: "menu card image/aape.jpg" }
    ]
  },
  {
    id: "स्वीट & सुप",
    name: "स्वीट & सुप",
    items: [
      { name: "श्रीखंड", price: 40, image: "menu card image/shikhand.jpeg" },
      { name: "मंचाव सुप", price: 90, image: "menu card image/Manchao_Soup.png" }
    ]
  },
  {
    id: "आईस्क्रीम कुल्फी",
    name: "आईस्क्रीम कुल्फी",
    items: [
      { name: "कुल्फी", price: 12, image: "menu card image/Kulfi.png" },
      { name: "जीरा सोडा", price: 15, image: "menu card image/Jeera_Soda.png" },
      { name: "बटरस्कॉच", price: 30, image: "menu card image/butter ice.jpg" },
      { name: "चॉकलेट", price: 30, image: "menu card image/chocolate ice.webp" },
      { name: "व्हॅनिला", price: 30, image: "menu card image/vanilla ice.jpg" }
    ]
  },
  {
    id: "शेक",
    name: "शेक",
    items: [
      { name: "केसर-पिस्ता शेक", price: 65, image: "menu card image/kesar pista shake.webp" },
      { name: "पायनॅपल शेक", price: 65, image: "menu card image/pineapple shake.jpg" },
      { name: "कोल्ड कॉफी", price: 45, image: "menu card image/cold coffee.jpeg" },
      { name: "कोल्ड कॉफी आईस्क्रीम", price: 65, image: "menu card image/cold coffee ice.jpeg" },
      { name: "कोल्ड कॉफी चोको क्रॅश", price: 65, image: "menu card image/cold coffee choco.jpeg" },
      { name: "कोल्ड कॉफी आईस्क्रीम + क्रॅश", price: 75, image: "menu card image/cold coffee ice choco.jpeg" },
      { name: "चॉकलेट शेक", price: 65, image: "menu card image/choco shake.jpeg" },
      { name: "चॉकलेट शेक चोको क्रॅश", price: 85, image: "menu card image/choco shake.jpeg" },
      { name: "व्हॅनिला शेक", price: 65, image: "menu card image/vaniila shake.jpg" },
      { name: "ओरियो फ्रिक शेक", price: 85, image: "menu card image/freak shake.jpg" },
      { name: "ओरियो फ्रिक शेक आईस्क्रीम", price: 105, image: "menu card image/oreo freak shake.jpg" },
      { name: "ओरियो फ्रिक शेक चोको क्रॅश", price: 105, image: "menu card image/oreo freak shake.jpg" },
      { name: "ओरियो फ्रिक शेक KGF SPECIAL", price: 125, image: "menu card image/kgf special.jpeg" }
    ]
  },
  {
    id: "इतर",
    name: "इतर",
    items: [
      { name: "हॉट कॉफी", price: 20, image: "menu card image/Hot_Coffee.png" },
      { name: "पाणी बॉटल", price: 20, image: "menu card image/Water_Bottle.png" }
    ]
  },
  {
    id: "जेवणाचा मेनू",
    name: "जेवणाचा मेनू",
    items: [
      { name: "संपूर्ण पनीर थाळी", price: 245, image: "menu card image/thali.webp" },
      { name: "संपूर्ण व्हेज थाळी", price: 205, image: "menu card image/thali.webp" },
      { name: "मिनी व्हेज थाळी", price: 135, image: "menu card image/thali.webp" },
      { name: "श्रीखंड पुरी", price: 85, image: "menu card image/shrikhand puri.jpg" },
      { name: "दाल खिचडी", price: 155, image: "menu card image/dal khichadi.webp" },
      { name: "नामदेव राईस", price: 165, image: "menu card image/namdev rice.jpeg" },
      { name: "पनीर व्हेज पुलाव", price: 125, image: "menu card image/veg pulav.jpeg" },
      { name: "प्लेन राईस", price: 85, image: "menu card image/steam rice.jpeg" },
      { name: "जीरा राईस", price: 105, image: "menu card image/steam rice.jpeg" },
      { name: "पनीर टिक्का मसाला", price: 175, image: "menu card image/paneer tikka masala.jpeg" },
      { name: "पनीर बटर मसाला", price: 175, image: "menu card image/paneer butter masala.jpeg" },
      { name: "पनीर वऱ्हाडी", price: 155, image: "menu card image/paeer varhadu.jpeg" },
      { name: "शेव भाजी", price: 125, image: "menu card image/shev bhaji.jpg" },
      { name: "आलू मटर भाजी", price: 105, image: "menu card image/aalu matar bhaji.jpg" },
      { name: "दाल फ्राय", price: 125, image: "menu card image/dal fry.jpeg" },
      { name: "दाल तडका", price: 135, image: "menu card image/dal tadaka.jpeg" },
      { name: "फुलका", price: 12, image: "menu card image/fhulka.jpeg" },
      { name: "पुरी", price: 25, image: "menu card image/puri.jpeg" },
      { name: "श्रीखंड", price: 40, image: "menu card image/shikhand.jpeg" },
      { name: "मसाला पापड", price: 30, image: "menu card image/masala papad.jpeg" },
      { name: "रोस्टेड पापड", price: 20, image: "menu card image/roasted papad.jpeg" }
    ]
  }
];

categories.forEach((category, index) => {
  category.slug = `category-${index}`;
});

const cart = {};

function buildItemId(categorySlug, index) {
  return `${categorySlug}-${index}`;
}

function setActiveCategory(categorySlug, shouldScrollPill = true) {
  const allPills = document.querySelectorAll('.category-pill');
  allPills.forEach(pill => {
    const isActive = pill.dataset.categorySlug === categorySlug;
    pill.classList.toggle('active', isActive);
    pill.setAttribute('aria-selected', String(isActive));
  });

  const activePill = Array.from(allPills).find(pill => pill.dataset.categorySlug === categorySlug);
  if (activePill && shouldScrollPill) {
    activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function renderCategoryNav(categoryList) {
  const nav = document.getElementById('categoryNav');
  if (!nav) return;

  // Force the navigation to be a true wrapping layout instead of a horizontally scrolling row.
  nav.style.display = 'flex';
  nav.style.flexWrap = 'wrap';
  nav.style.justifyContent = 'center';
  nav.style.alignItems = 'center';
  nav.style.overflowX = 'visible';
  nav.style.overflowY = 'visible';
  nav.style.whiteSpace = 'normal';
  nav.style.gap = '0.65rem';

  nav.innerHTML = '';

  categoryList.forEach(category => {
    const button = document.createElement('button');
    button.className = 'category-pill';
    button.type = 'button';
    button.dataset.categorySlug = category.slug;
    button.textContent = category.name.trim();
    button.setAttribute('aria-selected', 'false');
    button.style.flex = '0 1 auto';
    button.style.width = 'auto';
    button.style.minWidth = 'fit-content';
    button.addEventListener('click', () => {
      const target = document.getElementById(category.slug);
      if (target) {
        // account for fixed sticky bar height
        const stickyBar = document.getElementById('stickyBar');
        const stickyHeight = stickyBar ? stickyBar.getBoundingClientRect().height : 0;
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        // final offset should be stickyHeight + navHeight
        const offset = Math.ceil(stickyHeight + navHeight + 8);
        const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
        document.body.classList.add('scrolled');
      }
      setActiveCategory(category.slug);
    });
    nav.appendChild(button);
  });

  const firstButton = nav.querySelector('.category-pill');
  if (firstButton) {
    firstButton.classList.add('active');
    firstButton.setAttribute('aria-selected', 'true');
  }
}

function observeMenuSections() {
  const sections = document.querySelectorAll('.menu-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visibleEntries = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visibleEntries.length) return;

    const activeSection = visibleEntries[0].target;
    setActiveCategory(activeSection.id, true);
  }, {
    root: null,
    threshold: [0.12, 0.25, 0.5, 0.75],
    rootMargin: '-18% 0px -42% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

function renderMenu(filteredCategories = categories) {
  const container = document.getElementById('menuContainer');
  container.innerHTML = '';
  renderCategoryNav(filteredCategories);

  if (!filteredCategories.length) {
    container.innerHTML = `<div class="text-center py-5"><h3>No items found</h3><p>Try another search term or browse the full menu.</p></div>`;
    return;
  }

  filteredCategories.forEach(category => {
    const section = document.createElement('section');
    section.className = 'menu-section';
    section.id = category.slug;
    section.innerHTML = `
      <h2>${category.name.trim()}</h2>
      <div class="item-grid">
        ${category.items
          .map((item, i) => {
            const itemId = buildItemId(category.slug, i);
            const quantity = cart[itemId] || 0;
            return `
              <article class="food-card">
                <img src="${item.image}" alt="${item.name}" />
                <div class="food-card-body">
                  <div class="food-card-title">${item.name}</div>
                  <div class="food-card-price">₹${item.price}</div>
                  <div class="food-card-text">Order directly with a quick tap.</div>
                  <div class="quantity-controls">
                    <button type="button" aria-label="Decrease quantity" onclick="decrease('${itemId}')">-</button>
                    <span class="quantity-count" id="${itemId}">${quantity}</span>
                    <button type="button" aria-label="Increase quantity" onclick="increase('${itemId}')">+</button>
                  </div>
                </div>
              </article>
            `;
          })
          .join('')}
      </div>
    `;
    container.appendChild(section);
  });

  const firstSection = document.querySelector('.menu-section');
  if (firstSection) {
    setActiveCategory(firstSection.id, false);
  }

  observeMenuSections();
}

function increase(id) {
  cart[id] = (cart[id] || 0) + 1;
  const countEl = document.getElementById(id);
  if (countEl) countEl.textContent = cart[id];
  updateTotal();
}

function decrease(id) {
  if (!cart[id]) return;
  cart[id] = Math.max(0, cart[id] - 1);
  const countEl = document.getElementById(id);
  if (countEl) countEl.textContent = cart[id];
  updateTotal();
}

function updateTotal() {
  const cartItemsContainer = document.getElementById('cartItems');
  const totalAmountEl = document.getElementById('totalAmount');
  let total = 0;
  let cartList = '';

  Object.entries(cart).forEach(([id, quantity]) => {
    if (!quantity) return;
    categories.forEach(category => {
      category.items.forEach((item, index) => {
        const itemId = buildItemId(category.slug, index);
        if (itemId === id) {
          const amount = item.price * quantity;
          total += amount;
          cartList += `<p class="mb-2"><strong>${item.name}</strong> x ${quantity} <span class="text-success">₹${amount}</span></p>`;
        }
      });
    });
  });

  cartItemsContainer.innerHTML = cartList || '<p class="text-muted">Your cart is empty.</p>';
  totalAmountEl.textContent = `₹${total}`;
}

function buildWhatsAppMessage() {
  const whatsappNumber = '919403201043';
  let message = '🛒 *New Order to Khaugiri Foods*:\n\n';
  let total = 0;
  let hasItems = false;

  Object.entries(cart).forEach(([id, quantity]) => {
    if (!quantity) return;
    categories.forEach(category => {
      category.items.forEach((item, index) => {
        const itemId = buildItemId(category.slug, index);
        if (itemId === id) {
          const amount = item.price * quantity;
          total += amount;
          hasItems = true;
          message += `• ${item.name} x ${quantity} = ₹${amount}\n`;
        }
      });
    });
  });

  if (!hasItems) {
    return null;
  }

  message += `\n💰 *Total: ₹${total}*\n\n📦 Thanks for ordering from KGF!`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function filterMenu() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  // collapse hero when searching, expand when cleared
  document.body.classList.toggle('search-active', !!query);

  if (!query) {
    renderMenu(categories);
    return;
  }

  const filtered = categories
    .map(category => {
      const matchedItems = category.items.filter(item => item.name.toLowerCase().includes(query));
      if (matchedItems.length) {
        return { ...category, items: matchedItems };
      }
      return null;
    })
    .filter(Boolean);

  renderMenu(filtered);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

function handleScrollEffects() {
  const shouldShrink = window.scrollY > 240;
  document.body.classList.toggle('scrolled', shouldShrink);
}

function initializeApp() {
  renderMenu(categories);
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', filterMenu);

  // compute and set sticky top based on current navbar height
  const nav = document.querySelector('.custom-navbar') || document.querySelector('.navbar');
  let navHeight = nav ? nav.offsetHeight : 88;
  const collapsedTop = 12; // px when navbar is collapsed during search

  function setNavbarHeight(px) {
    document.documentElement.style.setProperty('--navbar_height', px + 'px');
    document.documentElement.style.setProperty('--navbar-height', px + 'px');
    const offerCarousel = document.getElementById('offerCarousel');
    const carouselHeight = offerCarousel ? offerCarousel.offsetHeight : 0;
    document.documentElement.style.setProperty('--carousel-height', carouselHeight + 'px');
  }

  function refreshCarouselHeight() {
    const offerCarousel = document.getElementById('offerCarousel');
    const carouselHeight = offerCarousel ? offerCarousel.offsetHeight : 0;
    document.documentElement.style.setProperty('--carousel-height', carouselHeight + 'px');
    return carouselHeight;
  }

  // initial set
  setNavbarHeight(navHeight);

  // set placeholder height so page content doesn't jump when sticky-bar is fixed
  const placeholder = document.getElementById('stickyPlaceholder');
  function updatePlaceholder() {
    const stickyBar = document.getElementById('stickyBar');
    if (!stickyBar || !placeholder) return;

    const rect = stickyBar.getBoundingClientRect();
    const h = Math.ceil(rect.height + 4);
    placeholder.style.height = h + 'px';
    document.documentElement.style.setProperty('--sticky-placeholder-height', h + 'px');
    document.documentElement.style.setProperty('--sticky-bar-height', h + 'px');
    document.body.classList.add('has-fixed-sticky');
  }
  updatePlaceholder();
  // keep updated on resize and when search toggles
  window.addEventListener('resize', updatePlaceholder);

  // update on resize (unless search active)
  window.addEventListener('resize', () => {
    navHeight = nav ? nav.offsetHeight : 88;
    if (!document.body.classList.contains('search-active')) {
      setNavbarHeight(navHeight);
    }
    setTimeout(() => {
      refreshCarouselHeight();
      updatePlaceholder();
    }, 120);
  });

  // keep behavior: collapse hero immediately when user types
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    document.body.classList.toggle('search-active', !!q);
    // update sticky top so sticky-bar sits below collapsed navbar (or normal navbar)
    setNavbarHeight(q ? collapsedTop : navHeight);
    // update placeholder in case collapsed styles change height
    setTimeout(() => {
      refreshCarouselHeight();
      updatePlaceholder();
    }, 120);
    // when search becomes active on small screens, ensure navbar collapses and categories are scrollable
    const catNav = document.getElementById('categoryNav');
    if (catNav) {
      // force horizontal scroll enabled
      catNav.style.overflowX = q ? 'auto' : '';
      // if active, show the left-most categories (user can scroll right)
      if (q) {
        // small delay to allow styles to apply
        setTimeout(() => {
          // keep it at start so user can swipe to right; if you prefer auto-scroll to right uncomment the next line
          // catNav.scrollLeft = catNav.scrollWidth;
        }, 80);
      }
    }
  });

  // when input is focused we also mark search-active for immediate collapse on mobile
  searchInput.addEventListener('focus', () => {
    const q = searchInput.value.trim();
    if (q) {
      document.body.classList.add('search-active');
      setNavbarHeight(collapsedTop);
    }
  });
  searchInput.addEventListener('blur', () => {
    const q = searchInput.value.trim();
    if (!q) {
      document.body.classList.remove('search-active');
      setNavbarHeight(navHeight);
      setTimeout(() => {
        refreshCarouselHeight();
        updatePlaceholder();
      }, 120);
    }
  });

  document.getElementById('viewCartBtn').addEventListener('click', () => {
    updateTotal();
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
  });

  document.getElementById('whatsappBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const url = buildWhatsAppMessage();
    if (!url) {
      alert('Your cart is empty!');
      return;
    }
    window.open(url, '_blank');
  });

  document.getElementById('quickOrderBtn').addEventListener('click', () => {
    const url = buildWhatsAppMessage();
    if (!url) {
      alert('Please add items to the cart before ordering.');
      return;
    }
    window.open(url, '_blank');
  });

  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleBackToTop);
    handleBackToTop();
  }

  window.addEventListener('scroll', handleScrollEffects);
  handleScrollEffects();
}

window.addEventListener('DOMContentLoaded', initializeApp);
