<template>
  <div id="app">
     <body class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper">
   <Admin></Admin>
   <!-- <Aside></Aside>  -->
    <!-- <router-view></router-view> -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <h1>
     <a href="http://localhost:3000/" class="brand-link">
        <img src="../assets/upload/jianguo.jpg" class="brand-image img-circle elevation-3">
        <span class="brand-text font-weight-light">DayToy's Blog</span>
      </a>
    </h1>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-header">仪表盘</li>
          <li class="nav-item">
            <router-link to="/home" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>仪表盘</p>
            </router-link>
          </li>
          <li class="nav-header">博客编辑</li>
          <li class="nav-item">
            <router-link to="/edit" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>发布博客</p>
            </router-link>
          </li>
          <li class="nav-header">管理模块</li>
          <li class="nav-item">
            <router-link to="bgmsg" class="nav-link">
              <i class="fa fa-list-alt nav-icon" aria-hidden="true"></i>
              <p>博客管理</p>
            </router-link>
          </li>
          <li class="nav-item">
           <router-link to="/sortmsg" class="nav-link">
              <i class="fa fa-bookmark nav-icon" aria-hidden="true"></i>
              <p>分类管理</p>
            </router-link>
          </li>
          <li class="nav-item">
           <router-link to="/tagmsg" class="nav-link">
              <i class="fa fa-tags nav-icon" aria-hidden="true"></i>
              <p>标签管理</p>
            </router-link>
          </li>
          <li class="nav-item">
           <router-link to="/comment" class="nav-link">
              <i class="fa fa-comments nav-icon" aria-hidden="true"></i>
              <p>评论管理</p>
            </router-link>
          </li>
          <li class="nav-header">系统管理</li>
          <li class="nav-item">
           <router-link to="/configuration"
               class="nav-link">
              <i class="fa fa-wrench nav-icon"></i>
              <p>系统配置</p>
            </router-link>
          </li>
          <li class="nav-item">
          <a href="http://localhost:3000/users/login" class="nav-link">
              <i class="fa fa-sign-out-alt nav-icon"></i>
              <p>安全退出</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
   <Main></Main>
   <!-- <router-view></router-view> -->
     
   <Footer></Footer>
 </div>
  </body>
  </div>
</template>
<!-- <script type="text/javascript" src="../"></script> -->
<!-- <script type="text/javascript" src="../assets/plugins/jquery/jquery.min.js"></script>
<script type="text/javascript" src="../assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="../assets/js/adminlte.min.js"></script> -->
<script>
  import Admin from '../components/component/Admin.vue'
// import Admin from '../components/component/Admin.vue'
// import Aside from '../components/component/Aside.vue'
import Footer from '../components/component/Footer.vue'
import Main from '../components/component/Main.vue'
export default {
  name: 'Home',
  components: {
    Admin,
    // Aside,
    Footer,
    Main
  }
}
</script>

<!-- <style>
  @import '../assets/css/adminlte.min.css';
  @import '../assets/plugins/fontawesome-free/css/all.min.css';
</style> -->