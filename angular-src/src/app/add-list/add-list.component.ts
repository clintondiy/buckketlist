import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {List} from '../models/List';
import {ListService} from "../services/list.service";

@Component({
    selector: 'app-add-list',
    templateUrl: './add-list.component.html',
    styleUrls: ['./add-list.component.css']
})

export class AddListComponent implements OnInit {

    private newList: List;
    @Output() addList: EventEmitter<List> = new EventEmitter<List>();
    constructor(private listService: ListService) {}

    ngOnInit() {
        this.newList = {
            title: '',
            category: '',
            description: '',
            _id: ''
        };
    }

    onSubmit() {
        console.log(this.newList.category);
        this.listService.addList(this.newList).subscribe(
            response => {
                console.log(response);
                if (response.success) {
                    // If success, update the view-list component
                    this.addList.emit(this.newList);
                }
            }
        )
    }

}
