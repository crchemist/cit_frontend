import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';
import {CitFrontend} from 'cit-frontend';

@Component({
  selector: 'main'
})

@View({
  directives: [CitFrontend],
  template: `
    <cit-frontend></cit-frontend>
  `
})

class Main {

}

bootstrap(Main);
