<!DOCTYPE html>
<html>
        <head>
                <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
                <title>YGO</title>
                
                <!-- external file includes -->
                <link rel="stylesheet" type="text/css" href="css/page.css" />
                <link rel="stylesheet" type="text/css" href="css/field.css" />
                
                <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.js"></script>
                <script type="text/javascript" src="js/auth.js"></script>
                <script type="text/javascript" src="js/battle.js"></script>
                <!-- end of includes -->
        </head>
        <body>
                <div style="display:none">
                        <span id="game-id">1</span>
                        <span id="player"></span>
                        <span id="player-id"></span>
                        <span id="authentication">0</span>
                </div>
                <div id="auth">
                        <p id="title">Login or Register</p>  
                        <table>
                                <tr>
                                        <td>
                                                Login
                                        </td>
                                        <td>
                                                Register
                                        </td>
                                </tr>
                                <tr>
                                        <td>
                                                <table>
                                                        <tr>
                                                                <td>
                                                                        Username:
                                                                </td>
                                                                <td>
                                                                        <input type="text" id="username" />
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        Password:
                                                                </td>
                                                                <td>
                                                                        <input type="password" id="password" />
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        &nbsp;
                                                                </td>
                                                                <td>
                                                                        <input type="button" id="login-submit" value="Login" />
                                                                </td>
                                                        </tr>
                                                </table>
                                        </td>
                                        <td>
                                                No registration available
                                        </td>
                                </tr>
                        </table>
                </div>
                <div id="mask"></div>
                <div id="new-game">
                        <table>
                                <tr>
                                        <td>Available games:</td>
                                </tr>
                                <tr>
                                        <td id="available-games"></td>
                                </tr>
                                <tr>
                                        <td>
                                                <span id="create-game">Create game</span>
                                        </td>
                                </tr>
                        </table>
                </div>
                <div id="game-mask"></div>
                <div id="game-area">
                        <div id="game-status">
                                <p id="player-greet"></p>
                                <p id="game-data">game data</p>
                        </div>
                        <div id="game-arena">
                                <div id="part-opponent">
                                </div>
                                <div id="part-field">
                                        <div id="field-enemy">
                                                <table>
                                                        <tr>
                                                                <td id="1-t-2" class="deck-card"></td>
                                                                <td id="2-t-2" class="spell-card"></td>
                                                                <td id="3-t-2" class="spell-card"></td>
                                                                <td id="4-t-2" class="spell-card"></td>
                                                                <td id="5-t-2" class="spell-card"></td>
                                                                <td id="6-t-2" class="spell-card"></td>
                                                                <td id="7-t-2" class="fusion-card"></td>
                                                        </tr>
                                                        <tr>
                                                                <td id="1-b-2" class="grave-card"></td>
                                                                <td id="2-b-2" class="monster-card"></td>
                                                                <td id="3-b-2" class="monster-card"></td>
                                                                <td id="4-b-2" class="monster-card"></td>
                                                                <td id="5-b-2" class="monster-card"></td>
                                                                <td id="6-b-2" class="monster-card"></td>
                                                                <td id="7-b-2" class="field-card"></td>
                                                        </tr>
                                                </table>
                                        </div>
                                        <div id="field-player">
                                                <table>
                                                        <tr>
                                                                <td id="1-t-1" class="field-card"></td>
                                                                <td id="2-t-1" class="monster-card"></td>
                                                                <td id="3-t-1" class="monster-card"></td>
                                                                <td id="4-t-1" class="monster-card"></td>
                                                                <td id="5-t-1" class="monster-card"></td>
                                                                <td id="6-t-1" class="monster-card"></td>
                                                                <td id="7-t-1" class="grave-card"></td>
                                                        </tr>
                                                        <tr>
                                                                <td id="1-b-1" class="fusion-card"></td>
                                                                <td id="2-b-1" class="spell-card"></td>
                                                                <td id="3-b-1" class="spell-card"></td>
                                                                <td id="4-b-1" class="spell-card"></td>
                                                                <td id="5-b-1" class="spell-card"></td>
                                                                <td id="6-b-1" class="spell-card"></td>
                                                                <td id="7-b-1" class="deck-card"></td>
                                                        </tr>
                                                </table>
                                        </div>
                                </div>
                                <div id="part-player">
                                </div>
                        </div>
                        <div id="card-preview">
                                card preview
                        </div>
                </div>
        </body>
</html>