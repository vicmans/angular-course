import { Component, EventEmitter, model, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  search = model('');

  @Output()
  onSearch = new EventEmitter

  triggerSearch(term: string){
    this.onSearch.emit(term)
  }
}
