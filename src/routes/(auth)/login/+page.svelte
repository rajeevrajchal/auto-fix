<script>
  import Banner from "@icon/banner.svelte";
  import LoginBg from "@icon/login-bg.svelte";
</script>

<div class="login">
  <div class="logo">AutoFix</div>
  <div class="banner">
    <Banner />
  </div>
  <div class="content">
    <p class="text:heading-md">We are what we do</p>
    <p class="text:description-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut
    </p>
    <button class="btn btn-contained">Login with google</button>
  </div>
  <div class="background">
    <LoginBg />
  </div>
</div>

<style lang="scss">
  .login {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap-xl;
    position: relative;
    z-index: 1;
    padding: $padding-xl $padding-lg;
  }
  .logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $gap-lg;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
  }
</style>
