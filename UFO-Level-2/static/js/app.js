var tableData = data;

var UFO_table = d3.select("tbody");

function clearBuildTable(tableData) {
    
    UFO_table.html("");
        
        tableData.forEach(function(UFO_sighting) {
            
            console.log(UFO_sighting);

            var row = UFO_table.append("tr");

            Object.entries(UFO_sighting).forEach(function([key, value]) {
                
                console.log(key, value);

                var Cell = row.append("td");
                
                Cell.text(value);
        });
    });
};

clearBuildTable(tableData);

function clickFilter(){
    
    var inputDate = d3.select("#datetime").property("value");

    var inputCity = d3.select("#city").property("value").toLowerCase();

    var inputState = d3.select("#state").property("value").toLowerCase();

    var inputCountry = d3.select("#country").property("value");

    var inputShape = d3.select("#shape").property("value");

    let FilteredData = tableData;
    if (inputDate) {FilteredData = FilteredData.filter(row=> row.datetime === inputDate); }
    if (inputCity) {FilteredData = FilteredData.filter(row=> row.city === inputCity); }
    if (inputState) {FilteredData = FilteredData.filter(row=> row.state === inputState); }
    if (inputCountry) {FilteredData = FilteredData.filter(row=> row.country === inputCountry); }
    if (inputShape) {FilteredData = FilteredData.filter(row=> row.shape === inputShape); }
    clearBuildTable(FilteredData)
};

d3.selectAll("#filter-btn").on("click", clickFilter) 