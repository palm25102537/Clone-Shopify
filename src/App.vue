<template>
  <div class="page-container">
    <nav
      id="mainNavbar"
      class="navbar navbar-dark navbar-expand-md position-fixed"
    >
      <a href="#" class="navbar-brand" style="color: red"
        ><img src="https://logotyp.us/files/shopify.svg"
      /></a>

      <div class="collapse navbar-collapse">
        <div class="d-flex align-items-center justify-content-between w-100">
          <section>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a-dropdown :trigger="['click']">
                  <a @click.prevent class="nav-link">
                    Start<DownOutlined class="nav-link"
                  /></a>
                </a-dropdown>
              </li>
              <li class="nav-item">
                <a-dropdown :trigger="['click']">
                  <a @click.prevent class="nav-link">
                    Sell<DownOutlined class="nav-link"
                  /></a>
                </a-dropdown>
              </li>
              <li class="nav-item">
                <a-dropdown :trigger="['click']">
                  <a @click.prevent class="nav-link">
                    Market<DownOutlined class="nav-link"
                  /></a>
                </a-dropdown>
              </li>
              <li class="nav-item">
                <a-dropdown :trigger="['click']">
                  <a @click.prevent class="nav-link">
                    Manage<DownOutlined class="nav-link"
                  /></a>
                </a-dropdown>
              </li>
            </ul>
          </section>
          <section class="d-flex align-items-center">
            <ul class="navbar-nav me-3">
              <li class="nav-item">
                <a @click.prevent class="nav-link">Pricing</a>
              </li>
              <li class="nav-item">
                <a-dropdown :trigger="['click']">
                  <a @click.prevent class="nav-link">
                    Learn<DownOutlined class="nav-link"
                  /></a>
                </a-dropdown>
              </li>
              <li class="nav-item">
                <a @click.prevent class="nav-link">Login</a>
              </li>
            </ul>
            <a-button class="fw-500 btn rounded-3">Start Free Trial</a-button>
          </section>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
export default {
  name: "App",
  components: {
    DownOutlined,
  },
};
</script>
