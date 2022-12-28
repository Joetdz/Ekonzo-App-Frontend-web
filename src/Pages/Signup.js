import React from "react"
import { AiOutlineUser } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineLockClosed } from "react-icons/hi"
import { CiMail } from "react-icons/ci"

import { FcGoogle } from "react-icons/fc"
import { useFormInputValidation } from "react-form-input-validation"
const Signup = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      nom: "",
      prenom: "",
      tel: "",
      mail: "",
      password: "",
      passwordConfirm: "",
    },
    {
      nom: "required",
      prenom: "required",
      tel: "required",
      mail: "required|email",
      password: "required",
      passwordConfirm: "required",
    }
  )
  const onSubmit = async (event) => {
    const isValid = await form.validate(event)
    if (isValid) {
      console.log(fields, errors)
      // Perform api call here
    } else {
      console.log(fields, errors)
    }
  }
  return (
    <div className="signup-page">
      <div className="login-illustration">
        <img className="illustraton" src="Finance-app-amico.svg" alt="" />
        <img className="logo" src="logo-no-background.png" alt="" />
      </div>
      <div className="signup-form">
        <span className="title">Inscription</span>
        <div className="login-form">
          <form
            className="form"
            noValidate
            autoComplete="on"
            onSubmit={onSubmit}
            lang="fr"
          >
            <div className="input-group">
              <div
                className={
                  errors.prenom ? "input-detail errors" : "input-detail "
                }
              >
                <AiOutlineUser />
                <input type="text" name="prenom" placeholder="Prenom" />
              </div>

              <div
                className={errors.nom ? "input-detail errors" : "input-detail "}
              >
                <AiOutlineUser />
                <input type="text" name="nom" placeholder="Nom" />
              </div>
            </div>

            <div className="input-group numero">
              <div
                className={errors.tel ? "input-detail errors" : "input-detail "}
              >
                <BsTelephone />
                <input type="tel" name="tel" placeholder="Numéro" />
              </div>
            </div>
            <div className="input-group numero">
              <div
                className={
                  errors.mail ? "input-detail errors" : "input-detail "
                }
              >
                <CiMail />
                <input type="email" name="mail" placeholder="Addresse email" />
              </div>
            </div>
            <div className="input-group">
              <div
                className={
                  errors.password ? "input-detail errors" : "input-detail "
                }
              >
                <HiOutlineLockClosed />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                />
              </div>
              <div
                className={
                  errors.passwordConfirm
                    ? "input-detail errors"
                    : "input-detail "
                }
              >
                <HiOutlineLockClosed />
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="confirmer mot de passe "
                />
              </div>
            </div>

            <div className="input-group numero">
              <button type="submit" className="login-btn-local">
                S incrire
              </button>
              <button className="login-btn-google">
                <span className="icon-connexion">
                  <FcGoogle />
                </span>
              </button>
              <span className="login-span">
                Si vous avez déja un compte connectez vous{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
