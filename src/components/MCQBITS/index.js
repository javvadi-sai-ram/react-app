import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable ,action} from "mobx";

class AuthStore {
  @observable isSignedIn = false;

 @action.bound
  onChange() {
    console.log("onChange isSignedIn");
    this.isSignedIn = !this.isSignedIn;
  }
}

const authStore = new AuthStore();

@observer
class SignInButton extends React.Component {
  onChange() {
    const { onChange } = authStore;
    onChange();
  }
  render() {
    const { isSignedIn } = authStore;
    console.log("isSignedIn:", isSignedIn);

    return <button onClick={this.onChange}>Sign In</button>;
  }
}

export default SignInButton 
