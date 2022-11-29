const $body = document.querySelector('body');
const $p = document.createElement('p');
$p.innerHTML = 'Hello Popup';
if ($body) {
  $body.appendChild($p);
}
