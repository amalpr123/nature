import React from 'react';
import './login.css';
function Register(){
return(
<div class="login-container">
	<form action="" class="form-login">
		<ul class="login-nav">
			
			<li class="login-nav__item">
				<a href="#">Sign In</a>
			</li>
		</ul>
		<label for="login-input-user" class="login__label">
			Username
		</label>
		
		<input id="login-input-user" class="login__input" type="text" />
		<label for="login-input-email" class="login__label">
			email id 
		</label>
        
        <input id="login-input-user" class="login__input" type="number" />
		<label for="login-input-text" class="login__label">
			phone
		</label>

		<input id="login-input-user" class="login__input" type="text" />
		<label for="login-input-password" class="login__label">
			Password  
		</label>
		<input id="login-input-password" class="login__input" type="password" />
		<label for="login-sign-up" class="login__label--checkbox">
			<input id="login-sign-up" type="checkbox" class="login__input--checkbox" />
			Keep me Signed in
		</label>
		<button class="login__submit" disabled>Sign in</button>
	</form>
	<h2  className='login__forgot'>Already have an Account? <a href='/login'> Login</a></h2>
</div>



)
}
export default Register