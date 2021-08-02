# TODO

```html
<li *ngFor="let dir of directories" (click)="onClick(dir, $event)">
  <a>
    <span>{{dir.title}}</span>
    <span *ngIf="dir.notice != null && dir.notice != 0">{{dir.notice}}</span>
  </a>
  <ul *ngIf="dir.subMenus">
    <app-api-side [directories]="dir.subMenus"></app-api-side>
  </ul>
<li>
```

```html
<li *ngFor="let el of tree" [ngClass]="el.item ? 'apiList__folder' : 'apiList__api'">
  <ul *ngIf="el.item">
    <app-api-list [tree]="el.item"></app-api-list>
  </ul>
  <p *ngIf="el.request" class="apiList__api">{{ el.name }}</p>
</li>
```

const指向的对象与数组，内部可以进行修改， 所以const意思是指针的指向不能改？
