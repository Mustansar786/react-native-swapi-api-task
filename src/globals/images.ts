class _Images {
 
  readonly tagImage = require("../assets/images/tagImage.png");
}

/**
 * Animations like lottie, gif, AnimationObjects
 */
class _Animation {
  readonly bell = require("../assets/lottie/icon-lottie-bell.json");
  readonly dot = require("../assets/lottie/icon-dot.json");
  // readonly splash = require("../assets/lottie/icon-splash.json");
  readonly loading = require("../assets/lottie/loading.json");
}
export const Images = new _Images();
export const Animation = new _Animation();
