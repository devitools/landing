<?php

require __DIR__ . '/../vendor/autoload.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  >

  <!-- SEO Meta Tags -->


<!-- Primary Meta Tags -->
<!-- Website Title -->
  <title><?php t('title')?></title>
<meta name="title" content="<?php t('title')?>">
<meta name="description" content="<?php t('og-description')?>">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="<?php t('og-type')?>">
<meta property="og:url" content="<?php t('og-url')?>">
<meta property="og:title" content="<?php t('title')?>">
<meta property="og:description" content="<?php t('og-description')?>">
<meta property="og:image" content="<?php t('og-image')?>">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="<?php t('og-url')?>">
<meta property="twitter:title" content="<?php t('title')?>">
<meta property="twitter:description" content="<?php t('og-description')?>">
<meta property="twitter:image" content="<?php t('og-image')?>">


  <meta
    name="author"
    content="Inovatik"
  >

  <!-- Styles -->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
    rel="stylesheet"
  >
  <link
    href="css/bootstrap.css"
    rel="stylesheet"
  >
  <link
    href="css/fontawesome-all.css"
    rel="stylesheet"
  >
  <link
    href="css/swiper.css"
    rel="stylesheet"
  >
  <link
    href="css/magnific-popup.css"
    rel="stylesheet"
  >
  <link
    href="css/styles.css"
    rel="stylesheet"
  >

  <!-- Favicon  -->
  <link
    rel="icon"
    href="images/favicon.png"
  >
</head>
<body
  data-spy="scroll"
  data-target=".fixed-top"
>

    <?php
include __DIR__ . '/../php/index/home.php';
include __DIR__ . '/../php/index/features.php';
include __DIR__ . '/../php/index/details.php';
include __DIR__ . '/../php/index/pricing.php';
//    include __DIR__ . '/../php/index/testimonials.php';
include __DIR__ . '/../php/index/newsletter.php';
include __DIR__ . '/../php/index/footer.php';
?>


  <!-- Scripts -->
  <script src="js/jquery.min.js"></script> <!-- jQuery for Bootstrap's JavaScript plugins -->
  <script src="js/popper.min.js"></script> <!-- Popper tooltip library for Bootstrap -->
  <script src="js/bootstrap.min.js"></script> <!-- Bootstrap framework -->
  <script src="js/jquery.easing.min.js"></script> <!-- jQuery Easing for smooth scrolling between anchors -->
  <script src="js/swiper.min.js"></script> <!-- Swiper for image and text sliders -->
  <script src="js/jquery.magnific-popup.js"></script> <!-- Magnific Popup for lightboxes -->
  <script src="js/validator.min.js"></script> <!-- Validator.js - Bootstrap plugin that validates forms -->
  <script src="js/scripts.js"></script> <!-- Custom scripts -->
</body>
</html>
