// export default class TextWriter {
//   constructor(el, toRotate, period) {
//     this.rotateData = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = "";
//     this.tick();
//     this.isDeleting = false;
//     this.startTimeout;
//   }
//   tick() {
//     let i = this.loopNum % this.rotateData.length;
//     let fullTxt = this.rotateData[i];

//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     }
//     else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

//     let that = this;
//     let delta = 200 - Math.random() * 50;

//     if (this.isDeleting) {
//       delta /= 2;
//     }

//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     }
//     else if (this.isDeleting && this.txt === "") {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500;
//     }

//     this.startTimeout = setTimeout(function () {
//       that.tick();
//     }, delta);
//   }
// }

import React, { useEffect } from "react";
import PropTypes from "prop-types";

function TextWriter({ period, words }) {
  useEffect(() => {
    let textWriter;
    let element = document.querySelector(".txt-rotate");
    if (words) {
      textWriter = new TextWriter(element, JSON.parse(words), period);
    }
    return function cleanup() {
      clearTimeout(textWriter.startTimeout);
    };
  }, []);

  return <span ref={el} className="inline-block px-2 italic txt-rotate"></span>;
}

TextWriter.propTypes = {
  period: PropTypes.number.isRequired,
  words: PropTypes.array.isRequired,
};

export default TextWriter;
