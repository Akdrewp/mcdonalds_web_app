var firebaseui = require('firebaseui');
var firebase = require('firebase');

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
});

export default function SignInForm() {
    return (
        <div id="firebaseui-auth-container">

        </div>
    );
}