<template>
<div>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
<Admin></Admin>
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
          <router-link to="/home" class="nav-link">
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
            <router-link to="/bgmsg" class="nav-link active">
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
 <div class="content-wrapper mt-3">
<!-- Main content -->
<section class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-teal card-outline">
          <div class="card-header">
            <h3 class="card-title">博客列表</h3>
          </div>
          <div class="card-body">

          </div>
          <hr class="m-0">
          <!-- /.card-header -->
          <div class="card-body table-responsive">
            <table id="testTable" class="table table-bordered table-hover text-nowrap">
              <thead>
              <tr>
                <th><input type="checkbox" value="' + data + '" name="id"/></th>
                <th>标题</th>
                <th>分类</th>
                <th>发布</th>
                <th>浏览量</th>
                <th>发布时间</th>
                <th>更新时间</th>
                <th>操作</th>
              </tr>
              </thead>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>

  </div>
</section>
<!-- /.content -->
</div>
<Footer></Footer>
</div>
</body>
</div>
</template>

<!-- jQuery
<script src="../assets/plugins/jquery/jquery.min.js"></script>
Bootstrap 4
<script src="../assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
DataTables
<script src="../assets/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="../assets/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="../assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
AdminLTE App
<script src="../assets/js/adminlte.min.js"></script> -->

<script type="text/javascript">
import Admin from '../components/component/Admin.vue'
// import Aside from '../components/component/Aside.vue'
import Footer from '../components/component/Footer.vue'
export default{
name:'Bgmsg',
components:{
  Admin,
  // Aside,
  Footer
},
  data(){
    return{

    }
  },
  mounted (){

  }
}
</script>
<!-- <style>
@import '../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css';
@import '../assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css';
@import '../assets/css/adminlte.min.css';
@import '../assets/plugins/fontawesome-free/css/all.min.css';
</style> -->