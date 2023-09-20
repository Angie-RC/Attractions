import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DiscoveryApiService} from "../../services/discovery-api.service";

export interface Attract {
  name:string;
  type: string;
  url:string;
  images:[];
  classifications:[];
}
@Component({
  selector: 'app-attraction-content',
  templateUrl: './attraction-content.component.html',
  styleUrls: ['./attraction-content.component.css']
})
export class AttractionContentComponent implements OnInit{
  eventData: Attract;
  displayedColumns: string[] = ['name', 'type', 'url', 'images', 'classifications'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private discoveryApi: DiscoveryApiService) {
    this.eventData={} as Attract;
    this.dataSource=new MatTableDataSource<any>();
  }
  ngOnInit(){
    this.dataSource.paginator=this.paginator;
    this.getAllAttractions();
  }
  getAllAttractions(){
    this.discoveryApi.getEvents().subscribe((response:any)=>{
      this.dataSource.data=response._embedded.attractions;
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
}
