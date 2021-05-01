import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import 'bootstrap'
import '../stylesheets/application'
import "@fortawesome/fontawesome-free/css/all.css"

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover()
})

window.jQuery = $;
window.$ = $;

global.toastr = require("toastr")

Rails.start()
Turbolinks.start()
ActiveStorage.start()
