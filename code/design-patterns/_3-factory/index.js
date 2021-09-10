import ModalFactory from './factory.js'

const oModal = document.querySelector('.modal')
const oBtnGroup = document.querySelector('.btn-group')
const modalFactory = new ModalFactory(oModal)

function init() {
  bindEvent()
}

function bindEvent() {
  oBtnGroup.addEventListener('click', handleBtnGroupClick, false)
}

function handleBtnGroupClick(e) {
  const target = e.target
  if (target.tagName.toUpperCase() === 'BUTTON') {
    const status = target.dataset.status
    const modal = modalFactory.create(status, 'hello')

    modal.log()
  }
}

init()
