var tableData = data;

var UFO_table = d3.select("tbody");

tableData.forEach(function(UFO_sighting) {
    
    console.log(UFO_sighting);

    var row = UFO_table.append("tr");

    Object.entries(UFO_sighting).forEach(function([key, value]) {
        
        console.log(key, value);
        
        var Cell = row.append("td");
        
        Cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    
    UFO_table.html("");

    var InputElement = d3.select("#datetime");

    var InputValue = InputElement.property("value");

    console.log(InputValue);

    var FilteredData = tableData.filter(Sighting => Sighting.datetime === InputValue);

    console.log(FilteredData);

    FilteredData.forEach(function(Selections) {
        
        console.log(Selections);

        var row = UFO_table.append("tr");

        Object.entries(Selections).forEach(function([key, value]) {
            
            console.log(key, value);

            var Cell = row.append("td");
            
            Cell.text(value);

        });
    });
});