import React from 'react';
import './login.css';
function LOGIN(){
return(
<div class="login-container">
	<form action="" class="form-login">
		<ul class="login-nav">
			
			<li class="login-nav__item">
				<a href="#">Sign Up</a>
			</li>
		</ul>
		
		<label for="login-input-email" class="login__label">
			email id 
		</label>
        <input id="login-input-user" class="login__input" type="text" />
		<label for="login-input-password" class="login__label">
			Password  
		</label>
      
		<input id="login-input-password" class="login__input" type="password" />
		<label for="login-sign-up" class="login__label--checkbox">
			
		</label>
		<button class="login__submit" disabled>Sign in</button>
	</form>	
	<h5 className='login__forgot'>  New user ? Create an Account <a href='/register'> Register</a></h5>

</div>



)
}
export default LOGIN