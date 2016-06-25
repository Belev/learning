(function() {
  'use strict';

  var refreshClickStream = createStreamFromEvent('.refresh', 'click');
  var closeClickStreams = [
    createStreamFromEvent('.close1', 'click'),
    createStreamFromEvent('.close2', 'click'),
    createStreamFromEvent('.close3', 'click')
  ];

  var refreshClickRequestStream = refreshClickStream.startWith('startup click')
    .map(function() {
      var randomOffset = Math.floor(Math.random() * 500);
      return 'https://api.github.com/users?since=' + randomOffset;
    });

  var refreshClickResponseStream = refreshClickRequestStream.flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise($.getJSON(requestUrl));
  });

  var suggestedUserStreams = closeClickStreams.map(function(closeClickStream) {
    return createSuggestedUserStream(closeClickStream);
  });

  function createStreamFromEvent(selector, event) {
    var domElement = document.querySelector(selector);
    return Rx.Observable.fromEvent(domElement, event);
  }

  function createSuggestedUserStream(closeClickStream) {
    return closeClickStream.startWith('startup click')
      .combineLatest(refreshClickResponseStream, function(click, users) {
          return users[Math.floor(Math.random() * users.length)];
      })
      .merge(
        refreshClickStream.map(function() { return null; })
      );
  }

  function renderSuggestedUser(suggestedUser, selector) {
    var suggestionEl = document.querySelector(selector);
    if (!suggestedUser) {
      suggestionEl.style.visibility = 'hidden';
      return;
    }

    suggestionEl.style.visibility = 'visible';

    var usernameEl = suggestionEl.querySelector('.username');
    usernameEl.href = suggestedUser.html_url;
    usernameEl.textContent = suggestedUser.login;

    var imgEl = suggestionEl.querySelector('img');
    imgEl.src = suggestedUser.avatar_url;
  }

  suggestedUserStreams.forEach(function(suggestedUserStream, index) {
    suggestedUserStream.subscribe(function(suggestedUser) {
      renderSuggestedUser(suggestedUser, '.suggestion' + (index + 1));
    });
  });
}());
