import './App.css';
import {IonIcon} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';


function App() {
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
              <IonIcon icon={mailOutline}></IonIcon>
              <input type="email" required></input>
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <IonIcon icon={lockClosedOutline}></IonIcon>
              <input type="password" required></input>
              <label htmlFor="">Password</label>
            </div>
            <div className="forget">
              <input type="checkbox" id="remember-me"/>
              <label htmlFor="remember-me">Remember Me</label>
              <a href='/#'>Forget Password</a>
            </div>
            <button>Log In</button>
            <div className="register">
              <p>Don't have an account <a href='/#' title='Register'>Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
