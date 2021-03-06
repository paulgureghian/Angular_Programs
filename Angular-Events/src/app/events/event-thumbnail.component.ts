import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
      <span>Location: {{event.location.address}}</span>
      <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
 `,
 styles: [`

   .thumbnail { min-height: 210px; min-width: 400px; }
   .pad-left { margin-left: 10px; }
   .well h2 { color: green; }
 `]
})
export class EventThumbnailComponent {
  @Input() event:any
}
