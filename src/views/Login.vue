<template>
  <div class="main">
    <div class="top">
      城方CIM平台（Vue）
    </div>
    <div class="center"></div>

    <div class="login-container">
      <div class="login-title">欢迎登陆</div>
      <a-form layout="horizontal" :form="form" @submit="handleSubmit">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '请输入用户名!' }] }
            ]"
            placeholder="用户名-guest"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码!' }]
              }
            ]"
            type="password"
            placeholder="密码-1qaz2wsx"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-button"
            :disabled="hasErrors(form.getFieldsError())"
          >
            登陆
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {
        name: "horizontal_login"
      })
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.form.validateFields();
    });
  },
  methods: {
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          if (values.userName == "guest" && values.password == "1qaz2wsx") {
            this.$message.success("登陆成功!");
            this.$router.push({ path: "/home" });
          } else {
            this.$message.error("账号或密码错误!");
          }
        }
      });
    }
  }
};
</script>
 <style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .top {
    height: 92px;
    width: 100%;
    display: flex;
    font-size: 24px;
    align-items: center;
    padding-left: 30%;
    color: #1b3e95;
    font-weight: 1000;
  }
  .center {
    min-width: 1024px;
    height: 69%;
    min-height: 416px;
    display: -ms-flexbox;
    display: flex;
    background-image: url(../images/logo.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.login-container {
  width: 360px;
  position: absolute;
  top: 30%;
  right: 25%;
  transform: translate(50%);
  margin: 0;
  padding: 25px;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  background: #fff;
}
button.login-button {
  padding: 0 15px;
  font-size: 16px;
  height: 40px;
  width: 100%;
}
.login-title {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
</style>
 

 