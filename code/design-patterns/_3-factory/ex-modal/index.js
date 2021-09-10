'use strict'
exports.__esModule = true
var ModalFactory_1 = require('./ModalFactory')
var StatusFactory_1 = require('./StatusFactory')
var modal = document.querySelector('.modal')
var btnGroup = document.querySelector('.btn-group')
var statusFactory = new StatusFactory_1['default']()
var modalFactor = new ModalFactory_1['default'](modal, statusFactory)
function init() {
  bindEvent()
}
init()
/**
 * AddEventListener.
 */
function addEvent(dom, eventType, cb, options) {
  if (options === void 0) {
    options = false
  }
  dom.addEventListener(eventType, cb, options)
}
/** Bind event. */
function bindEvent() {
  addEvent(btnGroup, 'click', handleBtnGroupClick)
}
function handleBtnGroupClick(event) {
  var target = event.target
  if (target.tagName.toUpperCase() === 'BUTTON') {
    var status_1 = target.dataset.status
  }
}
