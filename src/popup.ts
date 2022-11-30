import { HELLO } from './constants';

const $body = document.querySelector('body');
const $p = document.createElement('p');
$p.innerHTML = `${HELLO} popup`;
if ($body) {
  $body.appendChild($p);
}
