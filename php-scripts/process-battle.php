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
}
echo json_encode($response);
?>
