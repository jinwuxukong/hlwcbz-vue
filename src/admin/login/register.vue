<template>
        <div style="color:red;width:100%;height:100%" class="outer_label">
            <img style="width:900px;height:500px;justify-content: center;align-items: center;" class="inner_label login_logo" src="../../assets/login/login_top.jpg">
        <!-- <el-form :model="ruleForm">
          <el-form-item label="用户名" prop="name"><el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input></el-form-item>
          <el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" auto-complete="off"></el-input></el-form-item>
          <el-form-item label="确认密码" prop="checkPass"><el-input type="password" v-model="ruleForm.checkPass" placeholder="确认密码" auto-complete="off"></el-input></el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form> -->
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            </el-form>
        </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
// export default {
//     data(){
//         var validatePass = (rule,value,callback) =>{
//             if(value === ''){
//                 callback(new Error('请输入密码'));
//             }else{
//                 if(this.ruleFrom.callback !==''){
//                     this.$refs.ruleFrom.validateField('checkPass')
//                 }
//                 callback();
//             }
//         };

//         var validatePass2 = (rule,value,callback) =>{
//             if (value === '') {
//                 callback(new Error('请再次输入密码'))
//             } else if(value !== this.ruleFrom.pass){
//                 callback(new Error('两次输入密码不一致'))
//             } else {
//                 callback();
//             }
//         };
//         return {
//             activeName: 'second',
//             ruleFrom: {
//                 name: '',
//                 pass: '',
//                 checkPass: ''
//             },
//             rules: {
//                 name: [{ required: true, message: '请输入您的名称', trigger: 'blur' }, { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }],
// 				pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
// 				checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
//             }
//         };
//     },

//     methods: {
//         submitForm(formName) {
//             this.$refs[formName].validate(valid => {
// 				if (valid) {
// 					this.$message({
// 						type: 'success',
// 						message: '注册成功'
// 					});
// 					// this.activeName: 'first',
// 				} else {
// 					console.log('error submit!!');
// 					return false;
// 				}
// 			});
//         },
//         resetForm(formName) {
// 			this.$refs[formName].resetFields();
// 		}
//     }
// }