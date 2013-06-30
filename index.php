<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="sources/main.css" media="screen" charset="utf-8" />
        <meta charset="utf-8">
        <title>Falapuls</title>
    </head>

    <body>
        
        <canvas id="canvas"></canvas>
        
        <div id="menu">
            <div id="menuBackground">
                <div id="title">
                    Falapuls
                </div>
                <div id="playButton">
                    Play
                </div>
                <div id="credits">
                    Thibault Eynard
                    Adrien Carta
                    Benjamin Winckell
                    Grégoire Carabeufs
                    Thomas Fontaine
                </div>
            </div>
            <!--<div id="playerSelect"></canvas>
                <div id="player1Select">
                    <div id="player1Text">
                        Player 1 Press Start to play
                    </div>
                </div>
                <div id="player2Select">
                    <div id="player1Text">
                        Player 2 Press Start to play
                    </div>
                </div>
                <div id="player3Select">
                    <div id="player1Text">
                        Player 3 Press Start to play
                    </div>
                </div>
                <div id="player4Select">
                    <div id="player1Text">
                        Player 4 Press Start to play
                    </div>
                </div>
            </div>-->
        </div>

    	<!-- main files -->
        <script src="sources/main.js"></script>
    	<!-- config files -->
        <script src="sources/config/globals.js"></script>
        <script src="sources/config/inputs.js"></script>
        <script src="sources/config/BufferLoader.js"></script>
    	<!-- libs -->
        <script src="libs/jquery.js"></script>
        <script src="libs/jquery-ui.js"></script>
        <script src="libs/puppets.js"></script>
        <script src="libs/vectors.js"></script>
        <!-- entities -->
        <script src="sources/entities/entities.js"></script>
        <!-- systems -->
        <script src="sources/systems/RenderStroke.js"></script>
        <script src="sources/systems/RenderSystem.js"></script>
        <script src="sources/systems/KinematicSystem.js"></script>
<<<<<<< HEAD
        <script src="sources/systems/AttractorSystem.js"></script>
        <script src="sources/systems/ColliderCageSystem.js"></script>
=======
        <script src="sources/systems/MapSystem.js"></script>
        <script src="sources/systems/PulseSystem.js"></script>
        <script src="sources/systems/AttractorSystem.js"></script>
>>>>>>> 9ea4e30536cdfdd17858cdce6ec4439b2fdd7fb3
        <!-- components -->
        <script src="sources/components/components.js"></script>
        <!-- menu files -->
        <script src="sources/menu.js"></script>

    </body>
</html>