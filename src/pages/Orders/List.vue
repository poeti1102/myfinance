<template>
  <div class="row">
    <div class="col-md-12">
      <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Orders</li>
        </ol>
      </nav>
      <div class="row m-2">
        <button
          class="col-md-2 btn btn-success"
          @click="createNew()"
          type="success"
          title="Delete"
        >
          Ceeate <i class="tim-icons icon-simple-add"></i>
        </button>
        <div class="offset-md-4 offset-xs-4 col-md-3 col-xs-3 form-group">
          <input type="text" class="form-control" placeholder="Search.." />
        </div>
        <div class="col-md-2 col-xs-3">
          <button
            type="button"
            class="btn btn-block btn-info btn-md m-0 p-2"
            @click="searchProduct()"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BaseTable } from "@/components";
import axios from 'axios';
import settings from "../../setting.json";


export default {
  components: {
    BaseTable
  },
  data() {
    return {
      columns: [
        {
          label: "Id",
          field: "id",
          numeric: true,
          html: false,
        },
        {
          label: "Product Name",
          field: "productName",
          numeric: false,
          html: false,
        },
        {
          label: "Quantity",
          field: "quantity",
          numeric: true,
          html: false,
        },
        {
          label: "Price",
          field: "price",
          numeric: true,
          html: false,
        },
        {
          label: "Date",
          field: "orderDate",
          numeric: false,
          html: false,
        },
        {
          label: "Customer Name",
          field: "customerName",
          numeric: false,
          html: false,
        },
        {
          label: "Customer Details",
          field: "customerDetail",
          numeric: false,
          html: false,
        },
        {
          label: "Delivery Fees",
          field: "delivery",
          numeric: true,
          html: false,
        },
        {
          label: "Total",
          field: "total",
          numeric: true,
          html: false,
        },
      ],
      orders: [
        {
          id: 1,
          productName: "Baking Soda",
          productId: 2,
          quantity: 5,
          price: 5000,
          orderDate: "12/9/2021",
          customerName: "Ma Ma",
          customerDetail: "098798754 12/D Insein",
          delivery: 2500,
          total: 15000,
        },
        {
          id: 2,
          productName: "Face Mask",
          productId: 2,
          quantity: 1,
          price: 3000,
          orderDate: "13/9/2021",
          customerName: "Ma Ma",
          customerDetail: "098798754 12/D Insein",
          delivery: 2000,
          total: 15000,
        },
        {
          id: 3,
          productName: "Product One",
          productId: 2,
          quantity: 10,
          price: 8500,
          orderDate: "13/9/2021",
          customerName: "Ma Ma",
          customerDetail: "098798754 12/D Insein",
          delivery: 2500,
          total: 15000,
        },
        {
          id: 4,
          productName: "Bar Nyar",
          productId: 2,
          quantity: 8,
          price: 5000,
          orderDate: "13/9/2021",
          customerName: "Ko Ko",
          customerDetail: "098798754 12/D Insein",
          delivery: 2500,
          total: 15000,
        },
        {
          id: 5,
          productName: "Sample Item",
          productId: 2,
          quantity: 5,
          price: 4000,
          orderDate: "12/9/2021",
          customerName: "Ma Ma",
          customerDetail: "098798754 12/D Insein",
          delivery: 2500,
          total: 15000,
        },
        {
          id: 6,
          productName: "Sample Two",
          productId: 2,
          quantity: 5,
          price: 5000,
          orderDate: "15/9/2021",
          customerName: "Ma Ma",
          customerDetail: "098798754 12/D Insein",
          delivery: 2500,
          total: 15000,
        },
        {
          id: 7,
          productName: "Sample Three",
          productId: 2,
          quantity: 5,
          price: 5000,
          orderDate: "14/9/2021",
          customerName: "Ma Ma",
          customerDetail: "098798754 12/D Insein",
          delivery: 2500,
          total: 15000,
        },
      ],
    };
  },
  methods: {
    createNew() {
      this.$router.push("/orders/create");
    },
    delete(id) {
      // axios.delete(this.urls.Orders.delete,{id})
      //   .then((res) => {

      //   })
      //   .catch((err) => {
      //     console.log("error!");
      //   })
    }
  },
};
</script>
<style>
</style>
