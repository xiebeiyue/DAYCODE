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
            <router-link to="/comment" class="nav-link">
              <i class="fa fa-comments nav-icon"></i>
              <p>评论管理</p>
            </router-link>
          </li>
          <li class="nav-header">系统管理</li>
          <li class="nav-item">
           <router-link to="/configuration" class="nav-link active">
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
      <div class="col-md-6">
        <div class="card card-primary card-outline">
          <div class="card-header">
            <h3 class="card-title">个人信息</h3>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form">
            <div class="card-body">
              <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" class="form-control" id="username" value="DayToy" placeholder="用户名">
              </div>
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control" id="email" value="xiebiyue@foxmil.com" placeholder="邮箱">
              </div>
              <div class="form-group">
                <label for="avatar">头像</label>
                <div class="input-group">
                  <input type="file" name="" value="" id="avatar" class="w-100 border">
                </div>
              </div>
              <div class="form-group">
                <label for="resume">个人简介</label>
                <textarea class="form-control" rows="8" id="resume" name="resume" placeholder="个人简介（200字内）..." maxlength="200" style="resize:none"></textarea>
              </div>
              <div class="form-group">
                <label for="position">位置</label>
                <input type="text" class="form-control" id="position" value="中国, 沈阳" placeholder="position">
              </div>
              <div class="form-group">
                <label for="job">职业</label>
                <input type="text" class="form-control" id="job" placeholder="job">
              </div>
              <div class="form-group">
                <label for="skill">技能</label>
                <input type="text"  id="skill" value="前端,后台" placeholder="skill">
              </div>
              <div class="form-group">
                <label for="hobby">爱好</label>
                <input type="text" id="hobby" value="编程,学习" placeholder="hobby">
              </div>
              <div class="form-group">
                <label for="github">github</label>
                <input type="text" class="form-control" id="github" placeholder="github">
              </div>
              <div class="form-group">
                <label for="QQ">QQ</label>
                <input type="text" class="form-control" id="QQ" placeholder="QQ">
              </div>
              <div class="form-group">
                <label for="WeChat">微信</label>
                <input type="text" class="form-control" id="WeChat" placeholder="WeChat">
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <button type="submit" class="btn btn-primary float-right">确认修改</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card card-teal card-outline">
          <div class="card-header">
            <h3 class="card-title">站点信息</h3>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form">
            <div class="card-body">
              <div class="form-group">
                <label for="websiteName">站点名</label>
                <input type="text" class="form-control" id="websiteName" value="DayToy' Blog" placeholder="website name">
              </div>
              <div class="form-group">
                <label for="favicon">站点图标</label>
                <input type="text" class="form-control" id="favicon"  placeholder="favicon.ico">
              </div>
              <div class="form-group">
                <label for="icp">备案号</label>
                <input type="text" class="form-control" id="icp"  placeholder="ICP">
              </div>
              <div class="form-group">
                <label for="description">站点描述</label>
                <input type="text" class="form-control" id="description" placeholder="description">
              </div>
              <div class="form-group">
                <label for="keywords">站点关键词</label>
                <input type="text" class="form-control" id="keywords" placeholder="keywords">
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <button type="submit" class="btn btn-primary float-right">确认修改</button>
            </div>
          </form>
        </div>
        <div class="card card-danger card-outline">
          <div class="card-header">
            <h3 class="card-title">修改密码</h3>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form">
            <div class="card-body">
              <div class="form-group">
                <label for="oldPwd">旧密码</label>
                <input type="password" class="form-control" id="oldPwd"  placeholder="old password">
              </div>
              <div class="form-group">
                <label for="newPwd">新密码</label>
                <input type="password" class="form-control" id="newPwd"  placeholder="new password">
              </div>
              <div class="form-group">
                <label for="confirmPwd">新密码</label>
                <input type="password" class="form-control" id="confirmPwd"  placeholder="confirm password">
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <button type="submit" class="btn btn-danger float-right">确认修改</button>
            </div>
          </form>
        </div>
      </div>
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
<script src="../assets/plugins/selectize/js/standalone/selectize.min.js"></script>
<script src="../assets/js/adminlte.min.js"></script>
<script src="../assets/js/configuration.js"></script> -->
<script type="text/javascript">
import Admin from '../components/component/Admin.vue'
// import Aside from '../components/component/Aside.vue'
import Footer from '../components/component/Footer.vue'
export default{
name:'Configuration',
 components:{
  Admin,
  // Aside,
  Footer
}
}
</script>
<!-- <style>
@import '../assets/plugins/selectize/css/selectize.default.css';
@import '../assets/css/adminlte.min.css';
@import '../assets/plugins/fontawesome-free/css/all.min.css';
</style> -->