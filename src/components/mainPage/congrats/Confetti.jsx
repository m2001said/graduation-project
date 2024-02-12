import React, { useEffect } from "react";
import "./confetti.css";

const Confetti = () => {
  useEffect(() => {
    const Confettiful = function (el) {
      this.el = el;
      this.containerEl = null;

      this.confettiFrequency = 3;
      this.confettiColors = ["#EF2964", "#00C09D", "#2D87B0", "#48485E", "#EFFF1D"];
      this.confettiAnimations = ["slow", "medium", "fast"];

      this._setupElements();
      this._renderConfetti();
    };

    Confettiful.prototype._setupElements = function () {
      const containerEl = document.createElement("div");
      const elPosition = this.el.style.position;

      containerEl.classList.add("confetti-container");

      this.el.appendChild(containerEl);

      this.containerEl = containerEl;
    };

    Confettiful.prototype._renderConfetti = function () {
      this.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement("div");
        const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px";
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

        confettiEl.classList.add("confetti", "confetti--animation-" + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        confettiEl.removeTimeout = setTimeout(function () {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        this.containerEl.appendChild(confettiEl);
      }, 25);
    };

    window.confettiful = new Confettiful(document.querySelector(".js-container"));

    return () => {
      clearInterval(window.confettiful.confettiInterval);
    };
  }, []);

  return <div className="js-container"></div>;
};

export default Confetti;
