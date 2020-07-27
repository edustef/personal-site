export default class TextWriter {
  constructor(el, toRotate, period) {
    this.rotateData = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
    this.startTimeout;
  }
  tick() {
    let i = this.loopNum % this.rotateData.length;
    let fullTxt = this.rotateData[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 200 - Math.random() * 50;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.startTimeout = setTimeout(function () {
      that.tick();
    }, delta);
  }
}


