import { MainModuleNgFactory } from './main_module.ngfactory';
import { platformBrowser } from '@angular/platform-browser';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
