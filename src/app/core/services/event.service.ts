import { Injectable } from "@angular/core";
import { Subject, Subscription, filter, map } from "rxjs";

interface Event {
  type: string;
  payload?: any;
}

type EventCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private handler = new Subject<Event>();
  constructor() { }

  broadcast(type: string, payload = {}) {
    this.handler.next({ type, payload });
  }

  subscribe(type: string, callback: EventCallback): Subscription {
    return this.handler.pipe(
      filter(event => event.type === type)).pipe(
        map(event => event.payload))
      .subscribe(callback);
  }
}
