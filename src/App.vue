<template>
  <div id="app">

    <!-- Navbar -->
    <nav class="navbar container is-white">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
          <div class="navbar-item has-dropdown  is-hoverable">
            <a class="navbar-link is-arrowless" href="https://bulma.io/documentation/overview/start/" target="_blank">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="https://bulma.io/documentation/overview/start/" target="_blank">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/" target="_blank">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/" target="_blank">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/" target="_blank">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/" target="_blank">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/" target="_blank">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/" target="_blank">
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-light" @click="snackbarTrig">
                  <span>Trigger Snackbar</span>
                </a>
              </p>
              <ModalForm />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar end -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/index.scss";
</style>

<script>

import ModalForm from '@/components/ModalForm.vue'
export default {
  components: {
      ModalForm
  },
  methods: {
    snackbarTrig() {
      this.$snackbar.open({
        duration: 5000,
        message: 'Snackbar with red action, positioned on bottom-left and a callback.',
        type: 'is-danger',
        position: 'is-top',
        actionText: 'Undo',
        queue: false,
        onAction: () => {
            this.$toast.open({
                message: 'Action pressed',
                queue: false
            })
        }
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>
