import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Chart from 'chartjs';

import './admin.html';


Template.Rating_admin_page.rendered = function(){
	$('#my-datepicker').datepicker();
  new Chart(document.getElementById("canvas"), {
    type: 'horizontalBar',
    data: {
      labels: ["5", "4", "3", "2", "1"],
      datasets: [
        {
          label: "Jollof rice + Grilled Meat (92 Reviews)'",
          backgroundColor: ["#FF991A", "#FF991A","#FF991A","#FF991A","#FF991A"],
          data: [10,44,1,21,16]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Jollof rice + Grilled Meat (92 Reviews)',
        fontColor: 'white',
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "white",
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "white",
          }
        }]
      }
    }
  });

}
