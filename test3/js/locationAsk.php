<?php

	$mysqli = new mysqli("mysql.eecs.ku.edu", "hwynn", "KarpetSharks!", "hwynn");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}

	$mylatitude = floatval($_GET[mylat]);
	$mylongitude = floatval($_GET[mylong]);
	
	$tellMeThis = "SELECT `Floor`, `Gender`, `Latitude`, `Longitude`,
   111.111 * 1000 *
    DEGREES(ACOS(COS(RADIANS('$mylatitude'))
         * COS(RADIANS(`Latitude`))
         * COS(RADIANS('$mylongitude' - `Longitude`))
         + SIN(RADIANS('$mylatitude'))
         * SIN(RADIANS(`Latitude`)))) AS distance_in_meters, `Handi_access`
	FROM  `Restroom2` 
	WHERE  `Floor` <9
	AND  `Accuracy` <100
	GROUP   BY ID
	ORDER BY distance_in_meters";
	//Did it work?
if ($result = mysqli_query($link, $query)) {

    $newArr = array();
    /* fetch associative array */
    while ($db_field = mysqli_fetch_assoc($result1)) {
        $newArr[] = $db_field;
    }
    echo json_encode($newArr); // get all products in json format.  
	//http://stackoverflow.com/questions/34897071/return-php-mysql-select-as-json
	}
	else{
		printf("I don't think it worked. =( \n");
	}

	/* close connection */
	$mysqli->close();
?>
while($row = mysqli_fetch_array($user)){
	echo "<br> username:". $row["Username"] . "<br>";
	echo "<img src=".$row["Image"]."><br>";
	echo "<br> avatar url:". $row["Image"] . "<br>";
}
$mysqli->close();



