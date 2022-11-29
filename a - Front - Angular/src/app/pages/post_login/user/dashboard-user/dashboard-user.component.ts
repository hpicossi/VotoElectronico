import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions1: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData1: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Votaciones finalizadas' ], [ 'Votaciones canceladas'], [ 'Votaciones activas'] ],
    datasets: [ {
      data: [ 14, 5, 1 ]
    } ]
  };

  public pieChartType2: ChartType = 'pie';

  public pieChartOptions2: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData2: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Votacion gratuita' ], [ 'Votaciones estandar'], [ 'Votaciones premium'] ],
    datasets: [ {
      data: [ 3, 12, 5 ]
    } ]
  };
  public pieChartType1: ChartType = 'pie';

  constructor(private breakpointObserver: BreakpointObserver) {}
}
