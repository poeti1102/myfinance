<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/iamlinaung/">
            Lin Aung
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://winxstudio.net/">
            Winx Studio
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{year}} made with <i class="tim-icons icon-heart-2"></i> by
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
