<template>
<div>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
<Admin></Admin>
<!-- <Aside></Aside> -->
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
             <router-link to="/bgmsg" class="nav-link">
              <i class="fa fa-list-alt nav-icon"></i>
              <p>博客管理</p>
            </router-link>
          </li>
          <li class="nav-item">
             <router-link to="/sortmsg" class="nav-link">
              <i class="fa fa-bookmark nav-icon"></i>
              <p>分类管理</p>
            </router-link>
          </li>
          <li class="nav-item">
             <router-link to="/tagmsg" class="nav-link">
              <i class="fa fa-tags nav-icon"></i>
              <p>标签管理</p>
            </router-link>
          </li>
          <li class="nav-item">
             <router-link to="/comment" class="nav-link active">
              <i class="fa fa-comments nav-icon"></i>
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
             <router-link to="http://localhost:3000/users/login" class="nav-link">
              <i class="fa fa-sign-out-alt nav-icon"></i>
              <p>安全退出</p>
            </router-link>
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
    <!-- /.col -->
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">评论列表</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <table class="table table-hover text-nowrap table-bordered">
            <thead>
            <tr>
              <th width="5%"></th>
              <th>评论人</th>
              <th>评论人Github账号</th>
              <th>评论人内容</th>
              <th>评论时间</th>
              <th>前台地址</th>
              <th>回复内容</th>
              <th class="text-center" width="15%">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="text-center">1</td>
              <td>xiaoming</td>
              <td>123@163.com</td>
              <td>123</td>
              <td>2020.6.24</td>
              <td><a target="_blank" href="detail.html">博客标题</a></td>
              <td>456</td>
              <td class="text-center">
                <button class="btn btn-xs btn-success" data-toggle="modal" data-target="#replyCommentModal">
                  <i class="fa fa-edit"></i>
                  回复
                </button>
                <button class="btn btn-xs btn-danger ml-2" data-toggle="modal" data-target="#deleteCommentModal">
                  <i class="fa fa-trash"></i>
                  删除
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
        <div class="card-footer clearfix">
          <ul class="pagination pagination-sm m-0 float-right">
            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- /.card -->
    </div>
  </div>
  <!-- /.row -->
</section>
<!-- /.content -->
</div>
<Footer></Footer>
</div>
</body>
</div>
</template>
<!-- <script src="../assets/plugins/jquery/jquery.min.js"></script>
<script src="../assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../assets/js/adminlte.min.js"></script> -->
<script type="text/javascript">
import Admin from '../components/component/Admin.vue'
// import Aside from '../components/component/Aside.vue'
import Footer from '../components/component/Footer.vue'
export default{
name:'Comment',
 components:{
  Admin,
  // Aside,
  Footer
}
}
</script>
<!-- <style>
@import '../assets/css/adminlte.min.css';
@import '../assets/plugins/fontawesome-free/css/all.min.css';
</style> -->