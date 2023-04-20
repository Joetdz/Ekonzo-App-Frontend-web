import React, { useState, useContext } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineLockClosed } from "react-icons/hi"
import { CiMail } from "react-icons/ci"
import axios from "axios"

import { useFormInputValidation } from "react-form-input-validation"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { AccountService } from "../Services/Account.Service"
import { useNavigate } from "react-router-dom"
import publicContext from "../Services/Context.Service"

import "react-toastify/dist/ReactToastify.css"
import AuthLoader from "../Components/AuthLoader"
import { useEffect } from "react"

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { userisLogged, setUserIslogged } = useContext(publicContext)
  const navigate = useNavigate()

  const notify = (message) => {
    toast(message)
  }
  const [fields, errors, form] = useFormInputValidation(
    {
      nom: "",
      prenom: "",
      tel: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    {
      nom: "required",
      prenom: "required",
      tel: "required|numeric|digits_between:9,12",
      email: "email",
      password: "required",
      passwordConfirm: "required",
    }
  )

  const RegisterUser = (credentials) => {
    setIsLoading(true)
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}user/signup`,
      data: credentials,
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log(data)
        setIsLoading(false)
        notify("votre compte  a été créé avec succés")
        setTimeout(() => {
          AccountService.saveToken(data.data.token)
          AccountService.SaveCurrentUserInfo(data.data.userId)
          console.log("salut token")
          setUserIslogged(true)
        }, 3000)
      })
      .catch((err) => {
        setIsLoading(false)
        if (err.message === "Network Error") {
          notify(err.message)
        } else {
          notify(err.response.data)
        }
      })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const isValid = await form.validate(event)
    if (isValid) {
      console.log(fields)
      if (fields.password !== fields.passwordConfirm) {
        notify("les mots de passe ne sont pas identiques")
      } else {
        setIsLoading(true)
        RegisterUser(fields)
      }

      console.log("ok", fields, "erro", errors)
    } else {
      console.log(errors)
      notify("Vueillez renseigner correctement tous les champs")
    }
  }
  useEffect(() => {
    userisLogged && navigate("/home")
    console.log(userisLogged)
  })

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
            autoComplete="off"
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
                <input
                  type="text"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  name="prenom"
                  placeholder="Prenom"
                />
              </div>

              <div
                className={errors.nom ? "input-detail errors" : "input-detail "}
              >
                <AiOutlineUser />
                <input
                  type="text"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  name="nom"
                  placeholder="Nom"
                />
              </div>
            </div>

            <div className="input-group numero">
              <div
                className={errors.tel ? "input-detail errors" : "input-detail "}
              >
                <BsTelephone />
                +243
                <input
                  type="tel"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  name="tel"
                  placeholder="Numéro"
                />
              </div>
            </div>
            <div className="input-group numero">
              <div
                className={
                  errors.mail ? "input-detail errors" : "input-detail "
                }
              >
                <CiMail />
                <input
                  type="email"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  name="email"
                  placeholder="Adresse email (facultative)"
                />
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
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
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
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  placeholder="confirmer mot de passe "
                />
              </div>
            </div>

            <div className="input-group numero">
              <button type="submit" className="login-btn-local">
                {"S'inscrire "}
                {isLoading ? <AuthLoader /> : ""}
              </button>

              <ToastContainer />
              <span className="login-span">
                Si vous avez déja un compte
                <Link to="/login">connectez vous</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
