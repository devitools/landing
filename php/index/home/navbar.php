<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
  <div class="container">

    <!-- Text Logo - Use this if you don't have a graphic logo -->
    <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Tivo</a> -->

    <!-- Image Logo -->
    <a
      class="navbar-brand logo-image"
      href="/"
    >
      <img
        src="images/logo.png"
        alt="alternative"
      >
    </a>

    <!-- Mobile Menu Toggle Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-awesome fas fa-bars"></span>
      <span class="navbar-toggler-awesome fas fa-times"></span>
    </button>
    <!-- end of mobile menu toggle button -->

    <div
      class="collapse navbar-collapse"
      id="navbarsExampleDefault"
    >
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link_1 page-scroll text-uppercase"
            href="#header"
          >
              <?php t('navbar.nav-link_1') ?> <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link_2 page-scroll text-uppercase"
            href="#features"
          >
              <?php t('navbar.nav-link_2') ?>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link_3 page-scroll text-uppercase"
            href="#details"
          >
              <?php t('navbar.nav-link_3') ?>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link nav-link_4 page-scroll text-uppercase"
            href="#pricing"
          >
              <?php t('navbar.nav-link_4') ?>
          </a>
        </li>
      </ul>
      <span class="nav-item">
        <a
          class="btn-outline-sm"
          href="https://demo.devi.tools"
        >
            <?php t('navbar.demo') ?>
        </a>
      </span>
      <span
        class="nav-item"
        style="margin-left: 15px"
      >
        <a
          href="https://github.com/devitools"
          class="white"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </span>
    </div>
  </div> <!-- end of container -->
</nav> <!-- end of navbar -->
<!-- end of navigation -->
