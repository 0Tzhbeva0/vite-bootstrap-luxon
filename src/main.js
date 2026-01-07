import './styles.scss';

import { DateTime } from 'luxon';
import Modal from 'bootstrap/js/dist/modal';

const showTimeBtn = document.getElementById('showTimeBtn');
const modalEl = document.getElementById('timeModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCloseX = document.getElementById('modalCloseX');
const timeEl = document.getElementById('time');

const modal = modalEl ? new Modal(modalEl) : null;

const renderTime = () => {
  if (!timeEl) return;

  timeEl.textContent = DateTime.local()
    .setLocale('ru')
    .toFormat('dd.LL.y HH:mm:ss');
};

let timerId = null;

const stopTimer = () => {
  if (timerId === null) return;
  window.clearInterval(timerId);
  timerId = null;
};

const startTimer = () => {
  renderTime();
  stopTimer();
  timerId = window.setInterval(renderTime, 1000);
};

showTimeBtn?.addEventListener('click', () => {
  if (!modal) return;
  startTimer();
  modal.show();
});

modalCloseBtn?.addEventListener('click', () => modal?.hide());
modalCloseX?.addEventListener('click', () => modal?.hide());

modalEl?.addEventListener('hidden.bs.modal', () => {
  stopTimer();
});
