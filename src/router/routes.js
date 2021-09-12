import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const Products = () => import(/* webpackChunkName: "common" */ "@/pages/Products/List.vue");
const ProductCreate = () => import(/* webpackChunkName: "common" */ "@/pages/Products/Create.vue");
const ProductEdit = () => import(/* webpackChunkName: "common" */ "@/pages/Products/Edit.vue");
const Stocks = () => import(/* webpackChunkName: "common" */ "@/pages/Stocks/List.vue");
const AdjustStocks = () => import(/* webpackChunkName: "common" */ "@/pages/Stocks/Adjust.vue");
const Orders = () => import(/* webpackChunkName: "common" */ "@/pages/Orders/List.vue");
const OrderCreate = () => import(/* webpackChunkName: "common" */ "@/pages/Orders/Create.vue");
const OrderEdit = () => import(/* webpackChunkName: "common" */ "@/pages/Orders/Edit.vue");
const Purchasing = () => import(/* webpackChunkName: "common" */ "@/pages/Purchasing.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "products",
        name: "products",
        component: Products
      },
      {
        path: "products/create",
        name: "Create New Product",
        component: ProductCreate
      },
      {
        path: "products/edit/:id",
        name: "Edit Product",
        component: ProductEdit
      },
      {
        path: "stocks",
        name: "stocks",
        component: Stocks
      },
      {
        path: "stocks/edit/:id",
        name: "Adjust Stocks",
        component: AdjustStocks
      },
      {
        path: "orders",
        name: "orders",
        component: Orders
      },
      {
        path: "orders/create",
        name: "Create New Product",
        component: OrderCreate
      },
      {
        path: "orders/edit/:id",
        name: "Edit Product",
        component: OrderEdit
      },
      {
        path: "purchasing",
        name: "purchasing",
        component: Purchasing
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
