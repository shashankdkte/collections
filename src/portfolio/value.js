var samples = ["3d-boxes-background", "animated-countdown", "animated-navigation", "auto-text-effect", "background-slider",
  "blurry-loading", "button-ripple-effect", "content-placeholder", "custom-range-slider", "dad-jokes",
  "double-click-heart", "double-vertical-slider", "drag-n-drop", "drawing-app", "drink-water", "event-keycodes",
  "expanding-cards", "faq-collapse", "feedback-ui-design", "form-input-wave", "github-profiles", "good-cheap-fast",
  "hidden-search", "hoverboard", "image-carousel", "incrementing-counter", "insect-catch-game", "kinetic-loader",
  "live-user-filter", "mobile-tab-navigation", "movie-app", "netflix-mobile-navigation", "notes-app",
  "password-generator", "password-strength-background", "pokedex", "progress-steps", "quiz-app", "random-choice-picker",
  "random-image-generator", "rotating-nav-animation", "scroll-animation", "sound-board", "split-landing-page",
  "sticky-navigation", "testimonial-box-switcher", "theme-clock", "toast-notification", "todo-list",
  "verify-account-ui"]


  var samples = ["3d-boxes-background", "animated-countdown", "animated-navigation", "auto-text-effect", "background-slider",
  "blurry-loading", "button-ripple-effect", "content-placeholder", "custom-range-slider", "dad-jokes",
  "double-click-heart", "double-vertical-slider", "drag-n-drop", "drawing-app", "drink-water", "event-keycodes",
  "expanding-cards", "faq-collapse", "feedback-ui-design", "form-input-wave", "github-profiles", "good-cheap-fast",
  "hidden-search", "hoverboard", "image-carousel", "incrementing-counter", "insect-catch-game", "kinetic-loader",
  "live-user-filter", "mobile-tab-navigation", "movie-app", "netflix-mobile-navigation", "notes-app",
  "password-generator", "password-strength-background", "pokedex", "progress-steps", "quiz-app", "random-choice-picker",
  "random-image-generator", "rotating-nav-animation", "scroll-animation", "sound-board", "split-landing-page",
  "sticky-navigation", "testimonial-box-switcher", "theme-clock", "toast-notification", "todo-list",
  "verify-account-ui"]
var newuser = []
let id = 12
for(var i=0;i<samples.length;i++)
{
  var newObj = {}
   var category="frontend";
   var tags=["mini","javascript"];
   var image = "Image" + id;
   var title = samples[i].replaceAll("-", " ").toUpperCase();
   var desc= samples[i]
    var demo= 'https://mini-javascript-app.netlify.app/' + samples[i] + "/"
     var github= 'https://github.com/shashankdkte/mini-javascript/tree/main/' + samples[i]
  newObj = {
      id:id,
      category:category,
      tags:tags,
      image:image,
      title:title,
      desc:desc,
      demo:demo,
      github:github
  }
  newuser.push(newObj);
  
  id++;
  }
  console.log(newuser)


  let photos=["3d-background.png","animated-countdown.png","animated-navigation.png","auto-text-effect.png","background-slider.png",
"blurry-loading.png","button-ripple-effect.png","content-placeholder.png","custom-range-slider.png","dad-jokes.png","double-click-heart.png",
"double-vertical-slider.png","drag-n-drop.png","drawing-app.png","drink-water.png","event-keycodes.png","expanding-cards.png","faq-collapse.png",
"form-input-wave.png","github-profiles.png","good-cheap-fast.png","hidden-search.png","hoverboard.png","image-carousel.png","incrementing-counter.png",
"insect-catch.png","kinectic-loader.png","live-user-filter.png","mobile-tab-navigation.png","movie-app.png","netflix-mobile-navigation.png","notes-app.png",
"password-generator.png","password-strength-background.png","pokedex.png","progress-steps.png","random-choice-generator.png","random-image-generator.png",
"rotating-app-navigation.png","scroll-navigation.png","soundboard.png","split-landing-page.png","sticky-navigation.png","theme-clock.png",
"toast-notification.png","todo-list.png","vefrify-account.png"]

//let id = 12
for(var i=0;i<photos.length;i++)
{
 var imports = `import Image${id} from "./../assets/javascript/${photos[i]}";`
  
  id++;
  }
  console.log()