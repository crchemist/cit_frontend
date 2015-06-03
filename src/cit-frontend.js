import {ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';

@Component({
  selector: 'cit-frontend'
})

@View({
  templateUrl: 'cit-frontend.html'
})

export class CitFrontend {

  constructor() {
    console.info('CitFrontend Component Mounted Successfully');
  }

}
