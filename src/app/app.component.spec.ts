import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";


describe('it should run', () => {
  it('should try to init', () => { 
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('angular_tdd_project');
  })
});
