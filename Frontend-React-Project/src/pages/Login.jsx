import "./Login.css";

function Login() {
  return (
    <div class="animated bounceInDown">
      <div class="container">
        <span class="error animated tada" id="msg"></span>
        <form name="form1" class="box" onsubmit="return checkStuff()">
          <h4>
            Login<span>Page</span>
          </h4>
          <h5>Sign in to your account.</h5>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autocomplete="off"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Passsword"
            id="pwd"
            autocomplete="off"
          ></input>
          <label>
            <input type="checkbox"></input>
            <span></span>
            <small class="rmb">Remember me</small>
          </label>
          <a href="#" class="forgetpass">
            Forget Password?
          </a>
          <input type="submit" value="Sign in" class="btn1"></input>
        </form>
        <a href="#" class="dnthave">
          Don’t have an account? Sign up
        </a>
      </div>
    </div>
  );
}

export default Login;
