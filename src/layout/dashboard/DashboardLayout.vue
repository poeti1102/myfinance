<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/products" name="Products" icon="tim-icons icon-cart"/>
        <sidebar-link to="/stocks" name="Stocks" icon="tim-icons icon-bag-16"/>
        <sidebar-link to="/orders" name="Orders" icon="tim-icons icon-money-coins"/>
        <sidebar-link to="/purchasing" name="Purchasing" icon="tim-icons icon-paper"/>
        <sidebar-link to="/logout" name="Logout" icon="tim-icons icon-user-run"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
