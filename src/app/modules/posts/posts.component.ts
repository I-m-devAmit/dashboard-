import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostsService } from '../posts.service';


interface IPost{
  id?: string;
  author?: string;
  title?: string;
  category?: string;
  date?: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  dataSource!: MatTableDataSource<IPost>;
  posts: IPost[] = [];
  columns: string[] = ['id', 'author', 'title', 'category', 'date', 'actions'];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private postsService : PostsService) { 
  }

  ngOnInit(): void {

    this.postsService.getPosts().then(response =>{
      this.posts = response.data;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}