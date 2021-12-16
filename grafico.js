google.load('visualization', '1.0', {'packages':['corechart']});
      google.setOnLoadCallback(drawChart);

      function drawChart() {

             var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');    
        data.addColumn('number', 'Profissionais');
        data.addRows([
            [ 'técnicos e auxiliares de enfermagem', 25000 ],
            [ 'Médicos', 37000 ],
            [ 'Enfermeiros', 43000],
            [ 'Fisioterapeutas', 15000 ],
            [ 'Psicólogos', 10000 ]
        ]);
      
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Profissionais');
        data2.addRows([
            [ 'técnicos e auxiliares de enfermagem', 12000 ],
            [ 'Médicos', 10000 ],
            [ 'Enfermeiros', 5000],
            [ 'Fisioterapeutas', 7000 ],
            [ 'Psicólogos', 9000 ]
        ]);

        var options = {'title':'Número de profissionais infectados',
                       'width':600,
                       'height':400,
                       colors: ['rgb(0, 143,0)']
                    };
                      
        
        var options2 = {'title':'Número de profissionais que veio a óbito',
                       'width':600,
                       'height':400};

        
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart2.draw(data2, options2);

        
}