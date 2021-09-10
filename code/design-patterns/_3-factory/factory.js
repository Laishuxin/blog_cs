import { STATUS_TYPES } from './typing.js'

class BaseModal {
  constructor(status) {
    this.status = status
  }

  get className() {
    let className = 'modal'
    switch (this.status) {
      case STATUS_TYPES.SUCCESS:
        className += ' success'
        break
      case STATUS_TYPES.WARNING:
        className += ' warning'
        break
      case STATUS_TYPES.ERROR:
        className += ' error'
        break
      default:
        break
    }
    return className
  }

  static checkStatus(status) {
    for (const key in STATUS_TYPES) {
      if (status === STATUS_TYPES[key]) return true
    }
    return false
  }

  static log(msg) {
    console.log(`${new Date()}: `, msg)
  }
}

class SuccessModal extends BaseModal {
  constructor(title) {
    super(STATUS_TYPES.SUCCESS)
    this.title = 'success: ' + title
  }

  log() {
    BaseModal.log('success')
  }
}

class WarningModal extends BaseModal {
  constructor(title) {
    super(STATUS_TYPES.WARNING)
    this.title = 'warning: ' + title
  }

  log() {
    BaseModal.log('warning')
  }
}

class ErrorModal extends BaseModal {
  constructor(title) {
    super(STATUS_TYPES.ERROR)
    this.title = 'error: ' + title
  }

  log() {
    BaseModal.log('error')
  }
}

class ModalFactory {
  constructor(dom) {
    this.dom = dom
  }

  create(status, title) {
    if (!BaseModal.checkStatus(status)) {
      throw new TypeError(`${status} modal not exists.`)
    }
    const dom = this.dom
    let modal = null

    switch (status) {
      case STATUS_TYPES.SUCCESS:
        modal = new SuccessModal(title)
        break
      case STATUS_TYPES.WARNING:
        modal = new WarningModal(title)
        break
      case STATUS_TYPES.ERROR:
        modal = new ErrorModal(title)
        break
      default:
        break
    }

    dom.querySelector('header').innerHTML = modal.title
    dom.className = modal.className
    return {
      log: modal.log,
    }
  }
}

export default ModalFactory
