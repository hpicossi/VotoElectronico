import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {


    public lineChartData: ChartConfiguration['data'] = {
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55 ],
          label: 'Año 2020',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
        {
          data: [ 38, 28, 50, 18, 66, 32 ],
          label: 'Año 2021',
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          fill: 'origin',
        },
        {
          data: [ 28, 48, 40, 19, 86, 27 ],
          label: 'Año 2022',
          yAxisID: 'y-axis-1',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }
      ],
      labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ]
    };
  
    public lineChartOptions: ChartConfiguration['options'] = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0':
          {
            position: 'left',
          },
        'y-axis-1': {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            color: 'red'
          }
        }
      },
  /*
     plugins: {
        legend: { display: true },
        annotation: {
          annotations: [
            {
              type: 'line',
              scaleID: 'x',
              value: 'March',
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                position: 'center',
                enabled: true,
                color: 'orange',
                content: 'LineAnno',
                font: {
                  weight: 'bold'
                }
              }
            },
          ],
        }
      }*/
    };
  
    public lineChartType: ChartType = 'bar';
  
    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
    private static generateNumber(i: number): number {
      return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    }
  
    public randomize(): void {
      for (let i = 0; i < this.lineChartData.datasets.length; i++) {
        for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
          this.lineChartData.datasets[i].data[j] = BarChartComponent.generateNumber(i);
        }
      }
      this.chart?.update();
    }
  
    // events
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
      console.log(event, active);
    }
  
    public hideOne(): void {
      const isHidden = this.chart?.isDatasetHidden(1);
      this.chart?.hideDataset(1, !isHidden);
    }
  
    public pushOne(): void {
      this.lineChartData.datasets.forEach((x, i) => {
        const num = BarChartComponent.generateNumber(i);
        x.data.push(num);
      });
      this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);
  
      this.chart?.update();
    }
  
    public changeColor(): void {
      this.lineChartData.datasets[2].borderColor = 'green';
      this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  
      this.chart?.update();
    }
  
    public changeLabel(): void {
      if (this.lineChartData.labels) {
        this.lineChartData.labels[2] = [ '1st Line', '2nd Line' ];
      }
  
      this.chart?.update();
    }
  
  

}

