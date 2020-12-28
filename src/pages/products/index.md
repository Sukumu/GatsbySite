---
templateKey: product-page
path: /products
title: title
image: /img/jumbotron.jpg
heading: heading
description: description
intro:
  blurbs:
    - image: /img/coffee.png
      text: |
        We sell
    - image: /img/coffee-gear.png
      text: |
        We buy
    - image: /img/tutorials.png
      text: |
        Love a great
    - image: /img/meeting-space.png
      text: |
        We believe
  heading: What we offer
  description: |
    Sukumu is King
main:
  heading: Great Trades
  description: |
    Park
  image1:
    alt: A close-up of a paper filter filled with ground coffee
    image: /img/7456836E-7CD4-43EF-9312-FB744ED25529.jpeg
  image2:
    alt: A green cup of a coffee on a wooden table
    image: /img/products-grid2.jpg
  image3:
    alt: Coffee beans
    image: /img/products-grid1.jpg
testimonials:
  - author: Sukumu
    quote: The first testimonial
  - author: Sukumu
    quote: Sukumu is the testimony
full_image: /img/products-full-width.jpg
pricing:
  heading: Forex heading
  description: We make it easy
  plans:
    - description: Perfect.
      items:
        - Sukumu Pitch Forks"
        - Renko Sukumu"
      plan: Small
      price: '50'
    - description: Great for Sukumu Traders
      items:
        - Sukumu Technical Analysis
      plan: Big
      price: '80'
    - description: Want to practice
      items:
        - Whatever you need
        - Unlimited varieties
      plan: Custom
      price: '??'
 <!doctype html>
<html>
<head>
  <title>Sukumu Favorite Photos</title>
  <!--- This example uses jQuery: -->
  <script src="https://code.jquery.com/jquery-1.11.2.js"></script>

  <!-- Make sure to include Nelify's authentiation library -->
  <!-- Also available via npm as netlify-auth-providers -->
  <script src="https://unpkg.com/netlify-auth-providers"></script>

  <script>
  
  $.getJSON('https://api.unsplash.com/users/sukumu/photos/?client_id=W8vWI-gJMLM96O4Eg_wST1Uf63Wry9BUG9Abwfcp1_I', function(data) {
  //console.log(data);
  
  $.each(data, function(index, value) {
  //  console.log(value);
    
     var name = value.user.name;
     var bio = value.user.bio;
     var imageURL = value.urls.regular;
    
//$('.name').text(name);
//$('.bio').text(bio);
//$('.image img').attr('src', imageURL);
    
    $('.output').append('<h1 class="name">' + name + '</h1><h2 class="bio">' + bio + '</h2><div class="image"><img src="' + imageURL + '"/></div>');
      });
   });

  </script>
</head>
<body>
  <h1>Photos:</h1>
<div class="output"></div>
</body>
</html>
  
published: true
---
