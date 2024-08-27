(function () {
  if (typeof window.jQuery !== 'undefined') {
    $(".prevent-copy").off('paste');
    $(".prevent-copy").off('copy');
    console.log('Paste prevention removed using page\'s jQuery.');
  } else {
    console.log('jQuery is not loaded on this page.');
  }
})();
