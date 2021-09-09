<template>
  <div class="row">
    <div class="col-md-12">
      <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <div>
          <base-button @click="createNew()" type="success" size="large" title="Delete">
            Add Product <i class="tim-icons icon-simple-add"></i>
          </base-button>
      </div>
      <base-table :data="products" :columns="columns">
        <template slot="columns">
          <th class="text-center">#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Image</th>
          <th class="text-right">Actions</th>
        </template>
        <template slot-scope="{ row }">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.price }}</td>
          <td>{{ row.stock }}</td>
          <td><img style="height: 100px;width: 100px" :src="row.image" alt="product"></td>
          <td class="td-actions text-right">
            <base-button type="warning" size="md" round icon title="Edit">
              <router-link :to="'products/edit/'+row.id"><i class="tim-icons icon-settings"></i></router-link>
            </base-button> 
            &nbsp;
            <base-button type="success" size="md" round icon title="Delete">
              <i class="tim-icons icon-simple-remove"></i>
            </base-button> 
            &nbsp;
            <base-button type="danger" size="md" round icon title="Add Stock">
              <i class="tim-icons icon-simple-add"></i>
            </base-button>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import { BaseTable } from "@/components";

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      columns: ["id", "Product Name", "Price", "Stock", "Photo", "Actions"],
      products: [
        {
          id: 1,
          name: "Body Scrub",
          price: 5000,
          stock: 3,
          image: "img/mock/item1.jpg",
        },
        {
          id: 2,
          name: "Something Scrub",
          price: 15000,
          stock: 10,
          image: "img/mock/item2.jpg",
        },
        {
          id: 3,
          name: "Love You",
          price: 8000,
          stock: 15,
          image: "img/mock/item3.jpg",
        },
        {
          id: 4,
          name: "Shout Htae",
          price: 9000,
          stock: 16,
          image: "img/mock/item4.jpg",
        },
        {
          id: 5,
          name: "ဆွဲခြင်း",
          price: 8500,
          stock: 3,
          image: "img/mock/item5.jpg",
        },
      ],
    };
  },
  methods: {
    createNew()
    {
      this.$router.push('/products/create');
    }
  }
};
</script>
<style>
</style>
