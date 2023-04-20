import React, { useContext } from "react"

import publicContext from "../../Services/Context.Service"

import { AccountService } from "../../Services/Account.Service"

const AboutUsSreen = () => {
  const { user, userisLogged, setUserIslogged } = useContext(publicContext)
  const logout = () => {
    AccountService.logout()
    setUserIslogged(false)
  }
  return (
    <div className="no-card-page">
      <section className=" about-text">
        <div className="illustration">
          <p>
            Ekonzo App est une Neo coopérative d'épargne 100% en ligne,
            sécurisée et accessible à tous.
            <br />
            <br />
            Qui permet aux personnes disposant d’un compte mobile money,
            d'épargner leur argent de manière fun , sans pression et accessible
            à tous les budgets.
            <br />
            <br />
            vous pouvez épargner sur une carte challenge ou créer une cagnotte{" "}
          </p>

          <p>
            Le challenge consiste à acheter une carte challenge(Raka-raka, Piyo,
            ou Mopao) et effectuer des dépôts cumulatifs sur cette selon sa
            capacité. le montant déposé augmentera à chaque étape de la
            progression. par exemple pour le challenge Piyo, si on commence avec
            un montant de départ de 1$, le deuxième dépôt sera de 2$ et le 25e
            et dernier dépôt sera de 25$, ce qui fait un total cumulé de 325$
            épargnés.
          </p>
        </div>
      </section>
      <div className="about-text desktop">
        <button className="btn" onClick={logout}>
          Deconnexion
        </button>
      </div>
    </div>
  )
}

export default AboutUsSreen
