const oModal = document.querySelector('.modal');
const oBtnGroup = document.querySelector('.btn-group');

function init () {
  bindEvent();
}

function bindEvent () {
  oBtnGroup.addEventListener('click', handleBtnGroupClick, false);
}

function handleBtnGroupClick(e) {
  const target = e.target;
  if (target.tagName.toUpperCase() === 'BUTTON') {
    const status = target.dataset.status;
    changeStatus(status);
  }
}

function changeStatus (status) {
  switch (status) {
    case 'S':
      oModal.className = 'modal success';
      break;
    case 'W':
      oModal.className = 'modal warning';
      break;
    case 'E':
      oModal.className = 'modal error';
      break;
    default:
      break;
  }
}

init();