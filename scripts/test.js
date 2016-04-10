export function test () {
  var el = document.createElement( 'h1' );

  el.innerHTML = "Hi there<span class='callout'>.</span>"
  el.className = "test-case";

  document.body.appendChild( el );
}
