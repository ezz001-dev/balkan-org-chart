import { Component, OnInit } from '@angular/core';
import OrgChart from "src/assets/balkanapp/orgchart";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'balkan-org-chart';

  constructor() { }

ngOnInit() {

    let data = [
      { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
      { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
      { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
      { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
      { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
      { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
      { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 8, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 9, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 10, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 11, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 12, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 13, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 14, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 15, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 16, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 17, pid: 14, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 18, pid: 14, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 19, pid: 14, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 20, pid: 14, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 21, pid: 15, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 22, pid: 15, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 23, pid: 15, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 24, pid: 15, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 25, pid: 16, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 26, pid: 16, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 27, pid: 17, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 28, pid: 17, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 29, pid: 18, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
      { id: 30, pid: 13, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" },
  ]
    const tree = document.getElementById('tree');
    if (tree) {
        var chart = new OrgChart(tree, {
              nodeBinding: {
              field_0: "name",
              img_0: "img"
            },
            menu: {
              pdfPreview: {
                  text: "PDF Preview",
                  icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
                  onClick: preview
              }
        //       pdf: { text: "Export PDF" },
        // png: { text: "Export PNG" },
        // svg: { text: "Export SVG" },
        // csv: { text: "Export CSV" },
        // xml: { text: "Export XML" },
        // json: { text: "Export JSON" }
          },
        });

        function preview() {
          OrgChart.pdfPrevUI.show(chart, {
              format: 'A4',
              landscape: true,
              padding: 50
          });
        }

         chart.load(data);

        setTimeout(() => {
          data.map(val => {
            if(!val.pid) {
              console.log(val)
              return {
                ...val,
                pid : 0,
              }
            }else {
              return {
                ...val
              }
            }
          })

          data.push(
            { id: 0, name: "Denny Curtis 0", title: "CEO 0", img: "https://cdn.balkan.app/shared/2.jpg" },
          )

          chart.load(data);
        }, 5000);
    }
}




}
