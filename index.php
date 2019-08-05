<!DOCTYPE html>
    <head>
        <title>MYST</title>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>

        <header>
            <h1>MYST</h1>
            <img src="src/Speaker_Icon.svg" alt="speaker" class="readquestion">
        </header>

        <form class='survey'>
<?php
    //Use GET to find the relevant questionaire

    //Use question number to import the correct type of form

    //Define question parameters from DB information

    echo file_get_contents('surveysegments/alphabetselect.html');
?>
        </form>

        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        <script src="src/readquestion.js"></script>
        <script src="src/next.js"></script>

    </body>
</html>