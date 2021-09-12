<template>
  <div class="row">
    <div class="col-md-12">
      <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Stocks</li>
        </ol>
      </nav>
      <div class="row">
          <div class="offset-md-7 offset-xs-6 col-md-3 col-xs-3 form-group">
            <input type="text" class="form-control" placeholder="Search..">
          </div>
          <div class="col-md-2 col-xs-3">
            <button type="button" class="btn btn-block btn-info btn-md m-0 p-2" @click="searchProduct()">Search</button>
          </div>
      </div>
      <base-table :data="stocks" :columns="columns">
        <template slot="columns">
          <th class="text-center">#</th>
          <th>Product Name</th>
          <th>Stocks</th>
          <th class="text-right">Actions</th>
        </template>
        <template slot-scope="{ row }">
          <td class="text-center">{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td><p :class="row.stock <= 5 ? 'text-danger' : 'text-info'">{{ row.stock }}</p></td>
          <td class="td-actions text-right">
            <base-button type="secondary" size="md" round icon title="Adjust Stock">
              <router-link :to="'stocks/edit/'+row.id"><i class="tim-icons icon-settings"></i></router-link>
            </base-button> 
            &nbsp;
            &nbsp;
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
      searchTerm : "",
      columns: ["id", "Product Name", "Stock", "Actions"],
      stocks: [
        {
          id: 1,
          name: "Body Scrub",
          stock: 3,
          image: "img/mock/item1.jpg",
        },
        {
          id: 2,
          name: "Something Scrub",
          stock: 10,
          image: "img/mock/item2.jpg",
        },
        {
          id: 3,
          name: "Love You",
          stock: 15,
          image: "img/mock/item3.jpg",
        },
        {
          id: 4,
          name: "Shout Htae",
          stock: 16,
          image: "img/mock/item4.jpg",
        },
        {
          id: 5,
          name: "ဆွဲခြင်း",
          stock: 3,
          image: "img/mock/item5.jpg",
        },
      ],
    };
  },
  methods: {
    createNew()
    {
      this.$router.push('/stocks/create');
    }
  }
};
</script>
<style>
</style>
