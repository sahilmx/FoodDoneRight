# FoodDoneRight
it is essential for FoodDoneRight to be able to route incoming orders to the correct  restaurants depending on predefined delivery area polygons and the customer’s shipping  address.


# Start the Project 
npm install

npm start 

# to change the kml file 
access folder resources and repace the old file with the new one without changing the name 

# libraries used 
    -> TURF 
        used to check if the given points (Latitude , Longitude) are present in the given polygon 
    
    -> node-geojson
        rading a geojson file and served to turf  

    -> node-geocoder
        gets the latitude and longitude ofthe given location and help turf identify that point in a polygon 
    
    -> xmldom 
        used in rading the kml file and converting it to geojson along with togeojson 

    -> ejs 
        embedded javasript language used to create html page 

