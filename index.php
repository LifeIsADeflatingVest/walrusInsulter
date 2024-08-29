<?php
// Start PHP code
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Walrus Insulter</title>
	<link rel="icon" type="image/png" href="mursu2.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Matemasie&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 	rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</head>
<body>
    <div id="container">
		<h1>Walrus Insulter</h1>
		<img id="theMursu" src="mur.png">
		<div id="wiseAss">
			<p id="quote"></p>
		</div>
                <p id="walrusLink"><a href="https://homeforfiction.com/art/punningWalrus.php" target="_blank">More Punning Walrus Insults…</a></p>
		<button onclick="changeQuote();" id="again"></button>
		<div id="footer">
			<p>© 2023 - <span id="theYr"></span>. All Rights Reserved.</p>
		</div>
    </div>
</body>
</html>
