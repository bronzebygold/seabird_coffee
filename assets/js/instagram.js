// script thanks to https://rudrastyh.com/instagram/get-photos-and-profile-info-pure-javascript.html

$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '452607449',
        accessToken: '452607449.1677ed0.f71498a7e9e14152b84d4ff4664b5e2c',
        resolution: 'standard_resolution',
        template: '<div><a href="{{link}}" target="_blank" id="{{id}}"><img class="instagram_img" src="{{image}}" /></a></div>',
        sortBy: 'most-recent',
        limit: 6,
        links: true
    });
    userFeed.run();
});