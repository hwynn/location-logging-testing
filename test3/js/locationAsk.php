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
   ROUND(111.111 * 1000 *
    DEGREES(ACOS(COS(RADIANS('$mylatitude'))
         * COS(RADIANS(`Latitude`))
         * COS(RADIANS('$mylongitude' - `Longitude`))
         + SIN(RADIANS('$mylatitude'))
         * SIN(RADIANS(`Latitude`))))) AS distance_in_meters, `Handi_access`
	FROM  `Restrooms` 
	WHERE  `Floor` <9
	AND  `Accuracy` <100
	GROUP   BY ID
	ORDER BY distance_in_meters";
	//Did it work?
	
if ($result = mysqli_query($mysqli, $tellMeThis)) {

    $newArr = array();
    /* fetch associative array */
    while ($db_field = mysqli_fetch_assoc($result)) {
        $newArr[] = $db_field;
    }
    echo json_encode($newArr); // get all products in json format.    
	//http://stackoverflow.com/questions/34897071/return-php-mysql-select-as-json
}
?>
