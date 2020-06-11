<div class="form">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="text-container">
          <div class="above-heading"><?php t('newsletter.above-heading') ?></div>
          <h2 class="news-subtitle"><?php t('newsletter.news-subtitle') ?></h2>

          <!-- Newsletter Form -->
          <form
            id="newsletterForm"
            data-toggle="validator"
            data-focus="false"
            novalidate="true"
          >
            <div class="form-group">
              <input
                type="email"
                class="form-control-input"
                id="nemail"
                required=""
              >
              <label
                class="label-control"
                for="nemail"
              >
                  <?php t('newsletter.label-control') ?>
              </label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group checkbox">
              <input
                type="checkbox"
                id="nterms"
                value="Agreed-to-Terms"
                required=""
              >
                <?php t('newsletter.input_1') ?>
              <a href="privacy-policy.html"><?php t('newsletter.input_2') ?></a>
                <?php t('newsletter.input_3') ?>
              <a href="terms-conditions.html"><?php t('newsletter.input_4') ?></a>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="form-control-submit-button disabled"
              >
                  <?php t('newsletter.form-control-submit-button') ?>
              </button>
            </div>
            <div class="form-message">
              <div
                id="nmsgSubmit"
                class="h3 text-center hidden"
              ></div>
            </div>
          </form>
          <!-- end of newsletter form -->

        </div> <!-- end of text-container -->
      </div> <!-- end of col -->
    </div> <!-- end of row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="icon-container">
          <span class="fa-stack">
            <a href="#your-link">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fab fa-facebook-f fa-stack-1x"></i>
            </a>
          </span>
          <span class="fa-stack">
            <a href="#your-link">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fab fa-twitter fa-stack-1x"></i>
            </a>
          </span>
          <span class="fa-stack">
            <a href="#your-link">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fab fa-pinterest-p fa-stack-1x"></i>
            </a>
          </span>
          <span class="fa-stack">
            <a href="#your-link">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fab fa-instagram fa-stack-1x"></i>
            </a>
          </span>
          <span class="fa-stack">
            <a href="#your-link">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="fab fa-linkedin-in fa-stack-1x"></i>
            </a>
          </span>
        </div> <!-- end of col -->
      </div> <!-- end of col -->
    </div> <!-- end of row -->
  </div> <!-- end of container -->
</div>