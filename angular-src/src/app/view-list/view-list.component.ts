import {Component, OnInit} from '@angular/core';
import {ListService} from "../services/list.service";
import {List} from "../models/List";

@Component({
    selector: 'app-view-list',
    templateUrl: './view-list.component.html',
    styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

    private lists: List[] = [];

    constructor(private listService: ListService) {
    }

    ngOnInit() {
        // Load all list on init
        this.loadLists();
    }

    loadLists() {
        // Get all lists from server and update the lists property
        this.listService.getAllLists().subscribe(response => {
                this.lists = response;
                console.log(this.lists);
            },
        );
    }

    // deleteList. The delete list is being filtered out using the .filter method
    deleteList(list: List) {
        this.listService.deleteList(list._id).subscribe(
            response => this.lists = this.lists.filter(lists => lists !== list)
        )
    }

    onAddList(newList) {
        this.lists = this.lists.concat(newList);
    }

}
