<template>
  <div class="home">
    我是首页
    <div class="box">
      <div>核销码</div>
      <input type="text" placeholder="请输入核销码">
      <div>密码</div>
      <input type="text" placeholder="请输入核销密码">
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<style>
  .box{
    padding: 60px 15px 0;
    text-align: center
  }
  .box div{
    font-size: 16px;
    color: #292929;
  }
  .box input{
    background: #F8F8F8;
    border-radius: 2px;
    width: 345px;
    line-height: 46px;
    text-align: center;
    border: none;
    margin: 15px 0;
  }
</style>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  setup(props,content){
    console.log(props,content)
  }
}
</script>
