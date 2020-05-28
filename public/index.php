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
  <meta
    name="description"
    content="Tivo is a HTML landing page template built with Bootstrap to help you crate engaging presentations for SaaS apps and convert visitors into users."
  >
  <meta
    name="author"
    content="Inovatik"
  >

  <!-- OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ -->
  <meta
    property="og:site_name"
    content=""
  /> <!-- website name -->
  <meta
    property="og:site"
    content=""
  /> <!-- website link -->
  <meta
    property="og:title"
    content=""
  /> <!-- title shown in the actual shared post -->
  <meta
    property="og:description"
    content=""
  /> <!-- description shown in the actual shared post -->
  <meta
    property="og:image"
    content=""
  /> <!-- image link, make sure it's jpg -->
  <meta
    property="og:url"
    content=""
  /> <!-- where do you want your post to link to -->
  <meta
    property="og:type"
    content="article"
  />

  <!-- Website Title -->
  <title><?php t('title') ?></title>

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
    include __DIR__ . '/../php/index/testimonials.php';
    include __DIR__ . '/../php/index/newsletter.php';
    include __DIR__ . '/../php/index/footer.php';
    ?>

  
</body>
</html>