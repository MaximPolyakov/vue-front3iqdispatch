<template>
  <div class="Loginpage">
    <div class="login_main">
      <div class="login_img"></div>
      <div class="login_type">
          <img src="../assets/images/login/login_logo_01.png">
          <p>Dispatcher Login</p>
          <div class="omrs-input-group">
            <label class="omrs-input-underlined">
              <input required>
              <span class="omrs-input-label">Username:</span>
            </label>
          </div>
          <div class="omrs-input-group">
            <label class="omrs-input-underlined">
              <input required>
              <span class="omrs-input-label">Password:</span>
            </label>
          </div>
          <div class="btns login_click">L o g i n</div>
      </div>
    </div>
  </div>
</template>
<style>
.Loginpage{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
.login_main{
  display: flex;
  width: 60%;
  padding: 0;
  box-shadow: 0 10px 13px -6px rgb(0 0 0 / 20%), 0 20px 31px 3px rgb(0 0 0 / 14%), 0 8px 38px 7px rgb(0 0 0 / 12%);
}
.login_img{
  width: 50%;
  background-size: cover;
  background-position: cover;
  background-repeat: no-repeat;
  background-image: url(https://app.iqdispatch.us/statics/login_top_img_01.jpg);
}
.login_type{
  width: 50%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
}
.login_type p{
  font-size: 25px;
  margin: 0;
  margin-top: 15px;
}
.login_type img{
  width: 200px;
}
.login_click{
  width: 200px;
  height: 60px;
  font-size: 20px;
  margin-top: 50px;
}
.Loginpage .omrs-input-underlined > input, .omrs-input-filled > input {
    height: auto;
}
@media only screen and (max-width: 1100px) {
.login_main{
  flex-direction: column;
  width: 80%;
}
.login_img{
  width: 100%;
  height: 50vw;
  display: none;
}
.login_type{
  width: 100%;
}
div.omrs-input-group {
    width: 80%;
}
}
</style>
