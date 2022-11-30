import { HELLO } from './constants';

const $body = document.querySelector('body');
const $helloContent = document.createElement('div');
$helloContent.className = 'hello-content';
$helloContent.innerHTML = `${HELLO} content scripts`;
if ($body) {
  $body.appendChild($helloContent);
}
