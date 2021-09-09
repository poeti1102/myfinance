<template>
  <div class="row">
    <div class="col-md-12">
      <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Create</li>
        </ol>
      </nav>
      <div>
        <h2 class="title">Add New Product</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <card>
          <div v-if="status == 1" class="alert alert-success" role="alert">
            Create Success!
          </div>
          <div v-if="status == 2" class="alert alert-danger" role="alert">
            Create Error!
          </div>
          <form @submit.prevent>
            <base-input
              label="Product Name"
              type="text"
              placeholder="Enter Product Name"
              v-model="product.name"
            >
            </base-input>
            <base-input
              label="Product Price"
              type="text"
              placeholder="Enter Price"
              v-model="product.price"
            >
            </base-input>
            <label class="control-label"> Choose Photo </label>
            <div class="custom-file">
              <input
                type="file"
                ref="mainImageInput"
                @change="setFile"
                accept="image/jpeg"
              />
            </div>
            <div>
              <img
                v-if="product.file"
                :src="product.file"
                class="preview-img img-fluid"
              />
            </div>
            <base-button class="btn-block" native-type="submit" type="primary"
              >Add New</base-button
            >
          </form>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import bsCustomFileInput from "bs-custom-file-input";
import axios from "axios";
import settings from "../../setting.json";

export default {
  components: {},
  data() {
    return {
      product: {
        name: "",
        price: "",
        file: "",
        settings
      },
      status: 0,
    };
  },
  methods: {
    submit() {
      const data = {
        name: this.name,
        price: this.price,
        image: this.file,
      };

      axios
        .post(settings.urls.Products.add, data)
        .then((res) => {
          if (res.data == "Success") {
            this.clearInputs();
            this.status = 1;
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = 2;
        });
    },
    setFile(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.product.file = event.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    clearInputs() {
      this.name = "";
      this.price = "";
      this.image = "";
      this.file = "";
    },
  },
};
</script>
<style>
</style>
