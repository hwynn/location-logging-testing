<?php

	$mysqli = new mysqli("mysql.eecs.ku.edu", "hwynn", "KarpetSharks!", "hwynn");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}

	$mylatitude = floatval($_GET[mylat]);
	$mylongitude = floatval($_GET[mylong]);
	$gu = boolval($_GET[gu]);
	$gm = boolval($_GET[gm]);
	$gf = boolval($_GET[gf]);
	$hc = boolval($_GET[hc]);
	$fl = intval($_GET[fl]);
	
	$com1 = "SELECT `Floor`, `Gender`, `Latitude`, `Longitude`,
   ROUND(111.111 * 1000 *
    DEGREES(ACOS(COS(RADIANS('$mylatitude'))
         * COS(RADIANS(`Latitude`))
         * COS(RADIANS('$mylongitude' - `Longitude`))
         + SIN(RADIANS('$mylatitude'))
         * SIN(RADIANS(`Latitude`))))) AS distance_in_meters, `Handi_access`
	FROM  `Restrooms` 
	WHERE  `Floor` <9";
	
	$com2 = "";
	$com2 .= "
	AND  `Floor` =" . $fl;
	if(!$gu){
		$com2 .= "
		AND NOT `Gender` = 'unisex'";
	}
	if(!$gf){
		$com2 .= "
		AND NOT `Gender` = 'female'";
	}
	if(!$gm){
		$com2 .= "
		AND NOT `Gender` = 'male'";
	}
	if($hc){
		$com2 .= "
		AND `Handi_access` = true";
	}
	
	
	$com3 = "
	AND  `Accuracy` <100
	GROUP   BY ID
	ORDER BY distance_in_meters
	LIMIT 0 , 30";
	//Did it work?
	$tellMeThis = "{$com1}{$com2}{$com3}";
	
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
