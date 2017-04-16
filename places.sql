CREATE TABLE Places (
    ID int NOT NULL AUTO_INCREMENT,
    Latitude decimal(10,7) NOT NULL,
    Longitude decimal(10,7) NOT NULL,
	accuracy int,
	epoch_time bigint,
    PRIMARY KEY (ID)
);

INSERT INTO Places (
	Latitude, 
	Longitude, 
	accuracy, 
	epoch_time
) 
VALUES (
	'38.9583526', 
	'-95.2532535', 
	'5612', 
	'1490044926517'
);