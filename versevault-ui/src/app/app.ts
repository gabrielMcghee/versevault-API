import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Verse {
  reference: string;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <nav style="background:#222; padding:15px;">
      <a (click)="page='home'" style="color:white; margin-right:20px; cursor:pointer;">Home</a>
      <a (click)="page='verses'" style="color:white; margin-right:20px; cursor:pointer;">All Verses</a>
      <a (click)="page='add'" style="color:white; cursor:pointer;">Add Verse</a>
    </nav>

    <div style="padding:20px;">
      <h2>VerseVault UI</h2>

      <!-- HOME -->
      <div *ngIf="page === 'home'">
        <h3>Welcome to VerseVault</h3>
      </div>

      <!-- LIST -->
      <div *ngIf="page === 'verses'">
        <h3>All Verses</h3>

        <ul>
          <li *ngFor="let v of verses; let i = index">
            <span (click)="readVerse(v)" style="cursor:pointer; color:blue;">
              {{ v.reference }}
            </span>
            <button (click)="editVerse(i)">Edit</button>
            <button (click)="deleteVerse(i)">Delete</button>
          </li>
        </ul>
      </div>

      <!-- READ -->
      <div *ngIf="page === 'read'">
        <h3>{{ selectedVerse.reference }}</h3>
        <p>{{ selectedVerse.text }}</p>
      </div>

      <!-- ADD -->
      <div *ngIf="page === 'add'">
        <h3>Add Verse</h3>

        <input [(ngModel)]="newReference" placeholder="Reference" /><br><br>
        <textarea [(ngModel)]="newText" placeholder="Verse text"></textarea><br><br>

        <button (click)="addVerse()">Add Verse</button>
      </div>

      <!-- EDIT -->
      <div *ngIf="page === 'edit'">
        <h3>Edit Verse</h3>

        <input [(ngModel)]="editReference" /><br><br>
        <textarea [(ngModel)]="editText"></textarea><br><br>

        <button (click)="saveEdit()">Save Changes</button>
      </div>
    </div>
  `
})
export class App {
  page = 'home';

  verses: Verse[] = [
    { reference: 'John 3:16', text: 'For God so loved the world...' }
  ];

  newReference = '';
  newText = '';

  selectedVerse: Verse = { reference: '', text: '' };

  editIndex = -1;
  editReference = '';
  editText = '';

  addVerse() {
    if (this.newReference && this.newText) {
      this.verses.push({
        reference: this.newReference,
        text: this.newText
      });
      this.newReference = '';
      this.newText = '';
      this.page = 'verses';
    }
  }

  deleteVerse(index: number) {
    this.verses.splice(index, 1);
  }

  readVerse(verse: Verse) {
    this.selectedVerse = verse;
    this.page = 'read';
  }

  editVerse(index: number) {
    this.editIndex = index;
    this.editReference = this.verses[index].reference;
    this.editText = this.verses[index].text;
    this.page = 'edit';
  }

  saveEdit() {
    this.verses[this.editIndex] = {
      reference: this.editReference,
      text: this.editText
    };
    this.page = 'verses';
  }
}
