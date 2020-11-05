<template>
<div>
<body class="hold-transition layout-top-nav">
<!-- Site wrapper -->
<div class="wrapper">
<!-- Navbar -->
<nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
  <div class="container-fluid pl-5 pr-5">
   <a href="http://localhost:3000/" class="navbar-brand">
      <img src="../assets/upload/jianguo.jpg" class="brand-image img-circle elevation-3">
      <span class="brand-text font-weight-light">DayToy's Blog</span>
    </a>

    <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse order-3" id="navbarCollapse">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
           <router-link to="/home" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            仪表盘
</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/bgmsg" class="nav-link">
            <i class="fa fa-list-alt nav-icon"></i>
            博客管理
          </router-link>
        </li>
        <li class="nav-item">
           <router-link to="/sortmsg" class="nav-link">
            <i class="fa fa-bookmark nav-icon"></i>
            分类管理
          </router-link>
        </li>
        <li class="nav-item">
           <router-link to="/tagmsg" class="nav-link">
            <i class="fa fa-tags nav-icon"></i>
            标签管理
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- /.navbar -->

<div class="container-fluid pl-5 pr-5 mt-3">
  <form id="blogForm" action="" method="post">
    <!-- /.card-body -->
    <div class="card card-teal card-outline">
      <div class="card-header">
        <h3 class="card-title">博客信息</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-7">
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <label for="title" class="input-group-text">标题</label>
                </div>
                <!-- /btn-group -->
                <input type="text" class="form-control" id="title" name="title" placeholder="博客标题(必填, 30字内)..."
                       maxlength="30">
              </div>
            </div>
          </div>

          <div class="col-md-5">
            <!-- radio -->
            <div class="form-group clearfix">
              <div class="icheck-default d-inline-block">
                <input type="radio" id="original" name="creationType" value="原创" checked="checked">
                <label for="original">原创</label>
              </div>
              <div class="icheck-default d-inline-block ml-3">
                <input type="radio" id="reprinted" name="creationType" value="转载">
                <label for="reprinted">转载</label>
              </div>
              <div class="icheck-default d-inline-block ml-3">
                <input type="radio" id="translated" name="creationType" value="翻译">
                <label for="translated">翻译</label>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="categoryId">分类</label>
              <select id="categoryId" name="categoryId" class="select2" data-placeholder="选择分类(必选)...."
                      style="width: 100%;">
                <option></option>
                <option value="1">前端</option>
                <option value="2">后端</option>
                <option value="3">全栈</option>
                <option value="4">架构</option>
                <option value="5">天上人间</option>
                <option value="6">我是一只猫</option>
              </select>
            </div>
            <!-- /.form-group -->
          </div>
          <!-- /.col -->
          <div class="col-md-6">
            <div class="form-group">
              <label for="tagId">标签</label>
              <select id="tagId" name="tagId" class="select2" multiple="multiple" data-placeholder="选择标签...."
                      style="width: 100%;">
                <option value="1">Java</option>
                <option value="2">JavScript</option>
                <option value="3">HTML</option>
                <option value="4">Spring</option>
                <option value="5">SpringBoot</option>
                <option value="6">我的笔记</option>
              </select>
            </div>
            <!-- /.form-group -->
          </div>
          <!-- /.col -->
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="description">博客描述</label>
              <textarea class="form-control" rows="5" id="description" name="description"
                        placeholder="博客描述（必填, 200字内）..."
                        maxlength="200" style="resize:none"></textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <div class="icheck-default float-left">
              <input type="checkbox" id="recommend" name="recommend">
              <label for="recommend">推荐</label>
            </div>
          </div>
          <div class="col-md-10">
            <button id="publishBtn" type="submit" class="btn btn-sm btn-success float-right">
              <i class="fa fa-edit"></i>
              发布
            </button>
            <button id="saveBtn" type="submit" class="btn btn-sm btn-dark float-right mr-1">
              <i class="fa fa-save"></i>
              保存
            </button>
            <button type="button" class="btn btn-sm btn-info float-right mr-1" data-toggle="modal"
                    data-target="#addTagModal">
              <i class="fas fa fa-plus"></i>
              标签
            </button>
            <button type="button" class="btn btn-sm btn-primary float-right mr-1" data-toggle="modal"
                    data-target="#addCategoryModal">
              <i class="fa fa-plus"></i>
              分类
            </button>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>

    <!-- /.card-body -->
    <div id="editormd" class="form-group mb-3">
      <mavon-editor style="height: 100%;width: 100%;" v-model="value">
      <textarea name="content"></textarea>
    </mavon-editor>
    </div>

    <input type="hidden" id="isPublish" name="isPublish">
  </form>
</div>
</div>
<!-- ./wrapper -->

<div class="modal fade" id="addTagModal">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h4 class="modal-title">新增标签</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <input type="text" id="tagInput" name="tag" value="awesome,neat">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
      <button id="addTagBtn" type="button" class="btn btn-success">新增</button>
    </div>
  </div>
  <!-- /.modal-content -->
</div>
<!-- /.modal-dialog -->
</div>

<div class="modal fade" id="addCategoryModal">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h4 class="modal-title">新增分类</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <input type="text" id="categoryInput" name="category" value="前端,后台">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
      <button id="addCategoryBtn" type="button" class="btn btn-success">新增</button>
    </div>
  </div>
  <!-- /.modal-content -->
</div>
<!-- /.modal-dialog -->
</div>
</body>
</div>
</template>
<!-- jquery
<script src="../assets/plugins/jquery/jquery.min.js"></script>
bootstrap
<script  src="../assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<script  src="../assets/js/adminlte.min.js"></script>
sweetalert2
<script  src="../assets/plugins/sweetalert2/sweetalert2.min.js"></script>
editor
<script  src="../assets/plugins/editor.md/js/editormd.min.js"></script>
select2
<script  src="../assets/plugins/select2/js/select2.full.min.js"></script>
<script  src="../assets/plugins/selectize/js/standalone/selectize.min.js"></script>
<script  src="../assets/js/edit.js"></script>
<script  src="../assets/js/categoryinput.init.js"></script>
<script  src="../assets/js/taginput.init.js"></script> -->
<script>
export default{
	name:'Edit'
}
</script>
<!-- <style>
@import '../assets/plugins/fontawesome-free/css/all.min.css';
@import '../assets/plugins/editor.md/css/editormd.min.css';
@import '../assets/plugins/selectize/css/selectize.default.css';
@import '../assets/plugins/select2/css/select2.min.css';
@import '../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
@import '../assets/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css';
@import '../assets/css/adminlte.min.css'
</style> -->