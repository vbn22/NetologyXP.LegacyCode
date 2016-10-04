player.showHighScoreList = function(pageToken,isTesting) {
    document.querySelector('#highScoreListDiv').innerHTML = '';
    document.querySelector('#highScoreListDiv').style.display = 'block';
    // Create the request.
    LEADERBOARD_ID = document.getElementById('leaderboardIdShowHS').value;
    var request = gapi.client.games.scores.list(
        {leaderboardId: LEADERBOARD_ID,
            collection: 'PUBLIC',
            timeSpan: 'all_time',
            pageToken: pageToken,
            maxResults: '10'});

    if (isTesting){
        player.createPlayerList = fucntion(){};
        player.showHighScoreList = function(){};
        utilities.createButton = function(){};
    }


    request.execute(
        function(response) {
            console.log('High score', response);
            if (response.error) {
                alert('Error ' + response.error.code + ': ' + response.message);
                return;
            }
            var root = document.getElementById('highScoreListDiv');

            // место шва - можно изменить поведение
            player.createPlayerList(root, response.items, true);
            if (response.prevPageToken) {
                root.appendChild(
                    // место шва - можно изменить поведение
                    utilities.createButton('Prev', response.prevPageToken,
                        function(event) {
                            // место шва  - можно изменить поведение
                            player.showHighScoreList(event.target.value);
                        }));
            }
            if (response.nextPageToken) {
                root.appendChild(
                    // место шва - можно изменить поведение
                    utilities.createButton('Prev', response.prevPageToken,
                        function(event) {
                            // место шва  - можно изменить поведение
                            player.showHighScoreList(event.target.value);
                        }));
            }
        });
};