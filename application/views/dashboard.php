
<div class="container-fluid">
<h2>Elecciones 2017</h2>

<div class="row">
              <div class="col-md-3">
                <div class="well">
<h3><i class="fa fa-users" aria-hidden="true"></i> Coordinadores <span class="label label-danger pull-right"><?php echo $coordinadores; ?></span></h3>
                </div>
              </div>
              <div class="col-md-3">
                <div class="well">
<h3><i class="fa fa-street-view" aria-hidden="true"></i> Responsables <span class="label label-success pull-right"><?php echo $responsables; ?></span></h3>
                </div>
              </div>
              <div class="col-md-3">
                <div class="well">
<h3><i class="fa fa-building-o" aria-hidden="true"></i> Centros <span class="label label-primary pull-right"><?php echo $centros; ?></span></h3>
                </div>
              </div>
              <div class="col-md-3">
                <div class="well">
<h3><i class="fa fa-user-circle-o" aria-hidden="true"></i> Electores <span class="label label-success pull-right"><?php echo $electores; ?></span></h3>
                </div>
                    <div id="chart_sexo_electores"></div>
              </div>
            </div><!--/row-->   
</div>





    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">



      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
    $.ajax({
        url: base_url + "electores/getSexoElectores",
        global: false,
        type: "POST",
        data: {

        },
        dataType: "JSON",
        async: true,
        beforeSend: function() {},
        success: function(info) {
        // Create the data table.

                console.log(info[2]['cantidad']);
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Sexo');
        data.addColumn('number', 'Cantidad');
        data.addRows([
          ['Masculino', parseInt(info[1]['cantidad'])],
          ['Femenino', parseInt(info[2]['cantidad'])]
        ]);

        // Set chart options
        var options = {'title':'Sexo',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_sexo_electores'));
        chart.draw(data, options);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert("ERROR EN EL SERVIDOR: " + thrownError);
            return false;
        }
    });
    

 

      }

    </script>



