<?php
session_start();
include '../globals.php';
$sql = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DBASE);
$function = $_POST['function'];
$response = array ();
switch ($function) {
        case 'login':
                $username = $_POST['username'];
                $password = md5($_POST['password']);
                $query = 'SELECT * FROM users WHERE nickname = "'.$username.'" AND password = "'.$password.'" LIMIT 1';
                $result = $sql->query($query);
                if ($result->num_rows > 0) {
                        $row = $result->fetch_assoc();
                        $_SESSION['auth'] = array ('logged'=>true, 'data'=>$row);
                        $response = $row;
                } else {
                        $response = false;
                }
                break;
        case 'checkAuth':
                if (isset($_SESSION['auth'])) {
                        if ($_SESSION['auth']['logged'] === true) {
                                $response = true;
                        } else {
                                $response = false;
                        }
                } else {
                        $response = false;
                }
                break;
        case 'getSession':
                $response = $_SESSION['auth']['data'];
                break;
        case 'logout':
                unset($_SESSION['auth']);
                break;
}
echo json_encode($response);
$sql->close();
?>
