import { signInWithPopup, signOut } from "firebase/auth";
import { firebaseAuth, googleProvider, bd } from "./init";
import { setDoc } from "firebase/firestore";

/**
 * Permet à un utilisateur de se connecter en utilisant l'authentification
 * fédérée Google.
 */
export function connexion() {
  signInWithPopup(firebaseAuth, googleProvider).then(
    (u) => console.log("Utilisateur", u)
  )
}

export function deconnexion() {
  signOut(firebaseAuth);
}

/* 
 * Enregistre l'observateur de connexion Firebase
 * @param {function} mutateurUtil
 * @return void.
*/

export function observerEtatConnexion(mutateurUtil) {

}