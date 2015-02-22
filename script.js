// set up namespace
if (typeof YouTubeAPIDemo == 'undefined') {
    window.YouTubeAPIDemo = {};
}

// YouTube requires this exactly named function in the global scope
function onYouTubeIframeAPIReady() {
    YouTubeAPIDemo.onYouTubeIframeAPIReady();
}

(function(YouTubeAPIDemo) {
    // reference the YouTube player
    var theMovie;

    // reference the button to trigger loading video
    var theButton = document.querySelector('#the-button');

    // Add YouTube API JS
    // call whenever YouTube should be initialized
    var initYouTube = function() {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        theButton.setAttribute('disabled', 'disabled');
    };

    // This function will be called when the YoutTube API is ready
    var onYouTubeIframeAPIReady = function() {
        // This creates and embeds the video
        theMovie = new window.YT.Player(document.querySelector('#the-movie'), {
            width: '640',
            height: '360',
            videoId: 'dUtQix8nXjo',
            events: {
                // There are other events in the docs
                // https://developers.google.com/youtube/js_api_reference#Events
                'onReady': function(e) {
                    console.log('onReady!');
                    console.log(e);

                    // you could auto-play the video when ready like so:
                    // theMovie.playVideo();
                },
                'onStateChange': function(e) {
                    console.log('onStateChange!');
                    console.log(e);
                }
            }
        });
    };

    // wire up the button
    theButton.addEventListener('click', initYouTube);

    // expose the private function above to the global scope so
    // it can be called by YouTube's JS
    YouTubeAPIDemo.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
})(window.YouTubeAPIDemo);
