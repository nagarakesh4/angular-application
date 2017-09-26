import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number; //is changed based on the rating
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void { //will convert rating number to star width //will be invoked by changes in container property (rating)
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void{
        console.log(`rating ${this.rating} is clicked`);
        this.ratingClicked.emit(`rating ${this.rating} is clicked`);
    }
}
