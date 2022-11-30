const $body = document.querySelector('body');
const $helloContent = document.createElement('div');
$helloContent.className = 'hello-content';
$helloContent.innerHTML = 'Hello content scripts';
if ($body) {
  $body.appendChild($helloContent);
}
