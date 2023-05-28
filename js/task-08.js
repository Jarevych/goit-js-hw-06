
const loginFormEl = document.querySelector('.login-form');
const btnEl = document.querySelector('button')

loginFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const {
        elements: { email, password }
      } = e.currentTarget;
    
      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!")}
      else {
       return console.log(`Login: ${email.value}, Password: ${password.value}`)};
       e.currentTarget.reset();
    })