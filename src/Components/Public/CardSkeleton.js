import React from "react"

const CardSkeleton = () => {
  return (
    <div class="card" id="card-link" target="_blank">
      <div class="card__header">
        <div>
          <img
            class="card__header header__img skeleton"
            id="logo-img"
            alt=""
            width="323"
            height="182"
          />
        </div>
      </div>

      <div class="card__footer" id="card-footer">
        <div class="skeleton skeleton-text skeleton-footer"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
