import ModalFactory from "./ModalFactory";
import StatusFactory from "./StatusFactory";

const modal = document.querySelector('.modal')
const btnGroup = document.querySelector('.btn-group')
const statusFactory = new StatusFactory();
const modalFactor = new ModalFactory(modal!, statusFactory);

function init() {
  bindEvent()
}

init();

/**
 * AddEventListener.
 */
function addEvent(
  dom: Element,
  eventType: string,
  cb: any,
  options: boolean = false
) {
  dom.addEventListener(eventType, cb, options);
}

/** Bind event. */
function bindEvent() {
  addEvent(btnGroup!, 'click', handleBtnGroupClick);
}


function handleBtnGroupClick(event: any) {
  const target = event.target;
  
  if (target.tagName.toUpperCase() === 'BUTTON') {
    const status = target.dataset.status;
  }
}
