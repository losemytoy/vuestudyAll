<template>
  <div>
    <h1>哈哈哈</h1>
    <div v-for="item in data" :key="item.id">
      <el-button style="margin: 5px 0" type="danger" round @click="handleGoPage(item)">{{ item.title }}</el-button>
    </div>

    <el-table
        :data="data"
        style="align-content: center"
        border>
      <el-table-column
          prop="id"
          label="编号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="title"
          label="名称"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="操作">
        <template slot-scope="scope">
          <el-button @click="handleGoPage(scope.row)" type="danger" round size="small">跳转</el-button>
        </template>
      </el-table-column>
    </el-table>



    <el-form style="margin: 30px 0" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div v-if="isShow">{{ ruleForm }}</div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isShow: false,
      data: [
        {
          title: "第一条",
          id: 1
        },
        {
          title: "第二条",
          id: 2
        },
        {
          title: "第三条",
          id: 3
        }
      ],
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleGoPage(item) {
      this.$router.push({
        name: "homeDetail",
        params: {
          id: item.id
        }
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isShow = true;
          this.$message.success('校验通过！！！')
          setTimeout(() => {
            this.isShow = false;
            this.resetForm(formName);
          },10000);
        } else {
          this.$message.error('校验不通过！！！')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
