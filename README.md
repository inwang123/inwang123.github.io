<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Matching Game</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<audio loop autoplay>
  <source src="audio/meow.mp3" type="audio/mpeg3">
</audio>

<body>
  <header>
    <h1>Poro Matching Game</h1>
  </header>
  <section id="game-container">

    <embed src="audio/meow.mp3" loop="true" autostart="true" width="2" height="0">
    <!-- display the flip and match counters -->
    <div id="ui-container">
      <h3>Flips: <span id="flip-count">0</span></h3>
      <h3>Matches: <span id="match-count">0</span></h3>
    </div>

    <!-- reder cards -->
    <div id="card-container"></div>

  </section>

  <div class="btn-container">
    <button class="reset-btn" onclick="resetGame()">Reset</button>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.1/underscore-min.js"></script>
  <script src="https://bit.ly/3HbMbbF"></script>
  <script src="provided.js"></script>
  <script src="script.js"></script>
</body>



</html>
