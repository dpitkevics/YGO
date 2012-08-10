<?php
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
                $gameid = $_POST['gameid'];
                $query = 'SELECT * FROM field WHERE gameid = '.$gameid;
                $result = $sql->query($query);
                $row = $result->fetch_array();
                $response = $row;
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
}
echo json_encode($response);
?>
