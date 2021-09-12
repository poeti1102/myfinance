<template>
  <div class="row">
    <div class="col-md-12">
      <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/stocks">Stocks</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Adjust Stocks
          </li>
        </ol>
      </nav>
      <div>
        <h2 class="title">{{ product.name }}</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <card>
          <div v-if="status == 1" class="alert alert-success" role="alert">
            Success!
          </div>
          <div v-if="status == 2" class="alert alert-danger" role="alert">
            Error!
          </div>
          <form @submit.prevent>
            <base-input
              label="Product"
              type="text"
              :value="product.name + ' | ' + product.id"
              disabled
            >
            </base-input>
            <base-input
              label="Current Stock"
              type="text"
              v-model="product.stock"
              disabled
            >
            </base-input>
            <base-input
              label="Adjust Stock"
              type="number"
              v-model="stock"
            >
            </base-input>
            <base-button class="btn-block" native-type="submit" type="primary"
              >Adjust</base-button
            >
          </form>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import settings from "../../setting.json";

export default {
  components: {},
  data() {
    return {
      product: {},
      status: 0,
      stock: 0,
      fakeData: {
        id: 5,
        name: "Baking Soda",
        stock: 15,
      },
    };
  },
  methods: {
    submit() {
      const data = {
        id: this.product.id,
        stock: this.product.stock + this.stok,
      };

      axios
        .post(settings.urls.Stocks.add, data)
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
  mounted() {
    // axios
    //   .post(settings.urls.Stocks.get, data)
    //   .then((res) => {
    //     if (res.data == "Success") {
          
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("stock getting error!");
    //   });
    this.product = this.fakeData;
  },
};
</script>
<style>
</style>
