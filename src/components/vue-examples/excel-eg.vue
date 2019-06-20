<style lang="stylus" rel="stylesheet/stylus">
.tableA {
    border-collapse: collapse;
    font-family: '微软雅黑';
  }    
  .tableA tr th {
    border: thin #d9d9d9 solid;
    background: #f5f5f5;
    color:#999;
    height: 40px;
  }
  .tableA .title th{
    font-size: 20px;      
    font-weight: 700;
    color:red;
    height: 70px;
  }
  .tableA tr td {
    padding: 0 40px;
    border: thin #d9d9d9 solid;
    height: 40px;
    text-align: center;
    background:#fff;      
  }
  .tableA .footer td {
    font-size: 20px;
    font-weight: 700;
    background:#f5f5f5;
  }
</style>

<template>
  <div style="padding:20px;">
    <button-vbt @click="doit">导出Excel</button-vbt>
    <div style="margin-top:10px;"></div>
    <h5>添加员工</h5>
    <div>
      <div style="padding: 10px 0;">
        <input-vbt v-model="name" placeholder="姓名"></input-vbt>
        <input-vbt v-model="job" placeholder="职位"></input-vbt>
        <input-vbt v-model="year" placeholder="工龄" :checkFunc="iptYear"></input-vbt>
        <button-vbt @click="add" >添加员工</button-vbt>
      </div>
    </div>    

    <table border="0" cellspaceing="0" cellpadding="0" class="tableA">
      <tr class="title">
        <th colspan="3">员工信息表-测试</th>
      </tr>
      <tr>
        <th>姓名</th>
        <th>职位</th>
        <th>工龄</th>
      </tr>
      <tr v-for="(item, index) in list" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.year }}</td>
      </tr>
      <tr class="footer">
        <td colspan="3">总人数：{{ list.length }}人</td>
      </tr>
    </table>
    
  </div>
</template>

<script>
import { createExcel, _Number } from '@bestime/js'
export default {
  data () {
    return {
      name: '王麻子',
      job: 'PHP',
      year: '',
      list: [
        {
          name: '张三',
          job: '售后',
          year: '1.5'
        },
        {
          name: '李四',
          job: 'web前端',
          year: '1.9'
        }
      ]
    }
  },

  methods: {
    iptYear (val) {
      let toVal = val.replace(/[^0-9]/g, '')
      return toVal > 150 ? 150 : toVal
    },
    add () {
      if(!this.name) return ns.dialog({ msg: '请输入姓名' })
      if(!this.job) return ns.dialog({ msg: '请输入职位' })
      if(!this.year) return ns.dialog({ msg: '请输入工龄' })
      const list = this.list.concat({
        name: this.name,
        job: this.job,
        year: this.year
      })
      this.list = list
    },
    doit () {
      createExcel({
        name: '员工信息表-测试',
        oTable: document.getElementsByClassName('tableA')[0],
        css: `
          .tableA {
            border-collapse: collapse;
            font-family: '微软雅黑';
          }    
          .tableA tr th {
            border: thin #d9d9d9 solid;
            background: #f5f5f5;
            color:#999;
            height: 40px;
          }
          .tableA .title th{
            font-size: 24px;      
            font-weight: 700;
            color:red;
            height: 70px;
          }
          .tableA tr td {
            padding: 0 40px;
            border: thin #d9d9d9 solid;
            height: 40px;
            text-align: center;
            background:#fff;      
          }
          .tableA .footer td {
            font-size: 20px;
            font-weight: 700;
            background:#f5f5f5;
          }
        `
      })
    }
  }
}
</script>