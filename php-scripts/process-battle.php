<?php
session_start();
include '../globals.php';
$sql = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DBASE);
$function = $_POST['function'];
$response = array ();
switch ($function) {
        case 'placeCard':
                $cardid = $_POST['cardid'];
                $position = $_POST['position'];
                $gameid = $_POST['gameid'];
                $query = 'UPDATE field SET `'.$position.'`='.$cardid.' WHERE gameid = '.$gameid;
                $response[] = $query;
                $sql->query($query);
                break;
        case 'checkDiff':
                if ($gameid != '') {
                        $gameid = $_POST['gameid'];
                        $query = 'SELECT * FROM field WHERE gameid = '.$gameid;
                        $result = $sql->query($query);
                        $row = $result->fetch_array();
                        $response = $row;
                }
                break;
        case 'checkCONDiff':
                $gameid = $_POST['gameid'];
                $query = 'SELECT id FROM cards_on_hand WHERE gameid='.$gameid;
                $result = $sql->query($query);
                $row = $result->fetch_assoc();
                $query = 'SELECT * FROM con_list WHERE conid='.$row['id'];
                $result = $sql->query($query);
                $data = array ();
                while ($rows = $result->fetch_assoc()) {
                        $data[] = $rows;
                }
                $response = $data;
                break;
        case 'removeFromHand':
                $cardid = $_POST['cardid'];
                $gameid = $_POST['gameid'];
                $query = 'SELECT id FROM cards_on_hand WHERE gameid='.$gameid;
                $result = $sql->query($query);
                $row = $result->fetch_assoc();
                $query = 'DELETE FROM con_list WHERE conid='.$row['id'].' AND cardid='.$cardid.' AND player=1 LIMIT 1';
                $sql->query($query);
                $response = $query;
                break;
        case 'getGameList':
                $query = 'SELECT * FROM tmp_games';
                $result = $sql->query($query);
                $data = array ();
                while ($rows = $result->fetch_assoc()) {
                        $data[] = $rows;
                }
                $response = $data;
                break;
        case 'startGame':
                $player_2 = $_SESSION['auth']['data']['id'];
                $gameid = $_POST['gameid'];
                $query = 'UPDATE tmp_games SET userid_2 = '.$player_2.' WHERE id='.$gameid;
                $sql->query($query);
                $query = 'SELECT * FROM tmp_games WHERE id='.$gameid;
                $result = $sql->query($query);
                $row = $result->fetch_assoc();
                $query = 'INSERT INTO games (userid_1, userid_2) VALUES ("'.$row['userid_1'].'", "'.$row['userid_2'].'")';
                $sql->query($query);
                $query = 'DELETE FROM tmp_games WHERE id='.$gameid;
                $sql->query($query);
                $query = 'SELECT id FROM games WHERE userid_1='.$row['userid_1'].' AND userid_2='.$row['userid_2'];
                $result = $sql->query($query);
                $response = $result->fetch_assoc();
                $response['player_2'] = $player_2;
}
echo json_encode($response);
$sql->close();
?>
