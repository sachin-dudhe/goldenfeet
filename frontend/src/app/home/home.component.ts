import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { HomeQuery } from './homeQuery';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    todaySelected = true;
    monthSelected = false;
    monthsSelected = false;
    yearSelected = false;

    addExpenseVisible: boolean = false;

  constructor(private service: HomeService) {}

  ngOnInit() {
    this.todayClicked();
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['52%', '32%', '26%'],
        series: [52, 32, 26]
      };
      this.emailChartLegendItems = [
        { title: 'Travel', imageClass: 'fa fa-circle text-info' },
        { title: 'Household', imageClass: 'fa fa-circle text-danger' },
        { title: 'Products', imageClass: 'fa fa-circle text-warning' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [45, 55, 40, 60, 52, 57, 25, 50, 55, 70],
          [30, 40, 35, 30, 42, 45, 15, 40, 40, 20],
          [10, 20, 35, 10, 22, 22, 10, 30, 10, 30],
          // [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846],
          // [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544],
          // [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 120,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      
      this.hoursChartLegendItems = [
        { title: 'Travel', imageClass: 'fa fa-circle text-info' },
        { title: 'Household', imageClass: 'fa fa-circle text-danger' },
        { title: 'Products', imageClass: 'fa fa-circle text-warning' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Average contribution', imageClass: 'fa fa-circle text-info' },
        { title: 'My contribution', imageClass: 'fa fa-circle text-danger' }
      ];
    }

    onAddClick(event){
      this.addExpenseVisible = true;
      console.log("event emitted!!");
    }

    private getDataSubscription: Subscription;
    
    ngOnDestroy() {
      if(this.getDataSubscription) {
        this.getDataSubscription.unsubscribe;
      }
    }

    returnProperDate(d) {
      return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    }

    todayClicked() {
      this.todaySelected = true;
      this.monthSelected = false;
      this.monthsSelected = false;
      this.yearSelected = false;
      var query = new HomeQuery();
      query.startDate = (this.returnProperDate(new Date())).toISOString();
      query.endDate = new Date((this.returnProperDate(new Date())).getTime() + (1000 * 60 * 60 * 24)).toISOString();
      query.user = 'gulamud';
      this.getDataSubscription = this.service.getTransactionList(query).subscribe((response: any)=>{
        console.log(response);
      });
    }

    monthClicked() {
      this.todaySelected = false;
      this.monthSelected = true;
      this.monthsSelected = false;
      this.yearSelected = false;
      var query = new HomeQuery();
      var date = this.returnProperDate(new Date());
      var firstDay =  this.returnProperDate(new Date(date.getFullYear(), date.getMonth(), 1));       
      query.startDate = firstDay.toISOString();
      query.endDate = date.toISOString();
      query.user = 'gulamud';
      this.getDataSubscription = this.service.getTransactionList(query).subscribe((response: any)=>{
        console.log(response);
      });
    }

    monthsClicked() {
      this.todaySelected = false;
      this.monthSelected = false;
      this.monthsSelected = true;
      this.yearSelected = false;
      var query = new HomeQuery();
      var date = this.returnProperDate(new Date());
      var firstDay =  this.returnProperDate(new Date(date.getFullYear(), date.getMonth()-3, 1)); 
      query.startDate = firstDay.toISOString();
      query.endDate = date.toISOString();
      query.user = 'gulamud';
      this.getDataSubscription = this.service.getTransactionList(query).subscribe((response: any)=>{
        console.log(response);
      });

    }

    yearClicked() {
      this.todaySelected = false;
      this.monthSelected = false;
      this.monthsSelected = false;
      this.yearSelected = true;
      var query = new HomeQuery();
      var date = this.returnProperDate(new Date());
      var firstDay =  this.returnProperDate(new Date(date.getFullYear(), 0, 1)); 
      query.startDate = firstDay.toISOString();
      query.endDate = date.toISOString();
      query.user = 'gulamud';
      this.getDataSubscription = this.service.getTransactionList(query).subscribe((response: any)=>{
        console.log(response);
      });
    }

    getTodayColor() {
      var c = this.todaySelected ? {'background-color':'lightblue'} : {'background-color':'transparent'};
      return c;
    }
    getMonthColor() {
      var c = this.monthSelected ? {'background-color':'lightblue'} : {'background-color':'transparent'};
      return c;
    }
    getMonthsColor() {
      var c = this.monthsSelected ? {'background-color':'lightblue'} : {'background-color':'transparent'};
      return c;
    }
    getYearColor() {
      var c = this.yearSelected ? {'background-color':'lightblue'} : {'background-color':'transparent'};
      return c;
    }
    
}
