<template>
  <div class="page-container">
    <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md">
      <a href="#" class="navbar-brand" style="color: red">Logo</a>
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
    <section class="el-1 w-100 pt-4rem pt-lg-0">
      <div class="row align-items-center m-auto p-auto">
        <div class="col-md text-white ps-md-5">
          <div>
            <h1 class="text-white content-1 mb-4">
              If you can dream it, you can sell it with Shopify
            </h1>
            <p class="fw-500 content-2 mb-4">
              Build your business here. Take it anywhere.
            </p>
          </div>
          <form class="mb-4 w-100">
            <a-row class="align-items-center" :gutter="[16, 16]">
              <a-col :span="12">
                <a-input
                  size="large"
                  placeholder="Enter your email address"
                ></a-input>
              </a-col>
              <a-col :span="12">
                <a-button
                  style="width: max-content"
                  class="fw-500 btn-second rounded-3"
                  >Start Free Trial</a-button
                >
              </a-col>
            </a-row>
          </form>
          <p>
            Try Shopify free for 3 days, no credit card required. By entering
            your email, you agree to receive marketing emails from Shopify.
          </p>
        </div>
        <div class="col-md p-0 m-0">
          <span style="max-width: 781px; max-height: 652px">
            <img
              class="img-fluid"
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/hero-small-fb5c6e3ede460f1cc7c19b5066f086cf59a5f68ea42ac778602a8486bf66be3f.png"
            />
          </span>
        </div>
      </div>
    </section>
    <section class="el-2 w-100 py-5">
      <div class="px-5">
        <div class="pe-32rem mb-5">
          <h2 class="content-3 fw-500">
            Discover why millions of entrepreneurs choose Shopify to build their
            business—from Hello World to IPO.
          </h2>
        </div>
        <div>
          <div class="carousel d-flex mb-5">
            <p class="absolute text-white">
              <span class="span-content">Crave</span>
              by Shopify
            </p>
            <span class="span-img mx-auto overflow-hidden mt-5">
              <img
                class="img-fluid discover__image-no-border"
                src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/crave-desktop-small-b7b589ca7d4c48946538c8a4d1ff95b77cb648b605e14b548224d1b5fb9832a3.png"
              />
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </section>
    <div class="text-white col-md" style="height: 620px">2</div>
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
