import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: [ './item-card.component.scss' ]
})
export class ItemCardComponent {

    @Input() item;
    likedByCurrentUser = false; //only for mocking

    getCroppedItemDescription(): String {
        if (this.item.description.length > 85) {
            return this.item.description.substring(1,85)+'...';
        } else {
            return this.item.description;
        }
    }

    toggleLike() {
        if (this.likedByCurrentUser) {
            this.item.likes -= 1;
        } else {
            this.item.likes += 1;
        }
        this.likedByCurrentUser = !this.likedByCurrentUser;
    }


    
}
