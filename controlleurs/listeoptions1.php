<?php include 'connect.php' ?>

<?php 

$db = connect();

$select = "SELECT * from regions";

$requete = $db->prepare($select);

$requete->execute();


$row = $requete->fetchAll(PDO::FETCH_OBJ);
echo json_encode($row);

$requete->closeCursor();





?>











